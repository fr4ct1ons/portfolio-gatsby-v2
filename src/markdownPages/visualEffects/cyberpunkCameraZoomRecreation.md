---
title: "Cyberpunk 2077 camera zoom (recreation)"
gallery: "vfx"
Image01: ../../images/UnrealIceCrystal.png
useVideo: true
videoPathGallery: "../videos/Cyberpunk Zoom Recreation.webm"
slug: "/vfx/cyberpunk-camera-zoom-recreation"
shortTitle: "Cyberpunk zoom in Unreal"
date: "2024-01-13"
---

I was playing a lot of Cyberpunk 2077 recently, and I felt like replicating something from the game. The pixelation effect that plays when you zoom the camera in and out seemed like a nice option, so I decided to reproduce that in Unreal.

<iframe class="ytEmbedVideo" src="https://www.youtube.com/embed/qfQGzpYpUKo?si=4zY6doht2dikp9Tf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[This is how the original effect looks like.](https://www.youtube.com/watch?v=x-hgrdZ8YjE)

The screen coordinates are pixelated using the usual multiply-floor-divide method. Then, the distance of the UVs to the center of the screen is used as a mask to switch between the pixelated view and the full-res view. While studying the original effect, I noticed that the resolution gets higher progressively, so I used the same distance mask to interpolate between lower and higher resolution pixelations.

One part of the effect that I did face trouble making was the blue outline. In Cyberpunk, there's a blue outline that appears on the edges of objects. From what I've seen, the original uses a depth-based algorithm. Unfortunately, none of the edge detection algorithms I tried could properly replicate the original effect. I plan to return to this effect later and update it with proper edge detection.


