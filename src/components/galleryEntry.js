import React, {lazy} from 'react'
import "../styles/galleryEntry.css"
import {GatsbyImage} from "gatsby-plugin-image"

import "../styles/galleryEntry.css"
import { graphql } from 'gatsby'

function GetVideo(vidPath)
{
    // I can't use require() with variables, so this will have to do.
    // I'm sure there's a perfect explanation for why this is the case, but still, I hate Javascript.
    let oloStill = require("../videos/OLO Still.webm").default;
    let unrealCrystal = require("../videos/Unreal Crystal.webm").default;
    let unrealLavaLamp = require("../videos/Unreal Lava Lamp.webm").default;
    let unityLiquid = require("../videos/Unity Liquid.webm").default;
    let cyberpunkZoom = require("../videos/Cyberpunk Zoom Recreation.webm").default;
    let zeldaTeleport = require("../videos/ZeldaTeleportRecreation.webm").default;
    let spaceshipThruster = require("../videos/Spaceship Thrusters.webm").default;

    if(vidPath === "../videos/OLO Still.webm")
    {
        return oloStill;
    }
    else if(vidPath === "../videos/Unreal Crystal.webm")
    {
        return unrealCrystal
    }
    else if(vidPath === "../videos/Unreal Lava Lamp.webm")
    {
        return unrealLavaLamp
    }
    else if(vidPath === "../videos/Unity Liquid.webm")
    {
        return unityLiquid
    }
    else if(vidPath === "../videos/Cyberpunk Zoom Recreation.webm")
    {
        return cyberpunkZoom
    }
    else if(vidPath === "../videos/ZeldaTeleportRecreation.webm")
    {
        return zeldaTeleport
    }
    else if (vidPath === "../videos/Spaceship Thrusters.webm")
    {
        return spaceshipThruster
    }

    return  oloStill;
}

function GalleryEntry(props) {
    let divStyle = {}
    
    if(props.style)
    {
        divStyle = props.style;
    }

    let view;
    if(props.useVideo)
    {
        let path = props.vidPath;

        //Apparently this doesn't work, require with variables is not allowed. I hate javascript.
        view = <video autoPlay="autoplay" muted="muted" loop="loop">
            <source src={GetVideo(path)} type="video/webm"/> 
        </video>
    }
    else
    {
        view = <GatsbyImage image={props.src}/>;
    }

    return ( 
    <div className="GalleryEntry" style={divStyle}>
        <a href={props.url}>
            <div className="GalleryPageDyna">
                {view}
                <p className="PageTitle">{props.title}</p>
            </div>
        </a>
    </div>
    );
}

export default GalleryEntry;

export const data = graphql`query MyQuery {
    allFile{
      edges {
        node {
          id
          name
          extension
        }
      }
    }
  }`