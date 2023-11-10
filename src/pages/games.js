import React, { Component } from 'react';
import {graphql} from "gatsby";
import {getImage} from "gatsby-plugin-image"
import { isMobile } from 'react-device-detect';

import GlobalLayout from "../components/globalLayout";
import GalleryEntry from '../components/galleryEntry';

function Games(data) {

    let edges = data.data.allMarkdownRemark.edges;

    let entries = [];

    let varStyle = {}
    
    //TODO: Move this to CSS
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
        if(element.gallery == "games")
        {
          let entry = <GalleryEntry style={varStyle} url={element.slug} title={element.shortTitle} src={getImage(element.Image01)}/>;

          //console.log(element.videoPathGallery);

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
        <GlobalLayout centerStyle={{width: "100%"}}>
            <h1>Games</h1>
            <h2>Games I have worked on</h2>

            <div>
                {entries}
            </div>
        </GlobalLayout>
        );
}
 
export default Games;

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