Let's just do some test markup for the structure.

Blah blah blah blah.

<p>Testing syntax</p>
<div markdown="1" style="text-align:left">
~~~ cpp

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

~~~
</div>
