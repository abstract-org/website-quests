import React from "react";
import { Link, graphql } from "gatsby";
const BlogIndex = ({ data }: any) => {
  const posts = data.allCosmicjsLandingPage.edges; // getting all posts from query
  // Rendering list of posts with link to their url
  return (
    <div>
      {posts.map(({ node }: any) => {
        return (
          <div key={node.slug}>
            <h1>{node.metadata.headline}</h1>
          </div>
        );
      })}
    </div>
  );
};
export default BlogIndex;
// Query all posts from GraphQL
export const pageQuery = graphql`
  query {
    allCosmicjsLandingPage(sort: { fields: [created], order: DESC }, limit: 1000) {
      edges {
        node {
          slug
          title
          metadata {
            headline
          }
        }
      }
    }
  }
`;