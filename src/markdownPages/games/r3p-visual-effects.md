---
title: "Rise of the Third Power - Visual Effects"
gallery: "games"
Image01: ../../images/Rise3Power.png
slug: "/games/rise-third-power"
shortTitle: "Rise of the Third Power"
date: "2021-04-01"
---

## Showcase of visual effects I made for Stegosoft Games' next title, Rise of the Third Power

Rise of the Third Power is a 2D JRPG made by [Stegosoft Games](https://www.stegosoftgames.com/). It is available on multiple platforms and storefronts, such as Steam, PS4 and Switch. I helped with the creation of some visual effects for enemy attacks, like magic attacks and environmental effects, such as rain and birds flying through the screen. Below is a sample of some those effects.

First is one that I really like, which is the spawn effect for an enemy boss. The enemy materializing was made with a shader that uses the time variable to check if a fragment is up enough to be rendered completely, render only the color of the materialization or even render nothing at all. A pre-made noise texture was used to make the materializing energy not a straight line. The rest of the elements were made with Unity's particle system.
<iframe class="ytEmbedVideo" src="https://www.youtube.com/embed/gtUev6-wlSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Next up is a poisonous attack for a generic enemy. Multiple particle systems were used for this effect. There were some poison drops that, once collided with the ground, would leave a burn mark on the ground and a bit of smoke. 

<iframe class="ytEmbedVideo" src="https://www.youtube.com/embed/i9q5a5fQfKY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Last but definitely not least is a rain effect I made for the overworld. It was also made with particle systems, like the previous VFXes. **This one has a catch, though** - I was "told" to make the rain transition smoothly from a simple light rain to a more detailed heavy rain. I wrote a set of scripts that would change particle systems on runtime when a blend value is modified, similar to a slider on a shader. Below is a video of this system in action.

<iframe class="ytEmbedVideo" src="https://www.youtube.com/embed/6GwtU4DKyBE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

