import * as React from "react"

import GlobalLayout from "../components/globalLayout"
import { StaticImage } from "gatsby-plugin-image"
import SkillCard from "../components/skillCard.js"
import EducationItem from "../components/educationItem"
import ExperienceItem from "../components/experienceItem"
import { isMobile } from "react-device-detect"


function IndexPage(){

  let socialsIcon = {
    marginLeft: "16px",
    marginright: "16px",
    height : "80px",
     width : "80px"
  }
  
  let skillsList = 
  {
    borderBottom: "2px solid rgb(255, 80, 50)",
  
    display: "inline-block",
  
    //to use with grid
    gridTemplateColumns: "auto auto auto  auto auto auto",
    gridGap: "20px",
    alignItems: "center",
    justifyItems: "center",
    textAlign: "center",
    
    width: "80%",
    overflowWrap: "break-word",
  
    marginBottom: "20px",
    paddingBottom: "20px",
  }

  if(isMobile)
  {
    socialsIcon.height = "50px"
    socialsIcon.width  = "50px"
    socialsIcon.marginLeft = "12px";
    socialsIcon.marginright = "12px";

    skillsList.width = "100%";
    skillsList.gridGap = "7px";
    skillsList.gridTemplateColumns = "auto auto auto auto";
  }

  return (
    <GlobalLayout>
        <h1>
          Welcome!
        </h1>
        <p>
          Hi there! My name is Gabriel Lucena and I'm a game developer from Brazil. Welcome to my portfolio!
        </p>
        <p>
          I'm a tech artist with experience working on shaders, lighting and visual effects, though I enjoy both art and programming.
        </p>
        <p>
          I have a bachelor's degree in Information Technology and experience on Unity and Unreal, as well as their respective languages. I use mostly Blender and the Substance Suite for 3D models and Clip Studio Paint and Krita for 2D art.
        </p>
        <p>
          My most recent work experience was One Lonely Outpost, during which I worked mainly as a shader programmer and VFX artist. <a href="https://store.steampowered.com/app/1465550/One_Lonely_Outpost/">Out now on Steam!</a>
        </p>
        <p>Below is my most recent demo reel.</p>

        <iframe class="ytEmbedVideo" src="https://www.youtube.com/embed/Xt-Z47CztaM?si=7-OrD120R5bcFDKY" 
        title="YouTube video player" 
        frameborder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         allowfullscreen>

         </iframe>

        <p>You can also follow me on social media below. I'd greatly appreciate it!</p>
        <div styl>
          {/* For whatever reason, the images never load. I've resorted to imgur for the time being.*/}
        <a href="https://twitter.com/fr4ct1ons"><StaticImage loading="eager" style={socialsIcon} src="https://i.imgur.com/yAIiLDc.png"/></a>
        <a href="https://github.com/fr4ct1ons"><StaticImage loading="eager" style={socialsIcon} src="https://i.imgur.com/RwJpRNo.png"/></a>
        <a href="https://sketchfab.com/fr4ct1ons"><StaticImage loading="eager" style={socialsIcon} src="https://i.imgur.com/MLdzwYP.png"/></a>
        <a href="https://fr4ct1ons.itch.io/"><StaticImage loading="eager" style={socialsIcon} src="https://i.imgur.com/H9tHGKz.png"/></a>
        <a href="https://artstation.com/fr4ct1ons"><StaticImage loading="eager" style={socialsIcon} src="https://i.imgur.com/Ov61efY.png"/></a>
        </div>
        <h3>Tools & Skills</h3>
        <div style={skillsList}>
          <SkillCard name="Unity" img="Unity.png"/>
          <SkillCard name="Unreal" img="Unreal.png"/>
          <SkillCard name="Shaders" img="ShaderAlt.png"/>
          <SkillCard name="Blender" img="Blender.png"/>
          <SkillCard name="C++" img="cpp.png"/>
          <SkillCard name="C#" img="cs.png"/>
          <SkillCard name="Substance 3D" img="Substance.jpg"/>
          <SkillCard name="Clip Studio Paint" img="ClipStudioPaint.png"/>
          <SkillCard name="Flutter & Dart" img="Flutter.png"/>
        </div>

          <ul>
            <li>Visual Effects</li>
                <li>Tool Development</li>
            <li>3D modelling</li>
                <li>Unity Multiplayer w/ Mirror</li>
            <li>Lighting</li>
                <li>Procedural mesh generation</li>
            <li>Texturing & UV Mapping</li>
                <li>UI Programming</li>
            <li>Basic 3D animation & rigging</li>
                <li>Design patterns & SOLID</li>
          </ul>

        <h3>Education</h3>
        <EducationItem title="Masters' in Information Technology" institution="Universidade Federal do Rio Grande do Norte" duration="2024-Ongoing" img="UFRN.png"></EducationItem>
        <EducationItem title="Bachelor's in Information Technology" institution="Universidade Federal do Rio Grande do Norte" duration="2018-2022" img="UFRN.png"></EducationItem>

        <h3>Experience</h3>
        {/*Need to fix this component, as Vagabond's logo isn't square and broke the whole page.*/}
        <ExperienceItem title="Tech Artist" workplace="Vagabond Games" period="2023-2024" project="Undisclosed Project" img="Vagabond.png"
            desc="Worked as a tech artist for an undisclosed project, creating shaders, visual effects and helping with the render pipeline in general.">  
        </ExperienceItem>
        <ExperienceItem title="Tech Artist" workplace="Freedom Games" period="2022-2023" project="One Lonely Outpost" img="FreedomGames.png"
            desc="Worked as a tech artist for One Lonely Outpost, creating shaders and visual effects, as well as other functions related to setting up lighting, post processing, animations and character customization.">  
          </ExperienceItem>
          <ExperienceItem title="VFX Artist" workplace="Stegosoft Games" period="2021" project="Rise of the Third Power" img="Stegosoft.png"
            desc="Production of battle visual effects for attacks and buffs, as well as scenery props and environmental effects such as rain, falling leafs and birds, for Rise of the Third Power.">  
          </ExperienceItem>
    </GlobalLayout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
