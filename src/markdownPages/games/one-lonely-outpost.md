---
title: "One Lonely Outpost"
gallery: "games"
Image01: ../../images/OLO.jpg
useVideo: true
videoPathGallery: "../videos/OLO Still.webm"
slug: "/games/one-lonely-outpost"
shortTitle: "One Lonely Outpost"
date: "2023-10-13"
---

## A cozy farming game, set in space

One Lonely Outpost is a farming simulator set in space, in which you are the pioneer on a sterile alien planet. You must turn the planet on a viable colony, managing resources, growing a colony and uncovering this new alien world. The game is [out now on Steam](https://store.steampowered.com/app/1465550/One_Lonely_Outpost/) and there are plans for release on consoles such as Switch, PlayStation and Xbox.

I worked on OLO (short for One Lonely Outpost), as a shader programmer and VFX artist from May of 2022 to October 2023. Aside from shaders & visual effects, I also created systems for vegetation growth, character customization, set up post processing stacks and lighting. Below I write about some of my work on the project.

First off is the customization system for the player character, in which the player can change the colors of the eyes, hair, skin and jumpsuit.
<iframe class="ytEmbedVideo" src="https://www.youtube.com/embed/OXPmw_KL5bo?si=MSUP1aOwyGXC-H04" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

I also created the custom cel shader used for the stylized in-game, which supports light smoothing, reflections and specular highlights. A similar shader is used on the character sprites.
<iframe class="ytEmbedVideo" src="https://www.youtube.com/embed/OsxKQZXPNXQ?si=IB86-tnbaPru1TKi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

One other system that I made and that is considered one of the major features of the game is the terraforming and vegetation. Because the overworld of the game maps uses 3D models instead of something like Unity terrain, the vegetation is created separately on Blender, using its particle system.
<iframe class="ytEmbedVideo" src="https://www.youtube.com/embed/dEW2W1ZhPHA?si=Ra1vAYBqP4fNld7-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

There is also the day and night cycle, which allows for customization of the overworld lighting based on the time of day.
<iframe class="ytEmbedVideo" src="https://www.youtube.com/embed/T0imec9BRq4?si=lkdsGIP1ZfIThMEF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

And while I worked on multiple visual effects, including (but definitely not limited to) the player omnitool, sand dusting, weather effects and environment effects, some of which I'm most proud of are the ones used on the player landing sequence of the intro, the teleporting visual effects and the mining minigame visual effects, all of which use shaders and particle systems. Below you can watch some videos of them in action. 
<iframe class="ytEmbedVideo" src="https://www.youtube.com/embed/u5jxAA6qk0w?si=7OmfL6_YNdJuQWvQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe class="ytEmbedVideo" src="https://www.youtube.com/embed/Xp6dWJ_teyM?si=_8X6SCPnwu7Tf1RL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

And last but not least is the water shader. The foam is loaded from a texture, which allow for the usage of any specific patterns, if needed. 
<iframe class="ytEmbedVideo" src="https://www.youtube.com/embed/8b2UMNED9DQ?si=k7pKM8uhTGc1eoct" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>