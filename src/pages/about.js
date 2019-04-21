/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Blayout from '../components/Blayout/BLayout';
import { MDBContainer } from "mdbreact";
import '../utils/global.css';

const About = ({ data }) => {
  const imageData = data.file.childImageSharp;
  return (
    <Blayout>
      <MDBContainer className="mt-5 text-center">
        <div >
          <h1 className="bottle-drinks">Bottle & Drinks</h1>
          <div>
            <Img alt="Bottle & Drinks logo" fluid={imageData.fluid} />
          </div>
        </div>
        <p className="about" >
          Bottle & Drinks is blog which is created for fun to learn ReactJs and GatsbyJs. While Team works on it
          learns about JS libraries, it provides the information about Alcoholic and non Alcoholic drinks.

        </p>

        <h3 className="H3">DISCLAIMER</h3>
        <p className="about">
          we raise a big DISCLAIMER,  We dont own copyright any content or images. all the information available here is sourced from different web pages.
         any resemblence which you dont want us to use. has to be notified to <a href="mailto:bottlendrinks@gmail.com"><strong>bottlendrinks@gmail.com</strong></a>.
              We will take appropriate action within 24 hours.
        </p>
      </MDBContainer>

    </Blayout>
  );
};

export const query = graphql`
  query {
        file(relativePath: {eq: "bottlendrinks.png" }) {
        childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
      }
    }
  }
`;

export default About;
