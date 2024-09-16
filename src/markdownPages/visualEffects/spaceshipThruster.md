---
title: "Spaceship Thruster in Unity"
gallery: "vfx"
Image01: ../../images/UnrealIceCrystal.png
useVideo: true
videoPathGallery: "../videos/Spaceship Thrusters.webm"
slug: "/vfx/spaceship-thruster"
shortTitle: "Spaceship Thruster"
date: "2024-09-12"
---

I was at Campus Party Nordeste 2024 last week, and overheard a talk about solid fuel rockets. I left with some ideas for visual effects for spaceship thrusters and decided to work on that. The end result can be found below!

<iframe class="ytEmbedVideo" src="https://www.youtube.com/embed/KzG1SGSIZVo?si=sJA3vOFESXxcgs_Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Originally I only made the purple variation, but I was showing the effect to a friend and he said that it looked like a dirty burn. He explained to me that on really good engines, the flames are barely visible and resemble the flames on certain cooktops, in which the flames don't flicker much. This was new to me (maybe if I attended the talk mentioned before, I would've learned about it?) and then I decided to create the "clean" blue variation.

Back to the effect. The dirty burn was made using particle systems, while the clean burn was made using shaders. I did use a single particle system at the tail of the clean burn though, because I wanted something to add more movement to an otherwise static effect. For post processing I used bloom, a vignette and ACES. I did not use Visual Effect Graph because I feel particle systems are easier to setup, though VFX Graph would be better, specially for controlling variables like color and intensity.

If you're interested, the effect files can be found on my [GitHub](https://github.com/fr4ct1ons/unity-vfx-sandbox/tree/main/SandboxURP/Assets/Thrusters).