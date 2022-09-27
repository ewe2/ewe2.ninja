---
date: "2022-06-09"
tags:
- operating systems
- Linux
- system administration
title: Why I Gave Up On Running A Debian Distribution
draft: true
toc: true
---
 
## Introduction: My Distro History

I started with Linux in the mid-1990's with Slackware 2.3 I believe, it was definitely pre-ELF. I upgraded that system to ELF and beyond and had basically a self-maintained and upgraded system until sometime in the later 90's when it became untenable and I wanted to try other distros. I gave an early RedHat (5.1) a go but the RPM manager was confusing and the Bray hell very quickly became  worse than that of Slackware. So I went on to Debian, starting initially with the end of Slink and the initial release of Potato. And for the most part I dist-upgraded from Potato through Stretch but by Jessie the wheels were beginning to fall off. My dissatisfaction with the distribution came from a number of growing concerns over the years: policy directions, maintainer fiefdoms and NIH, and other changes in the architecture of Linux distros which Debian accepts but I do not. They say if you meet a person with autism, you've met one person with autism, I venture the same is true of one person with a Linux system, there will be points of commonality but ideally its a form of Unix that conforms to an idea of Unix *in our minds* more than what is there. 

## My Issues With Debian

### A Distro That Does Not Understand Its Audience

This would be the biggest issue. I simply don't know who Debian serves, and I would challenge Debian to tell me. Because it cannot satisfy both a laptop user and a server administrator. A lot of work has been done to appeal to the former and frustrate the latter. Don't tell me systemd is a boon to administrators, their opinion is quite clear on the subject, it is a solution in search of a problem, and creates extra problems as well. More on that later. The point here is that Debian doesn't give you enough tools to really profile a use case for the distribution so that you can avoid a laptop-centric system if you want a straightforward desktop one, or you want to set up a headless file-server or web-server or docker farm. Other distros are eating Debian's lunch, using Debian's own package management and Debian is glacially slow to get to grips with this. It makes Debian an unsuitable distro for general use, because it will install boatloads of useless inter-related stuff that you have to weed out later.

### Maintainer Fiefdoms and Not Invented Here Syndrome

This kind of issue is usually a death-knell for any organisation. It tells you that the organisation is hidebound in policy dogma or, paradoxically, incapable of enforcing policy such that rogue elements are free to do as they please. The famous example given is usually DEC, whose engineering division were a law unto themselves. And Debian exhibits similar problems. There was the long-running dispute with the creator of cdrecord where the Debian maintainers attempted to force an inferior alternative they'd concocted between themselves upon users rather than deal with the requirements of the cdrecord author and by *force* I mean use a trick of the packaging system to ensure that if users tried to use a packaged version of cdrecord and its associated libraries that the author maintained himself, their packages would always trump his and conflict with them and get them removed in favour of theirs. It would take a savvy user to use careful settings to prevent this atrocity and a concerted effort by many users to complain and bring this to the notice of upper Debian management over *years* before finally the maintainers were brought to heel and their packages were actually removed from the Debian system. I wish this was the only example of this kind of behaviour but recently there was the war with Debian-multimedia.org where they did their best to deny users the right to use those packages in preference to Debian's own versions, generally once again because NIH and the desire to control the core multimedia libraries upon which many multimedia tools depend upon. That battle is largely won, users like myself just pin Debian-multimedia above the distros main packages and that's that. 

