import React, { Component } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import {graphql, useStaticQuery} from "gatsby";

import "../styles/education.css"

function EducationItem(props) {

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
    <div className="EducationItem">
      <GatsbyImage image={imageNode[0].node.gatsbyImageData}/>
        <div className='EducationText'>
            <h1>{props.title}</h1>
            <h2>{props.institution}</h2>
            <h3>{props.duration}</h3>
        </div>
    </div> );
}

//<GatsbyImage img={imageNode[0].node.gatsbyImageData}/>
export default EducationItem;