---
title: "COVIDsafe is security theatre"
date: "2020-05-01"
toc: true
tags:
 - blogs
 - security
 - coronavirus
 - software
---

### Executive Summary

COVIDsafe is security theatre because its assumptions are vague and its
promises are unrealistic.

### Introduction

So you might have noticed we're having a bit of a pandemic. Government
responses to it have been many and varied, but of interest to me is the
Australian governments rollout of the [COVIDsafeapp](https://www.health.gov.au/resources/apps-and-tools/covidsafe-app),
touted as a non-intrusive tracing application to find infected people faster
and stop the spread of the virus. The code isn't exactly crystal-clear; it's
descended from an opensource tracing application that's been rejigged for
iPhone and Android via a shared framework by Apple/Google which we are assured
is an open API and the results of a simple decompilation at least give us the
app without any worrying obfusticated binary blobs...yet. And that's the
problem. The whole "yet" problem. Because despite its initial friendly rollout
and reassuring thumbs-up from professionals, there's a whole list of issues
with the app that add up to a case of "security theatre".

### Security Theatre

Security theatre is a real problem. The term was invented by Bruce Schneier to
describe an investment in countermeasures to provide the appearance of
security without any serious results. It's an unfortunate side-effect of
management practices that get decoupled from the business systems they purport
to manage. Never discount the ability of management to ignore reality when
they have a vested interest to do so. Unfortunately this blindness and casual
attitude to security can have severe consequences especially when least
expected.

A terrible example is the loss of the space shuttle Columbia: management
assumed foam wasn't a serious issue even though they were aware that a piece
had hit the shuttle and their review processes downgraded the seriousness of
the problem; the engineers who might have warned them assumed their opinion
was not wanted and dared not risk their jobs to force the issue.  With
hindsight, if the two sides had managed to communicate it was possible they
might have verified the real problem and saved the astronauts but we shall
never know. What we do know is that NASA management had to be dragged in front
of a demonstration where a piece of foam was shot at a piece of shuttle tile
in identical fashion to the critical incident with similar results before they
admitted that it was even possible the damage could be done.

### Problems with the app

However, security theatre with COVIDsafe is less simple and doesn't yet have
the benefit of hindsight to have its dangers pointed out in cut and dried
fashion. But I shall try with the help of some notes from a friend in the
security business who like me is rather cautious about the app: the first most
obvious problem is that it doesn't work on iPhones properly, even though it's
supposed to be based on a shared framework with Android. For it to work you
have to have bluetooth working, the screen active and the phone in your hand
and in use for around 15 minutes. That's not very long, certainly not long
enough for any serious telemetry they're claiming to be getting. It makes no
difference to the virus which can live on surfaces up to 72 hours whether you
were in the same vicinity of the person who left it or not.  We know it can
work through airborne transmission but likely not for much longer than a
couple of hours. So already we have half the smartphone-using population
without a working app in proximity to possibly infected areas that the app has
no idea abput.

Then there is the problem of takeup. For it to have an appreciable effect they
think it needs 40% installation. 3.5 million people have downloaded it, thats
only 15%. And remember, a lot of those people are using iPhones. 

Now we come to the "yet". The "yet" is whatever they do to upgrade the phones,
will they fix the bugs (there are a lot)? Will iPhones work in the same way to
Android using the framework (hard to see how)? More concerningly, will they
use it as a default tracker by adding more functionality to add real ID
information and bury all this in a binary blob that's definitely illegal to
look at? Maybe not, but we don't exactly trust our government on the basis of
their track record so far. The best you can say of the effort is that at least
it's incompetent and not deliberately malicious *so far*. By itself it doesn't
actually do anything but possibly alert authorities to already known targets,
and how useful is that, really?

### Conclusion

At this stage that's all I can conclude from the current state of the app and
its takeup. But I won't be installing it myself because I can't see any
tangible benefit to me or to anyone around me and I'm worried by the blithe
assumption that this will be "enough". It's a sales job and it may do great
harm in presenting a "feel good" facade to a serious situation.

### Some Further Reading

[15 minutes is arbitrary]: (https://www.ecdc.europa.eu/sites/default/files/documents/covid-19-public-health-management-contact-novel-coronavirus-cases-EU.pdf)

[App doesn't work on iPhone]: (https://www.abc.net.au/news/2020-04-26/coronavirus-tracing-app-covidsafe-apple-iphone-covid-19/12187448)

[iPhone market share]: (https://www.gizmodo.com.au/2020/01/apples-iphone-australian-market-share-grows-as-huawei-crashes/)

[German & French stand-off over tracing app]: (https://appleinsider.com/articles/20/04/24/apple-google-in-a-standoff-with-germany-and-france-over-contact-tracing-privacy)

[72 hours on a surface]: (https://www.cdc.gov/coronavirus/2019-ncov/hcp/disposition-in-home-patients.html)

[3 hours in the air]: (https://www.foxnews.com/health/coronavirus-live-plastic-stainless-steel-for-up-to-3-days)

[Two aisles]: (https://www.dailymail.co.uk/news/article-8203189/Coronavirus-simulation-shows-single-cough-spread-germans-two-supermarket-aisles.html)

[60% and the NHS]: (https://www.independent.co.uk/news/uk/politics/coronavirus-app-uk-nhs-contact-tracing-phone-smartphone-a9484551.html)

[How does CovidSafe app work]: (https://www.smh.com.au/politics/federal/how-will-the-coronavirus-app-work-20200421-p54ltg.html)

[Fallible human memory and contact tracing]: (https://www.bbc.com/future/article/20200415-covid-19-could-bluetooth-contact-tracing-end-lockdown-early)

[App download & lower restrictions]: (https://www.abc.net.au/news/2020-05-01/national-cabinet-coronavirus-restrictions-could-ease-next-week/12205304)
