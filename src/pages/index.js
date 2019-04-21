/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import { Link, graphql } from 'gatsby';
import SEO from '../components/Seo/Seo';
import Blayout from '../components/Blayout/BLayout';
import CarouselPage from '../components/Carousel/Carousel';
import PopularDrinks from '../components/PopularDrinks/PopularDrinks';
export default ({ data }) => {
  console.log(data);
  const myData = data.allContentJson.edges[0].node.index;
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Blayout>
      <SEO title="Bottle & Drinks" keywords={[`Drinks`, `Wine`, `Vodka`, `Mocktails`]} />
      <CarouselPage />
      <PopularDrinks posts={posts} className="mb-5" />
      <div className="mt-5"></div>
      {/* <h1>Dev Version 2</h1>
      <h1>{myData.title}</h1>
      <h3>{myData.subtitle}</h3> */}
    </Blayout>
  );
};

export const pageQuery = graphql`
  query contentQuery {
    allContentJson {
      edges {
        node {
          index {
            title
            subtitle
          }
        }
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            blogimage
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
