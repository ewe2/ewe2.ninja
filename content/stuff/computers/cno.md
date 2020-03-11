---
title: "An Exploration Of Cno"
date: "2020-03-09"
toc: true
tags:
 - computers
 - unix
---


### Why look at Cno?

Cno is the unstripped and mysterious first binary that forms part of ching(6)
which first appears in V7 Unix. But, as we will see, that's not its origin! It is a
simple binary compared to its sister phx, but perhaps unique enough that it
was treated differently afterwards. Phx was basically unchanged but Cno was
altered several times! (see [The strange case of the ching(6) in the Unix][1])

[1]: /stuff/computers/ching/ "Ching"

As an exercise in understanding V7 Unix and to recover its long-lost source we
will disassemble cno. We'll use a few tools to do this: I have a copy of cno
on my Linux system and the first tasks are to use `od` and
`strings` to look for likely ways in.

#### Using strings

After `strings cno` we have predictably little. Examining the file directly for strings,  we find some important additions, the
word `log.a` as well as `%s` and then a long sequence `d o x f e g c s l L
u r D O X * U` which is actually part of the code for converting variables
in the printf() family. There is also some date-related strings following
that. As we know there was a log file and it had a particular format, we can
surmise that this is part of the code for that. It tells us definitely that C
was the language used, which tells us a lot about how the program will be
structured. If we cheat a little and look at the `phx` binary, we can
see that "hexagrams.r" appears. That also tells us that C is being used as "r"
and "a" are file handle flags: r for reading and a for text output.

All this is at the end of the file, which tells us that there will be mostly
library code appended by the linker, and references to it will be resolved in
the preceding code, so it will be useful to find those addresses to find the
system calls in the code. 

#### Code-hunting

The C compiler in Unix emitted code for the Unix assembler to translate; this
means it output code intended for the syntax of that assembler! `as`
had some significant differences from the standard macro assembler from RT-11,
particularly with input/output syntax. This is useful, because that gives us
another place to hunt for code. Another source of entry (use the source,
Luke!) are the optimizations used by the C compiler. This was before the era
of optional optimization! One important one is explained in the compiler's
sourcecode for the 2nd pass (usually the pass for resolving symbols):

~~~ text

/* Notice addresses of the form
 * $xx,xx(r)
 * and replace them with
 * (pc),xx(r)
 */
~~~

`$` is "AT&T syntax" for `#` in DEC assembler syntax, and is
usually a PC instruction. Remember that destination precedes source in most PDP11
operands, so this instruction is designed to reference the *address* of the
program counter from a register address rather than the PC directly.

#### System calls

Let's look for system calls. Helpfully, they're in a file
`/usr/include/sys.s` in V7 and are numbered. `SYS` is just a
synonym for `TRAP` in AT&T syntax, so its machine code is
`104400` and the masked bits are any number from 1 to 60. There are
lots of calls, and some will be false positives. Here is a list in ascending
order, with doubles and false positives weeded out:

~~~ text

104401 - exit
104403 - read
104404 - write
104405 - open
104406 - close
104410 - unlink
104415 - chmod
104421 - mount
104423 - setuid
104424 - getuid
104430 - utime.
~~~

There are many references to 104400 but that is a false positive. mount is an odd call also but more context is needed. setuid/getuid is very interesting, but may just be related to all the file calls which most of this stuff is dealing with. At least some of the calls will be for stdin/stdout and we know it writes a logfile.

#### Library calls

These are trickier: calls to most library routines are simple JMP instructions or variants on JMP, even more opportunity to make false positives particularly with subroutines. What we can be sure of are RTS, returns from subroutines.

### cno: Black Box Theory
When attempting to understand the internals of a machine or a program, it's helpful to get something to go on by considering what it takes as input and what it outputs. For instance, we know V7 cno wrote a log file of coin tosses in a particular format, we know that it could take random input or generated its own random input and it output six numbers for phx to interpret.

### od Listing: Header
{{< highlight hexdumnp >}}

00000000 000407 007146 000766 002152 000000 000000 000000 000001
{{< /highlight >}}

This first line of the od listing represents the a.out executable header:

{{< highlight c >}}

struct exec {
    int         a_magic; /* magic number */
    unsigned    a_text; /* size of text segment */
    unsigned    a_data; /* size of initialized data */
    unsigned    a_bss;  /* size of uninitialized data */
    unsigned    a_syms;  /* size of symbol table */
    unsigned    a_unused;
    unsigned    a_flag; /* relocation info stripped */
};
{{< /highlight >}}

