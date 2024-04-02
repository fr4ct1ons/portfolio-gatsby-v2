---
title: "Zelda Breath of the Wild Teleport (recreation)"
gallery: "vfx"
Image01: ../../images/UnrealIceCrystal.png
useVideo: true
videoPathGallery: "../videos/ZeldaTeleportRecreation.webm"
slug: "/vfx/zelda-botw-teleport-recreation"
shortTitle: "Zelda teleport in Unreal"
date: "2024-04-01"
---

I always liked the teleport effect that plays on The Legen of Zelda: Breath of the Wild. I've been meaning to recreate this effect for a while because of how many different techines it uses and because I wanted to try out spawning particles from skeletal meshes on Niagara and Unreal.

<iframe class="ytEmbedVideo" src="https://www.youtube.com/embed/LJazgllLY18?si=epnymo0EqGFopIC5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[This is how the original effect looks like.](https://www.youtube.com/watch?v=w6Nbiz2RvKY)

The character dissolve is made with a custom shader that uses a noise map as a alpha cutoff mask, while the trails and other particles are made with Niagara. Every particle is spawned from the skeletal mesh. I used timelines to synchronize the glow and dissolve of the character, as well as playing the particles at the correct time.