---
title: "The strange case of the ching in the unix"
date: "2021-04-10"
toc: true
tags:
 - computers
 - unix
---


### Introduction

There are many mysteries of the early days of Unix. Because it grew organically, there wasn't really
anyone in charge of care and feeding except Dennis and Ken and the Bell Labs crews initial work.
Inevitably, things didn't get documented (after all, they were *doing stuff* not writing it up) and
some contributions got forgotten. When Don Libes wrote *Life With Unix: A Guide for Everyone* back
in the early 1990's, he found it impossible to track everything down even with his contacts and
experience in the early Internet age. It was already 20 years too late. So the mystery of `ching` is
likely to remain one, even if it is a small mystery.

### Discovery

I first discovered `ching` in the early 1990's also. Back then people were innocent enough to throw
all sorts of things on the big ftp sites of the time, and CSRG were incautious enough to throw parts
of BSD online before checking with USL if that was okay. And people were very keen to port
everything to Linux also, so a lot of SunOS stuff, quite illegally, was also being thrown on there.
Of course, this didn't last long, but while it did, there were a few things that slipped through,
even on to commercial CDs. One of these was the Infomagic series which was just dumps of
sunsite.unc.edu and tsx-11.mit.edu mainly, whatever was current because it was a resource for Linux
enthusiasts. And a version of BSD, probably 4.4 BSD-Lite1, was also online, and this was how I was
able to acquire a version of `ching`, and that version was incomplete. But let's start at the
beginning.

### Original ching (1978? V6 - 1979 V7)

We *think* that `ching` started with V7 because we have an original tape and the timestamped Pdp-11
binaries.  But that's not the real truth. Although `ching` made it into the official V7 tape, it came
without the sourcecode or any indication of who wrote it. The binaries themselves aren't even V7,
they're V6 and not even original V6 but what I would call V6B or proto-V7, a development before the
stdio library was in its fixed form but after the first wave of development, called libS which
superseded the old iolib. We can see this because the binaries themselves exhibit a specific form of
C setup code contained in crt0.s that did not exist except at this specific time when the core libraries
were in redevelopment. In addition, although `cno` (Copy Numerical Output) was stripped, and
therefore difficult to track, `phx` (Print Hexagrams) was *not* stripped and we can see the
object files it needed from the system to link as an executable, and these too are specifically from
this period. The mystery of the loss of the sourcecode has its origin here: too popular to let
bitrot in the V6 upheavals, it worked well enough in V7 to survive. This set the tone of the `ching`
story ever afterwards.

More famous than the program itself is the appropriately cryptic manpage. The
"game" itself was a collection, not a single file. It ran from a shell script
to allow users to input numbers from a coin toss directly or to frame a
question to `ching` and have that translated to numbers first before output. To
do this it used the `cno` and `phx` binaries,  an nroff-formatted text file of the
hexagrams (called `hexagrams`) and a file of macros ( called
`macros`) that the hexagram output would be filtered through. All
these except the shell script was in a directory of its own within
`/usr/games`. This demonstrates the early use of the Unix tools
philosophy of specific programs that do specific jobs very well. Here's the
original shell script source:

~~~ bash

#! /bin/sh
cd /usr/games/lib/ching.d
PATH=:$PATH
case $1 in
        [6-9]*) H=$1;shift;;
esac
if      test $H
then    phx $H | nroff $* macros -
else    cno | phx | nroff $* macros -
fi
~~~

