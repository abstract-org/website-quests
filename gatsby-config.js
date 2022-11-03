module.exports = {
  siteMetadata: {
    title: `Quests`,
    siteUrl: `https://getquest.io`,
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
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-WG6XTLK",
        includeInDevelopment: true,
  
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "dataLayer" },
  
        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        //routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
        // Defaults to false
        enableWebVitalsTracking: true,
        // Defaults to https://www.googletagmanager.com
        selfHostedOrigin: "getquest.io",
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-YS0W2NNT1Z", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: "OPT_CONTAINER_ID",
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**"],
          // Defaults to https://www.googletagmanager.com
          origin: "getquest.io",
        },
      },
    },
  ],
}