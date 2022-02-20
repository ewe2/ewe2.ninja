---
title: "testing mermaid"
date: 2022-02-15
toc: true
tags:
   - test
   - mermaid
---

This is an explanatory note about how I implemented Mermaid on my site with the Hermit theme. Hermit doesn't have a partials layout for javascript like some other themes, it does its javascript processing in `baseof.html` (a refactoring opportunity there) so I took some cues from Edward Ross' [implementation](https://skeptric.com/diagrams-in-hugo/) mainly his shortcode and his graph test just for an example. The main implementation of `partials/mermaid.html` is simply

~~~ html
{{ $mermaid := resources.Get "js/mermaid.min.js" }}                                                                                                                          
{{ $secureJS := $mermaid | resources.Fingerprint "sha512" }}                                                                                                                 
<script crossorigin= "anonymous" defer="defer" type="text/javascript" src="{{ $secureJS.Permalink }}" integrity="{{ $secureJS.Data.Integrity }}"></script>                   
<script>                                                                                                                                                                     
  var config = {                                                                                                                                                           
    startOnLoad:true,
    securityLevel: 'loose',
  };
  mermaid.initialize(config);
</script>
~~~

From there, I just put `{{ partial "mermaid.html" }}` in `baseof.html` and the implementation was complete. Note that I used the property `Permalink` rather than `RelPermalink` because the theme is set up that way.

## basic graph test

{{<mermaid>}}
graph LR;
   A[sheets ream<sup>-1</sup> <br> 500] -->|-1| B[thickness <br> 10<sup>-2</sup>cm <br>] 
C[thickness ream<sup>-1</sup> <br> 5cm] --> B
B --> D[volume <br> 1cm<sup>3</sup>]
E[height <br> 6cm] --> D
F[width <br> 15cm] --> D
{{</mermaid>}}

## flowchart test

{{<mermaid>}}
flowchart LR
A[Hard] -->|Text| B(Round)
B --> C{Decision}
C -->|One| D[Result 1]
C -->|Two| E[Result 2]
{{</mermaid>}}

## class diagram

{{<mermaid>}}
classDiagram
  Animal <|-- Duck
  Animal <|-- Fish
  Animal <|-- Zebra
  Animal : +int age
  Animal : +String gender
  Animal: +isMammal()
  Animal: +mate()
  class Duck{
    +String beakColor
    +swim()
    +quack()
  }
  class Fish{
    -int sizeInFeet
    -canEat()
  }
  class Zebra{
    +bool is_wild
    +run()
  }
{{</mermaid>}}

## state diagram

{{<mermaid>}}
stateDiagram-v2
[*] --> Still
Still --> [*]
Still --> Moving
Moving --> Still
Moving --> Crash
Crash --> [*]
{{</mermaid>}}

## pie chart

{{<mermaid>}}
pie
"Dogs" : 386
"Cats" : 85
"Rats" : 15
{{</mermaid>}}

## gantt diagram

{{<mermaid>}}
gantt
dateFormat  YYYY-MM-DD
title Adding GANTT diagram to mermaid
excludes weekdays 2014-01-10

section A section
Completed task            :done,    des1, 2014-01-06,2014-01-08
Active task               :active,  des2, 2014-01-09, 3d
Future task               :         des3, after des2, 5d
Future task2               :         des4, after des3, 5d

{{</mermaid>}}

## git graph (experimental)

This doesn't work too well within the contraints of my theme, and the computed svg cannot be controlled directly by design so it's not likely to be a popular variant despite there being a use case for it. It's better to generate an actual image in this case instead of on-the-fly-generation.

{{< ip "gitgraph.png" Fit "780x150" gitgraph >}}

{{<rawhtml>}}
<br>
<br>
<br>
{{</rawhtml>}}

## user journey diagram

This one is my favourite, I think {{< emoji ":smile:" >}}

{{<mermaid>}}
journey
  title My working day
  section Go to work
  Make tea: 5: Me
  Go upstairs: 3: Me
  Do work: 1: Me, Cat
  section Go home
  Go downstairs: 5: Me
  Sit down: 5: Me
{{</mermaid>}}
