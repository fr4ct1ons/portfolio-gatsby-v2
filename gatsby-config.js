/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gabriel Lucena's Portfolio`,
    siteUrl: `https://fr4ct1ons.github.io/`,
    description: `Gabriel Lucena's portfolio - Tech artist from Brazil who works mostly with shaders and visual effects.`,
    twitterUsername: `@fr4ct1ons`
    
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-mdx", "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": `${__dirname}/src/images/`
    },
    __key: "images"
  }, 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "content",
      "path": "./src/markdownPages"
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "videos",
      "path": "./src/videos"
    }
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 900,
          },
        },
      ],
    }
  }
]
};