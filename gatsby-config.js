module.exports = {
  siteMetadata: {
    title: 'Bottle & Drinks',
    description: 'About Bottle and Drinks',
    author: 'iambottle'
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': 'AuthorsYaml'
  },
  plugins: [
    // Adding various source folders to the GraphQL layer.
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-137359756-1`,
        head: false,
      }
    },
    {
      resolve: 'gatsby-source-s3',
      options: {
        aws: {
          accessKeyId: 'AKIA3YMAK6HSSUX4GXMS',
          secretAccessKey: "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",
        },
        buckets: ['bottlendrinks'],
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-json',
    'gatsby-transformer-yaml',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-emotion'
  ]
};
