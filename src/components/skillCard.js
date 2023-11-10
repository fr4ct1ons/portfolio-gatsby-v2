import React, { Component } from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {graphql, useStaticQuery} from "gatsby";

import "../styles/skillCard.css"

export default function SkillCard(props)
    {
        //const image = getImage(this.props.img);

        const data = useStaticQuery(graphql`
        query {
            allImageSharp {
              edges {
                node {
                  id
                  gatsbyImageData
                  fixed {
                    originalName
                  }
                }
              }
            }
          }
          
        `);
        
        let imageNode;

        imageNode = data.allImageSharp.edges.filter(edge => edge.node.fixed.originalName == props.img);
        //console.log(imageNode[0].node.gatsbyImageData);
        //const image = imageNode.node.gatsbyImageData;

        //console.log(image);
        var style = {};
        if(props.size)
        {
          style.width = props.size
        }

        return (<div className="SkillCard" style={style}>
            <GatsbyImage image={imageNode[0].node.gatsbyImageData}/>
            <div className="imageOverlay">
              <p>{props.name}</p>
            </div>
        </div>)
    }

    