import { GatsbyImage } from 'gatsby-plugin-image';
import React, { Component } from 'react';
import {graphql, useStaticQuery} from "gatsby";

import "../styles/experience.css"

function ExperienceItem(props) {

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
    
    const imageNode = data.allImageSharp.edges.filter(edge => edge.node.fixed.originalName == props.img);
    

    return ( 
    <div className="ExperienceItem">
        <GatsbyImage image={imageNode[0].node.gatsbyImageData}/>
        <div className="ExperienceText">
            <h1>{props.title}</h1>
            <h2>{props.project}</h2>
            <h3>{props.workplace} | {props.period}</h3>
            <p>{props.desc}</p>
        </div>
    </div>
    );
}

export default ExperienceItem;