For now, `0407` means a normal executable, the next four fields are
the sizes of each field. Note that the a_syms field is empty: the a_flag field
is `01` meaning that it is stripped, so the symbol table has been
zeroed. This also means that addresses have been resolved, so when we look for
jumps and address references, we should find them hard-coded in the
executable. We have 0766 bytes of variables but that is almost doubled by the
space for uninitialized variables so we'll probably see a cast or two to some
larger numbers.

### od Listing: crt0

{{< highlight hexdump >}}

0000020 170011 010600 011046 005720 010066 000002 004767 000356
0000040 022626 010016 004737 006040 104401
{{< /highlight >}}

The next lines in the file make up the C runtime header that sets up the stack-based executing environment. It disassembles to the following:

{{< highlight gas >}}

setd
mov sp, r0       / argc
mov (r0), -(sp)  / argv
tst (r0)+        / no args?
mov r0, 2(sp)    / effectively the .bss
jsr pc, _main    / jump to main
cmp (sp)+, (sp)+ / check argv
mov r0, (sp)     / push argument on the stack
jsr pc, *$_exit  / mode 37 for $expr.
sys exit
{{< /highlight >}}

The BSS space reserved for an initial stack would later morph into
`_environ` under because this isn't a V7 `crt0.s`, it's the
much simpler V6 version. And in fact our suspicion this might be the case is
strengthened by an interesting fact about many unix binaries: the assembled
`crt0.s` differs and this binary indicates that it is a V6 binary,
*not* a V7 binary. But let's be thorough and do some more work.

### od Listing: further on

{{< highlight hexdump >}}

0000040 022626 010016 004737 006040 104401 004567 006264 016701
0000060 007106 070127 031425 062701 015415 010167 007072 010100
0000100 000167 006252 004567 006232 004767 177736 010001 005000
0000120 071027 000021 005401 010146 004767 177716 010001 005000
0000140 073026 010100 000167 006206 004567 006166 005746 005065
0000160 177770 000402 060465 177770 005367 007210 002407 117700
0000200 007200 042700 177400 005267 007170 000404 012716 007362
0000220 004737 001140 010004 022704 177777 001354 005765 177770
0000240 001004 012716 000001 004737 000040 016500 177770 000167
{{< /highlight >}}

Picking up at byte 053, let's disassemble further

{{< highlight s >}}

/ _getrand
jsr r5, csv            / c save registers (standard library)
mov word_7170, r1      / we grab the seed from here
mul $31425, r1         / multiply by 13077
add $15415, r1         / add 6925
mov r1, word_7170      / return result, see text!
mov r1, r0
jmp cret               / pop regs
/ -- end of _getrand

/ this is _getrnum
jsr r5, csv            / another subroutine
jsr pc _getrand        / this is calling the previous subroutine
mov r0, r1
clr r0
div $21, r0
neg r1
mov r1, -(sp)         / this is probably a parameter
jsr pc _getrand
mov r0, r1
clr r0
ashc (sp)+, r0        / definitely a parameter here
mov r1, r0
jmp cret              / end
/ end of _getrnum

/ this is _getques
jsr r5, csv
tst -(sp)
clr -10(r5)
dec word_7404
blt loc_214
movb $word_7402, r0 / this is getting from __iob
bic $-400, r0       
inc word_7402       / incrementing __iob
br loc_224
mov $7362, (sp)     / $__iob, (sp)
jsr pc,  *$_filbuf
mov r0, r4
cmp $-1, r4
bne loc_164
tst -10(r5)         / major difference here to v7-generated code
bne loc_252
mov $1, (sp)
jsr pc, sub_6040    / this is another oddity.
mov -10(r5), r0
jmp cret           / pop
{{< /highlight >}}

At this point if we compare V7-generated code, we can see there are great
similarities but also important differences. Subroutine setup is much simpler
here. The assembler optimizes code differently in `_getques` and its
I/O routine differs. This is further confirmation that here is a V6 binary
pretending to be a V7 one. 

### od: Finding the Seed Routine
So the first subroutine here had me wondering, clearly not `main()` but a function, and the answer comes from the Reno code by Guy Harris: it is indeed the original seed routine!

{{< highlight c >}}

