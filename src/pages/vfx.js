import React, { Component } from 'react';
import {graphql} from "gatsby";
import {getImage} from "gatsby-plugin-image"
import GalleryEntry from '../components/galleryEntry';
import { isMobile } from 'react-device-detect';

import GlobalLayout from "../components/globalLayout";

function VFX(data) { 

    let edges = data.data.allMarkdownRemark.edges;

    let entries = [];

    let varStyle = 
    {
        width: "50%",
        margin: "0%"
    }
    if(isMobile)
    {
        varStyle = 
        {
          width: "100%",
          margin: "0%",
          marginBottom: "3%",
        }
    }

    for (let I = 0; I < edges.length; I++) {
        const element = edges[I].node.frontmatter;

        if(element.gallery == "vfx")
        {
            let entry = <GalleryEntry style={varStyle} url={element.slug} title={element.shortTitle} src={getImage(element.Image01)}/>

            if(element.useVideo)
            {
              entry = <GalleryEntry style={varStyle} url={element.slug} title={element.shortTitle} vidPath={element.videoPathGallery} useVideo={element.useVideo}/>
            }
  
            entries.push
            (
                entry
            )
        }
    }


    return (
    <GlobalLayout centerStyle={{width: "100%"}} >
        <h1>Visual Effects</h1>
        <h2>One-off visual effects I made</h2>
        
        <div style={{width: "100%"}}>
            {entries}
        </div>
    </GlobalLayout>
    );
}
 
export default VFX;


export const getGames = graphql `query MyQuery {
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
      edges {
        node {
          id
          frontmatter {
            slug
            shortTitle
            Image01 {
              id
              childImageSharp {
                gatsbyImageData
              }
            }
            gallery
            useVideo
            videoPathGallery
          }
        }
      }
    }
  }
`