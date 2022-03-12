---
date: "2020-03-09"
tags:
- computers
- computer science
title: Bootstrapping
toc: true
---

### Introduction

In 2011 Jean-Baptiste Queru, posted an enticing overview [sadly, via archive.org now](https://web.archive.org/web/20150327142346/https://plus.google.com/+JeanBaptisteQueru/posts/dfydM2Cnepe) of the complexity of software layers in G+. But I want to tangent off one aspect of it, excusing the very good points he wants to make about the patent
system:

>Can we simplify further?
>
>In fact, very scarily, no, we can't. We can barely comprehend the complexity of a single chip in a computer keyboard, and yet there's no simpler level. The next step takes us to the software that is used to design the chip's logic, and that software itself has a level of complexity that requires to go back to the top of the loop.
>
>Today's computers are so complex that they can only be designed and manufactured with slightly less complex computers. In turn the computers used for the design and manufacture are so complex that they themselves can only be designed and manufactured with slightly less complex computers. You'd have to go through many such loops to get back to a level that could possibly be re-built from scratch.
>
>Once you start to understand how our modern devices work and how they're created, it's impossible to not be dizzy about the depth of everything that's involved, and to not be in awe about the fact that they work at all, when Murphy's law says that they simply shouldn't possibly work.
>
>For non-technologists, this is all a black box. That is a great success of technology: all those layers of complexity are entirely hidden and people can use them without even knowing that they exist at all. That is the reason why many people can find computers so frustrating to use: there are so many things that can possibly go wrong that some of them inevitably will, but the complexity goes so deep that it's impossible for most users to be able to do anything about any error.
>
>That is also why it's so hard for technologists and non-technologists to communicate together: technologists know too much about too many layers and non-technologists know too little about too few layers to be able to establish effective direct communication. The gap is so large that it's not even possible any more to have a single person be an intermediate between those two groups, and that's why e.g. we end up with those convoluted technical support call centers and their multiple tiers. Without such deep support structures, you end up with the frustrating situation that we see when end users have access to a bug database that is directly used by engineers: neither the end users nor the engineers get the information that they need to accomplish their goals.
>
>That is why the mainstream press and the general population has talked so much about Steve Jobs' death and comparatively so little about Dennis Ritchie's: Steve's influence was at a layer that most people could see, while Dennis' was much deeper. On the one hand, I can imagine where the computing world would be without the work that Jobs did and the people he inspired: probably a bit less shiny, a bit more beige, a bit more square. Deep inside, though, our devices would still work the same way and do the same things. On the other hand, I literally can't imagine where the computing world would be without the work that Ritchie did and the people he inspired. By the mid 80s, Ritchie's influence had taken over, and even back then very little remained of the pre-Ritchie world.

While this is entertaining, the truth is that hardware layers are as reducible
as software, you just have to know some computer history. Queru admits he
stopped at a level of complexity, yet to throw your hands up at the hardware
layer does a disservice to the argument.  

Computer history is the problem that IT educators face, because the industry
refuses to remember, even when its foundations rest on an accretion of layers
that make the high-level functions work. While it is true that we have a battle of
the layers, it doesn't absolve us from describing them because often the
explanation requires an understanding of something deeper than just
screen-size.

Another reason to engage with the layers is that one day we may need to
reorient at a layer. Computing logic does lend itself very well to
metalanguage but it also follows that you have a choice of encoding that
metalanguage.

To make that argument clearer, note that the software techologies of
compression and error-correction, which are related, have changed many times
as have the popular utilities based on them. It was not declaimed from on high
that one or two compression methods were the *right* ones; often it was a
matter of the existing technology or algorithmic preference of the programmer.
So in a real sense, this layer changes a lot, yet we are often unaware of
that, except for getting to grips with a new file extension. Another example
of layer reorientation is installing a new OS, often a very powerful way to
change the way you use computers. The story of smartphones is very appropriate
to this too.

Viewed this way, you can see that Queru's layers have in fact changed and
evolved often independently of each other many times over the evolution of
computing. While it will probably always be true that applications evolve
according to the needs and capabilities of the software and hardware layers
below them, sometimes a new paradigm arises because of those changes.


### Going the Other Way

Another way to critique this overview is to take the opposite approach, ie
from when you press the button to start your computer to when your browser
finishes loading. Bootstrapping is a process akin to chemical catalysis:
you have something in one state requiring a catalyst to get to another state.
Computer hardware requires electricity and a stepping-stone process of
software to reach the point at which an operating system is self-sustaining.
Compilers get from one language to another via an intermediate form, much like
writing another simpler compiler. Essentially, it is a state change issue.

That required simplification of software in both instances is the crucial
insight. In order to solve any big problem its easier to break that problem
down. For instance, the first problem of hardware bootstrapping once the
circuits are powered is to get the peripherals going to the point we can try
to load an operating system. This is where the BIOS comes in, which once was a
manual operation with actual switches. Even in the minicomputer era, it was
common to hand-switch the reset and point the cpu to the preferred loading
address.  BIOSes became crucial to the microcomputer world, where the
architecture was too small to support a hardware-independent software layer.
For the years that MS-DOS ruled the PC world, it relied on BIOS calls during
normal operation!  The BIOS redirects the CPU to load the bootblock of the
preferred peripheral (be it USB, CD or hard drive these days) and in turn that
loads a bootmanager which loads the OS kernel which does the rest. Each stage
is a distinct sub-state on the way from cold hardware to running system.
Continuing the process, the kernel sets up devices, memory management and
filesystems, and passes control to the system software which manages things
like network protocols, preferred keyboard setup, the UI, user authentication
and finally you press the icon which runs your browser, it opens its default
page and you're ready to browse.

Bootstrapping compilers is an even trickier concept. The goal of any
self-sufficient compiler is to be able to compile itself, known as
being Turing-complete. To do this, the general technique is to write
increasingly capable versions of the compiler until it is able to parse its
own language into its own binary. It is often begun in another language or
even assembler for a first version, and then that version is used to compile a
more pure version and so on. There is another, deeper meaning to this sense of
bootstrapping: the very components of a compiler consist of
non-Turing-complete systems such as finite state machines.

These concepts are vital to grasping the essential nature of computing: based
on a logic-chain that uses the trick of metalanguage to reencode a larger
problem into a more manageable problem.