unsigned getrand()
{
    return(seed = (seed*13077) + 6925);
}
{{< /highlight >}}

At this point, I tried the attack from the other end, a known-text attack by
writing a C program to try and get the same result. I tried a separate
function with a global variable `seed` and a main-local sum. The
results both in object and assembler form were enlightening. If cno had not
been stripped, the object code would have at once shown the structure of the
program. By comparison, the VAX 32V code is not as helpful to identify global
variables and functions. 

Another thing to consider is whether cno was written at a time when the system
itself was evolving its assembler output. If the seed is calculated in a
separate function, not only is seed moved using a different register, there is
also extra stack management code. Cno did not exhibit the stack management
code, so calculating the seed in `main()` might get closer to the original code.

To my surprise, seed was *not* moved via the PC but r5 and there was still some
stack management code missing.  It is still possible that cno used global
variables instead of local ones, but there are still questions about this.
Given that the assembler output suggests that the seed value was taken from a
subroutine, it might be the linker which is evolving or changing things from
object code to executable.

### od: Finding the Throw Routine

Most rewrites implement the throw as filling an array but using a different algorithm. This is more complicated, the Reno C code runs:

{{< highlight c >}}

char string [7]; /* space for 6 digits plus terminator */
char *change();  /* pre-ANSI forward dec */

int table[2][2][2] = {
    {{6,7},{7,8}},
    {{7,8},{8,9}},
};

char *
change()
{
    register int i;

    for (i=0;i<6;i+++){
        string[i] = table[getrand()][getrand()][getrand()] + '0';
    string[i] = '\0';
    return(string);
}
{{< /highlight >}}

The Reno code actually goes a little further in randomness than this but we already know the original random code. The table in cno starts at byte 7172, just after where the seed is stored, because the seed is BSS (uninitialized) and the table is DATA (initialized).

### Known-plaintext attack

I bit the bullet and compiled a version of the Reno rewrite on V7: it turns
out to be pretty much what the original code was, except for the logfile. So,
going back to the previous disassembly section, we can see that the helper
functions were either all written before main(), possibly either for scoping
reasons or thats just the way the linker reorganized the file. For instance,
here is `char *change()` from the IDA Pro disassembly; note how call is
substituted for internal function calls where as uses jsr pc syntax

{{< highlight s >}}

sub_262:                                / CODE XREF: sub_416+62
                 jsr     R5, sub_6342   / csv
                 sub     #6, SP
                 clr     R4

loc_274:                                / CODE XREF: sub_262+116^Yj
                 call    sub_104        / _getrnum
                 bic     #-2, R0
                 mov     R0, -10(R5)
                 call    sub_104
                 bic     #-2, R0
                 mov     R0, -12(R5)
                 call    sub_104
                 bic     #-2, R0
                 mov     R0, -14(R5)
                 asl     R0
                 add     -12(R5), R0
                 asl     R0
                 add     -10(R5), R0
                 asl     R0
                 mov     7152(R0), R0   / this is _table
                 add     #60, R0 ; '0'
                 movb    R0, 10134(R4)  / this is _string
                 inc     R4
                 cmp     #6, R4
                 bgt     loc_274
                 clrb    10134(R4)      / string
                 mov     #10134, R0     / again
                 jmp     loc_6356
{{< /highlight >}}

I don't know if Harris disassembled the VAX version or the PDP11 version but that is amazingly accurate. It would seem he either forgot or gave up implementing the log file, which is all that is left for me to do. The disassembly of main() indicates that this is probably where it got called, and the actual writing was done in a function.

### Recovering the V6 code

Most of the existing rewrite can be kept; the issue is that V6 was a very different beast for programming to V7.

* No c preprocessor. The practical upshot of this is no #includes. We can use #defines.
* No standard lib. This isn't exactly true, but we are more dependent on our own I/O routines than simple calls to a shared library.
* iolib is only good for basic I/O, like printf, getch, putch and tmpnam. Everything else has to be done ourselves. 
* we have a bit of a crib from phx because it was unstripped: the object files of system code can be tracked that way.
* Both cno and phx were written at what appears to have been what I would call v6b, version 6 as the standard library was moving from libS to libc, as Dennis Ritchie formalised the library proper. This can be seen in crt0.s where the form is not of standard V6 but of the libc V6 before it became standard in V7 and changed yet again. I was able to track this using the UNSW archives which have both libraries at the critical point.

This essay is a work in progress. 

