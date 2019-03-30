/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import { Link, graphql } from 'gatsby';
import SEO from '../components/Seo/Seo';
import Blayout from '../components/Blayout/BLayout';
import CarouselPage from '../components/Carousel/Carousel';
import PopularDrinks from '../components/PopularDrinks/PopularDrinks';
export default ({ data }) => {
  const myData = data.allContentJson.edges[0].node.index;
  return (
    <Blayout>
      <SEO title="Bottle & Drinks" keywords={[`Drinks`, `Wine`, `Vodka`, `Mocktails`]} />
      <CarouselPage />
      <PopularDrinks />
      <h1>Dev Version 2</h1>
      <h1>{myData.title}</h1>
      <h3>{myData.subtitle}</h3>
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
  }
`;
