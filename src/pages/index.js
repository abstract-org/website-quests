import * as React from "react"
import { graphql } from "gatsby";
import {Footer} from "../components/footer";
import {Header} from "../components/header";
import {Screen_1} from "../screens/screen_1";
import {Screen_2} from "../screens/screen_2";
import {Screen_3} from "../screens/screen_3";
import {Screen_4} from "../screens/screen_4";

const IndexPage = ({ data }) => {
    const pageContent = data.allCosmicjsResearchPartners.edges[0].node;
    return (
        <main>
            <Header content={pageContent} />
            <Screen_1  content={pageContent} />
            <Screen_2  content={pageContent} />
            <Screen_3  content={pageContent} />
            <Screen_4  content={pageContent} />
            <Footer  content={pageContent} />
        </main>
    )
}

export default IndexPage

export const Head = () => <title>Quest</title>

// Query all posts from GraphQL
export const pageQuery = graphql`
  query {
    allCosmicjsResearchPartners(sort: { fields: [created], order: DESC }, limit: 1) {
      edges {
        node {
          slug
          title
          metadata {
            block_4__cta_text
            block_4__description
            block_4__sub_header
            block_4__header
            block_3__bullet_5
            block_3__bullet_4
            block_3__bullet_3
            block_3__bullet_2
            block_3__bullet_1
            block_3__header
            block_2__bullet_4_description
            block_2__bullet_4_header
            block_2__bullet_3_description
            block_2__bullet_3_header
            block_2__bullet_2_description
            block_2__bullet_2_header
            block_2__bullet_1_description
            block_2__bullet_1_header
            block_2__point_3_header
            block_2__point_3_description
            block_2__point_2_description
            block_2__point_2_header
            block_2__point_1_description
            block_2__point_1_header
            block_2__scroller_fragment_1
            block_1__subdescription
            block_1__subdescription_2
            block_1__description
            block_1__scroller_fragment_2
            block_1__scroller_fragment_1
            block_1__heading
            headline
          }
        }
      }
    }
  }
`;