Over the years, this general organization remained but as we'll see, things
get more complicated. Another important component of the original
`cno` is that it kept a log of questions, which was appended to a text
file called log in the current directory; if it couldn't find the log, or
something was wrong with its format (I'm not sure which at this stage), it
would print out an error message. Over the years, you can track the
differences in the `cno` binary by the existence of this log and the code for
it.

A note about the hexagrams file: this was clearly modelled on the Wilhelm
translation of the I Ching. It uses the same organization of oracle and
interpretations, and strictly speaking this is an infringement of the English
translation copyright. Further, it appears from a post to comp.os.bsd in 1994
from Keith Bostic, that at least the nroff macros were contestable under the
USL settlement and thus `ching` had never appeared in 4.4 BSD.No-one seems to
have tried to rewrite `hexagrams` or `macros` to use the
public domain Legge text or groff however. It was not until Caldera freed 32v
that it was realized that `ching` itself was now freed, see below.

### VAX ching (UNIX/32v 1979)

The mystery deepens when we look at the first port of V7 to the VAX. It is now
possible to run a 32v system in emulation with the SIMH vax780 simulator and
we find that `ching` had also been ported *with vax executables* along with it.
Still no sign of source code - in fact the one system available has no
sourcecode for the other games except fortune.c. The timestamps are December
1978, well before its official release in June 1979. 32v is crucial to the
history of later Unix, both System V and BSD derive from this port. This is
likely to have been the last time source code was available. I believe the
reason `ching` survived at all was because the surviving 32v executables were
still usable on VAX-based BSD derivatives for as much as 10 years later! We
can definitively say that this was the last time the code was actually
*compiled*, but it seems later `cno` itself may have been *changed*. 

But things are a little more interesting than that. `phx` certainly
survived unchanged, even unstripped. `cno` however has lost the log
file code! This is important because the `cno` here is *not* the
`cno` that survived in later BSD distributions! It's also valuable
because being not stripped, one can see the functions, variables and linked
library code.  Weirdly, the log file was left as it was and actually survived
into 3bsd, even though it was redundant!

It should be noted that Unix System III did *not* carry `ching`,
and it is likely that, if no source was available, most V7-derived games also
missed the cut besides `ching` from then on, including derivatives even if they
extended theirs with BSD.

### BSD ching (1979-1990 )

The first VAX BSD was released only six months later and on first sight,
appears to have identical binaries, but it is not that simple. Up to 3BSD, BSD
was still supported on PDP11 hardware. The 2.9BSD binaries are still standard
headers and look like they're the untouched v7 executables. On 3BSD however,
it looks like they're the 32v executables: unstripped and `cno` has no log file
code, but like the 32v port, it's still left in the directory. But there is a
crucial difference in the `cno` binary: 32v was essentially a minimal port
without all the VAX bells and whistles, so PDP11 executables had a "text
read-only" magic number, 0410 instead of 0407. But in the 3bsd executables,
there is a marked difference in the size of the symbol table! 3bsd did have a
different executable structure, but how did `cno` acquire this difference and
why was `phx` left unchanged? The extent of the change is apparent from a
`cmp -lb cno.32v cno.3bsd`. The header has been extended by 21 bytes,
and there are significantly large new areas which I am assuming are due to
3bsd's relocation requirements. But how the hell this was managed is a mystery
unless someone had access to an object file and then processed it with ld: it
would have taken a significant effort to alter the binary in another way. And
this is an unstripped binary: the stripped binary found in 4BSD onwards
completely does away with all the alteration. And yet `phx` remained unchanged
except stripped throughout!

There is one other possibility: the 2BSD source indicates the struggle to
upgrade v6 to v7 code for existing systems, still on PDP11 hardware. If
someone had access to the sourcecode during this period where BSD was just a
collection of updates and additions, it's possible that`cno`was modified.

It was not until the Reno port of 4.3 BSD that `ching` had to actually be
rewritten. This situation was replicated in other BSD variants, for instance
Ultrix and Dynix.

### Ching Rewrites (1988,1990)

We now come to rewrites. One of the oddities of the 4.4 BSD-Lite1 release was
that the macros and the hexagrams files went missing, but the rewrites of
`ching.sh`, `ching.cno.c` and `ching.phx.c`
remained. But now that the many BSD and research versions are freely
available, we can see that the data files remained untouched for many years,
even as the other files changed or went missing around them.

`ching.sh` itself went through the usual contortions of early version
control. I have found 3 different dated versions based on Berkeley code alone
and the VC timestamps don't make much sense.

The 4.3 BSD Reno port finally broke the back of pure VAX executables and a
rewrite was required. Guy Harris is credited: how he did it
(reverse-engineering? decompilation?) is not known; but the new versions of
cno and phx were able to work with the existing data files and shell script.
This was the version that made it into successors, but *not* 4.4BSD. Keith
Bostic believed it was because USL claimed nroff macros to be proprietory, but
one would have thought the `hexagrams` file warranted some copyright
attention too! I never understood this omission until 32v was freed.

The last major rewrite I've seen was for NetBSD 5.1 for the VAX. This rewrite
was by Perry Metzger in 2005, realizing that the freeing of 32v meant that the
data files (and nroff macros) were able to be distributed, and that little
mystery was finally solved.

Now we come to another fork in the road, SunOS. This generally tracked CSRG
releases until they developed their own SPARC architecture which at last
forced a rewrite. It was reverse-engineered by Tom Lyon who credits Ralph Muha
as being the original source of `ching`. 

#### Final Authorship

But Muha may have been the last in a chain of authors; as the manual page
still states, the algorithm is derived originally from Steve Johnson who
recently wrote to the TUHS list claiming first ownership of the code but that
he'd discontinued the effort because he recognised the copyright issue in
reproducing I Ching texts (at that time, anyway).


#### Summary of differences between ching versions

This is not an exhaustive list: many BSD VAX variants carried `ching`(6)
without modification from the 3BSD binaries (eg Ultrix).

{{< rawhtml >}}
<style>

        table.wiki-table {
                color: #ffffbb;
                    text-shadow: 0 1px 3px rgba(0,0,0, 0.5);
        }


        table.wiki-table td.hl1, table.wiki-table th, table.wiki-table th.hl1,table.wikitable td.hl1, table.wikitable th, table.wikitable th.hl1 {
            background: none repeat scroll 0% 0% #fff6c0;
            padding: 0.35em 0.5em;
            color: #000;
            text-align: left;
            border-radius: 0.6em;
            text-shadow: none;
            border: 2px solid #000;
            box-shadow: 0px 0.2em 0.2em rgba(0, 0, 0, 0.5);
            position: relative;
        }

        table.wiki-table td:nth-child(2n), table.wikitable td:nth-child(2n) {
                background: none repeat scroll 0% 0% #49483e;
        }   

        table.wiki-table td, table.wiki-table th, table.wikitable td, table.wikitable
th {
        border-width: 0px 0px 1px;
        border-style: none none solid;
        border-color: -moz-use-text-color -moz-use-text-color #CCC;
            -moz-border-top-colors: none;
            -moz-border-right-colors: none;
            -moz-border-bottom-colors: none;
            -moz-border-left-colors: none;
            border-image: none;
            padding: 0.35em 0.5em;

        }   

        table.wiki-table tr:hover td:nth-child(even),table.wikitable tr:hover td:nth-child(even){
            color: #000;
            background:#ffe658;
        }   

        table.wiki-table tr:hover td,table.wikitable tr:hover td{
            color: #000;
            background:#fff6c0;
            -webkit-transition:all .1s;
            -moz-transition:all .1s;
            -o-transition:all .1s;
            transition:all .1s 
        }

        table.wiki-table td, table.wikitable td {
            vertical-align: top;
        }
</style>

<table class="wiki-table" width="100%" style="font-size: 8pt;">
<tr>
<th> Unix version
</th>
<th> V7
</th>
<th> 32V
</th>
<th> 2.9BSD
</th>
<th> 3BSD
</th>
<th> 4BSD
</th>
<th> 4.3 Reno
</th>
<th> 4.4BSD
</th>
<th> SunOS 4.1.4
</th>
<th> NetBSD 5.1
</th>
<th> Notes
</th></tr>
<tr>
<th>Format
</th>
<td>PDP11 0407
</td>
<td>VAX 0410
</td>
<td>V7 binary
</td>
<td>32V binary
</td>
<td>3BSD binary
</td>
<td>source rewrite
</td>
<td>Reno source rewrite
</td>
<td>Reverse-engineer rewrite
</td>
<td>44BSD source rewrite
</td>
<td>32v version last source modification.
</td></tr>
<tr>
<th>cno
</th>
<td>Stripped
</td>
<td>Unstripped
</td>
<td>Stripped
</td>
<td>Unstripped, altered
</td>
<td>Stripped
</td>
<td>ching.cno.c with header
</td>
<td>Same as Reno rewrite
</td>
<td>Rewritten
</td>
<td>castching.c
</td>
<td>Altered cno version carried forward.
</td></tr>
<tr>
<th>phx
</th>
<td>Unstripped
</td>
<td>Unstripped
</td>
<td>Unstripped
</td>
<td>Unstripped
</td>
<td>Stripped
</td>
<td>ching.phx.c with header
</td>
<td>Same as Reno rewrite
</td>
<td>Rewritten
</td>
<td>printching.c+
</td>
<td>phx has the original table and dedication to Muha<br />
<p>+has a different hexagram table.
</p>
</td></tr>
<tr>
<th>Data files
</th>
<td>logfile
</td>
<td>no logfile
</td>
<td>logfile
</td>
<td>no logfile
</td>
<td>no logfile
</td>
<td>hexagrams modified for spelling and macros
</td>
<td>Released without data files
</td>
<td>Reno hexagrams version
</td>
<td>Reno hexagrams and macros modified
</td>
<td>
</td></tr></table>

{{< /rawhtml >}}

### The Mystery

Many questions remain: why didn't Muha's source survive transmission? The
truth is, many files didn't. For example, in the one 32v distribution
available, the only game source is `fortune.c` The source to maze(6)
is completely missing and it was never passed onto 32v. Many of the games we
know from historical Unix are in fact of BSD origin, not AT&T. 

So it's difficult to ascribe any particular motive for `ching` going missing.
Why was the code altered to remove the log file? Why and how was`cno`altered
from the 32v executable in 3bsd? Was there a reason for`cno`being stripped and
`phx` not, or was that just an accident of circumstance?

