module.exports = {
  siteMetadata: {
    title: `Quests`,
    siteUrl: `https://quests.io`,
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("node-sass"),
      },
    }, "gatsby-plugin-image", {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: `gatsby-source-cosmicjs`,
      options: {
        bucketSlug: `quests-production`, // Get this value in Bucket > Settings
        objectTypes: [`research-partners`], // Note it will result in GraphQL queries (allCosmicjsPosts, cosmicjsPosts)
        // If you have enabled read_key to fetch data (optional).
        apiAccess: {
          read_key: `930rQQJqzR2z9cJIv5Z3lFC6Gg3UrkDAlWQxVbDjQZgAHXwPdO`, // Get this value in Bucket > Settings
        },
        localMedia: true, // Download media locally for gatsby image (optional)
      },
    },
  ],
}