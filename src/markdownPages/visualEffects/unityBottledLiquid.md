---
title: "Bottled liquid - Unity experiment"
gallery: "vfx"
Image01: ../../images/unityBottledLiquid.png
useVideo: true
videoPathGallery: "../videos/Unity Liquid.webm"
slug: "/vfx/unity-bottled-liquid"
shortTitle: "Unity bottled liquid"
date: "2022-01-26"
---

Inspired by Half-Life: Alyx's liquid shader, I decided to try and create my own version inside Unity. It's nowhere near HL:A's effect, but I will try to improve this in the future.

Inside the surface shader, the fragment checks if it is above the plane simply by calculating the dot product of the fragment's world position and the plane's normal, also taking in account how far away it is from the plane. If it is above the plane, the fragment is discarded. This could be done by checking if the fragment's Y position is above a certain value, but I chose the plane instead because it would allow me to sway the liquid, which is something I want to use.

For making the plane always face up, I set the plane to be inside an object I named "gimbal", which would always be facing up. The plane itself has it's position's Y coordinate adjusted based on if the bottle is facing up, down or if it's sideways. A dot product is used to check the bottle's direction and interpolate between each offset.

I plan to, in the future, add an option to control how filled the bottle is and add some sway to the plane, to make the liquid more natural.

<iframe class="ytEmbedVideo" src="https://www.youtube.com/embed/lg8qGl3IGDI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>