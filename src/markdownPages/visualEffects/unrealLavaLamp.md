---
title: "Raymarching lava lamp - Unreal"
gallery: "vfx"
Image01: ../../images/unrealLavaLamp.png
useVideo: true
videoPathGallery: "../videos/Unreal Lava Lamp.webm"
slug: "/vfx/unreal-sdf-lava-lamp"
shortTitle: "Unreal SDF lava lamp"
date: "2022-01-26"
---

A lava lamp made in Unreal. The liquid is rendered with sphere tracing, with multiple sphere SDFs.

Each sphere's normal is calculated and rendered with Unreal's lighting. Each sphere (and its normal) is smoothly joined with one another, simulating the floating blobs inside the lamp's liquid.

For the spheretracing, I had to use a custom expression node inside Unreal's material editor. This was also my greatest challenge when creating this, as not only it was very limited in how it works, it's not really a robust solution. All of this made me wish that Unreal had an better way to either create custom nodes or even a proper HLSL shader editor, like other engines.

<iframe class="ytEmbedVideo" src="https://www.youtube.com/embed/3QU-eefK1kg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>