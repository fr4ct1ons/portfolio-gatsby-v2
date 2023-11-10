---
title: "Unreal exploding ice crystal"
gallery: "vfx"
Image01: ../../images/UnrealIceCrystal.png
useVideo: true
videoPathGallery: "../videos/Unreal Crystal.webm"
slug: "/vfx/unreal-ice-crystal"
shortTitle: "Exploding Ice Crystal"
date: "2023-05-06"
---

An exploding ice crystal, made with a turn-based combat game in mind.

This effect was made using Niagara on Unreal Engine, with 3D models made by me on Blender and Substance Painter. Some of the other textures used on this effect are available freely on internet and were not made by me.

I've used Niagara for spawning and controlling every object seen on the effect, such as smokes, sparkles and the crystal itself. The crystal object uses a custom shader, that reads from a texture of cracks and a gradient map to simulate the crystal slowly cracking after some time. Both the shader and textures were made by me.

While this effect was made with turn-based combat in mind, it can still work in cases of realtime combat with minor adjustments, such as to properly show the area of effect that attack might have.

<iframe class="ytEmbedVideo" src="https://www.youtube.com/embed/qf1qbCeU8nc?si=_XAGghOVsnh7bW1Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>