Another, and frankly bizarre example of this kind of bullying was over Jamie Zawininski's xscreensaver He [laid out his case](https://www.jwz.org/blog/2016/04/i-would-like-debian-to-stop-shipping-xscreensaver/). I invite you to just read the [archived bug report](https://web.archive.org/web/20160404063109/https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=819703) to get a sense of the idiotic responses to his frustrated request to update the stable package or remove it from the distribution. Now Jamie took the unorthodox route to adding a pop-up that would annoy users that the Debian maintainers weren't quick enough to catch, and it was the users who complained and since Jamie is active on the bug tracker you can see the rather lively result but a lot of devs were also involved in that conversation which was not pretty. However it should be left to Tormod Voldnen in [message #425](https://web.archive.org/web/20190921170730/https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=819703#425) to point out :

> It is understandable that upstreams are frustrated by seeing users
> stuck with older versions. It is sometimes frustrating for the
> packagers too, and the users. However it is the way a stable
> distribution works. The concept of stable releases is not unknown to
> the Jamie either, in fact he gives no access to any development
> repository or snapshots of XScreenSaver, and sometimes takes long
> between his releases. Version 5.30, which he hates us for having in
> stable, was still the latest release but already almost a year old
> when we entered the freeze at that time. If you look at the upstream
> changelog, the changes since then up to 5.34 are minor, and heavily
> focused on iOS issues that are not of interest to our users. It can be
> added that the one security issue that came up last year, was fixed
> immediately in squeeze and sid when we were notified. So the "old"
> version in stable is not a big issue, but a small irritation for every
> little fix that upstream has added later.

Is there an answer to this problem? Reasonable fellows like Tormond are not always found in Debian,alas. The trouble with maintainer fiefdoms great ones where the software is enhanced are a matter of good fortune, bad ones where they   take constant mistakes or over-officious updates resulting in rather pointless uploads have been noticeable. There is some oversight where software fits core Debian priorities such as Important, Required but in other areas there is no recourse other than feedback/complaints from end users reaching such fever pitch that someone else finally has to take notice as in the case of the cdrecord/deb-multimedia debacles. These are issues of goodwill in open source organisations that are nigh impossible to organise your way out of. A bad or but mistaken actor with good intentions can break a packaging system in subtle ways unless it is very carefully designed, if it is ever possible to avoid.

### A Question Of Policy

Not everyone will agree with a distribution's policy over its lifetime, circumstances change as will attitudes. Package maintainers attempts to enforce their fiefdoms are a kind of enforced unofficial policy without running it past administration and users, but they only get away with this for so long. Sooner or later real policy is voted on and written down, most of the time this is an in-house thing, but sometimes users get a say too. This can be a good thing but at this stage of its life Debian is now hidebound by old policies that are restricting its movements. Given that these are the very bones of the way things are done they're next to impossible to change. 

That's why the move to systemd was a major confrontation and I believe a signal of inevitable decline. The mechanisms the organization had for making the decision proved barely adequate to the task and failed in the most important test, of asking *"is this init replacement system worth risking an entire ecosystem on when it's still new and buggy and demanding dependencies that have little to do with init tasks?"* In fact, they even had to revisit the issue again because it was clear the first vote wasn't satisfactory to anyone on either side of the issue. And they still went ahead despite the objections of many. Many Debian users felt they were the last in the chain of consideration. Many felt so strongly a new distribution Devuan was created specifically to cut out any dependency on systemd and its friends. All because policy had constricted the organization.

### Last Straw

But what really motivated me to reduce my Debian dependence to a Debian-derived distro like MX was the Linux sound system and Debian's sound policies. Now, the audio system on Linux is frankly infuriating enough, it's taken 30 years for me to even have a DAW and a sound editor working stably enough that I've been able to do actual work with in the last few years. But I've had to put up with another of wonder boy Poeterings creations, what he was known for before systemd, pulseaudio. He was rather less interested in explaining it or maintaining it himself, he let others do that. Pulseaudio, when it works, is middleware that takes basically audio streams through ALSA from applications and doesn't let them bump into each other. It's a multiplexer. At some point someone else decided this needed to be split into two more pieces called pipewire and several optional backends depending on whether you prefer pulseaudio or JACK or plain ALSA. There was also a native backend but that seems to have disappeared lately. Anyway, this was just simply dumped on users one day out of the blue, replacing pulseaudio without warning. It sort of worked for some things, notably *not* browsers which hadn't been updated for it, and certainly not DAWs or Audacity. That improved a bit later on but eventually I gave up and went back to pulseaudio where I've stayed. It was no better when I went on to MX, the same issues with pipewire have continued, if anything, its worse software than pulseaudio ever was and that takes a lot of doing! Their issues tracker is a very long and busy list, good luck with that. But having had that experience of the sound driver just being whipped from under me, and what I can see happening with Wayland (and it's not good folks), I decided to get out of Debian. I tested the waters of antiX and MX with my file server first and it was rock solid. The real test, on a new SSD, has been great. Back to an init system, there are systemd bits like udevd and I'm stuck with dbus either way but it's a lot better. It's certainly no slower than systemd.

