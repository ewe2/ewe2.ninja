---
date: "2022-11-30"
tags:
- computers
- retro
title: HP p6-2020a
toc: true
---

## Introduction

Another HP box, this one dating from June 2012 (the beginning of the warranty). The motherboard seems to be a HP-only job by MSI the 7778 Jasmine, nominally 4x4G Ram slots but HP seems to have cut this down to 2 for most models that I've looked up including mine. The basic specs below:

## Motherboard

{{< ip "images/c03348809.jpg" Fit "375x355" >}}

* MSI MS-7778 Jasmine Motherboard micro-ATX
* Chipset: AMD A75 FCH 
* Memory sockets: 2 x DDR3
* Front side bus speeds: UMI 5 GT/s
* Processor socket: FM2
* Expansion Slots:
  * 1 PCI Express x16 (Gen 2.0)
  * 3 PCI Express x1 (Gen 2.0)
  * 1 PCI Express Mini Card (Gen 2.0){{<rawhtml>}}<br/><br/>{{</rawhtml>}}

## Processor

 AMD A10-5700 upgradeable to a A10-5800K but a jump in TDP from 65W to 100W

## Memory 

DDR3 RAM 8GB installed standard.Supports 1/2/4/8GB DIMMS, supports:

* PC3-10600 (DDR3-1333)
* PC3-12800 (DDR3-1600)
* PC3-14400 (DDR3-1866)

Here HP claims there are 4xRam slots. In practice, at least 3 models I have seen only support 2, which means at most 16GB ram can ever be supported.

## Video Graphics

These are built-in, depend on the processor model and will use system memory. Therefore, it is wise to use a PCIe graphics card for serious use. The Radeon will just manage directx11 and opengl 4.4 but not much else. See the linked processor and graphics for details.

* [AMD Trinity Quad-Core A10-5700](https://www.techpowerup.com/cpu-specs/a10-5700.c1102): [HD7660D](https://www.techpowerup.com/gpu-specs/radeon-hd-7660d-igp.c825)

## Audio

I don't know much about this codec at all.

* Integrated IDT 92HD73E Audio

## Networking

* Atheros AR8161L gigabit Ethernet controller
* 1000base-T ethernet

The system was sold with a 1TB HDD and a multi-format optical drive neither of which came with the unit I bought, so moving on...

## Memory card reader


Supports the following cards:

* Secure Digital (SD)
* Secure Digital High Capacity (SDHC)
* Memory Stick (MS), including Memory Stick Pro (MS-Pro)

Supports the following cards with an adapter:

* Mini Secure Digital (mini-SD)
* Micro Secure Digital (micro-SD)
* MS DUO
* MS Pro Duo

## I/O Ports

Front I/O Ports:

* USB 3.0: 2
* Microphone: 1
* Headphone: 1

Back I/O Ports:

Back I/O Panel:

{{< ip "images/c03348640.jpg" Fit "400x148" >}}


1. USB 2.0: 2
2. S/PDIF
3. VGA
4. DVI-D
5. LAN
6. USB 2.0: 2
7. USB 3.0: 2
8. Audio: Center/Subwoofer port (yellow orange)
9. Audio: Rear Speaker Out port (black)
10. Audio: Side Speaker Out port (gray)
11. Audio: Line In port (light blue)
12. Audio: Line Out port (lime)
13. Audio: Microphone port (pink)

## Photo Gallery

From left to right: front, back and internal view, closeup of internal view (viewed right-side up):

{{< ip "images/IMG_20221127_174053_081.jpg"  Resize "320x" >}}
{{< ip "images/IMG_20221127_174203_087.jpg"  Resize "320x" >}}
{{< ip "images/IMG_20221127_174117_694.jpg"  Resize "320x" >}}
{{< ip "images/IMG_20221127_174125_782.jpg"  Resize "320x" >}}

HP unit configuration string:{{<rawhtml>}}<br/>{{</rawhtml>}}
{{< ip "images/IMG_20221128_172434_165.jpg" Resize "1980x"  >}}
