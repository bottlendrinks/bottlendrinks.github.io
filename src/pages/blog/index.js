/* eslint-disable */
import React from 'react';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import colors from '../../utils/colors';
import { css } from 'react-emotion';
import './blog.css';
import Blayout from '../../components/Blayout/BLayout';
import BlogCard from '../../components/BlogCard/BlogCard';
import { MDBContainer, MDBRow, } from "mdbreact";



const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Blayout>
      <MDBContainer className="mt-5 mb-5 text-center">


        <h1 className="text-center text-danger font-weight-bold">Blog</h1>

        <MDBRow>
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }, index) => {
              return (
                <BlogCard blogimg={post.frontmatter.blogimage ? post.frontmatter.blogimage : ""} key={post.id} title={post.frontmatter.title} excerpt={post.excerpt} urlslug={post.fields.slug} />

              );
            })}
        </MDBRow>



      </MDBContainer>
    </Blayout>
  );
};

export const query = graphql`
  query BlogQuery {
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
/* eslint-enable */

export default BlogIndex;
