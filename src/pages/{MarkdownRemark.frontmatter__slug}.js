import React from 'react'
import GlobalLayout from '../components/globalLayout';
import { graphql } from 'gatsby';

export default function PortfolioPage({data: {markdownRemark}}) {

    const { frontmatter, html } = markdownRemark;

    return ( 
        <GlobalLayout>
            <h1>{frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{__html: html}} />
        </GlobalLayout>
     );
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`