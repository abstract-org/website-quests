import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Quests`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-source-cosmicjs`,
      options: {
        bucketSlug: `quests-production`, // Get this value in Bucket > Settings
        objectTypes: [`landing-page`], // Note it will result in GraphQL queries (allCosmicjsPosts, cosmicjsPosts)
        // If you have enabled read_key to fetch data (optional).
        apiAccess: {
          read_key: `930rQQJqzR2z9cJIv5Z3lFC6Gg3UrkDAlWQxVbDjQZgAHXwPdO`, // Get this value in Bucket > Settings
        },
        localMedia: true, // Download media locally for gatsby image (optional)
      },
    },
  ],
}

export default config
