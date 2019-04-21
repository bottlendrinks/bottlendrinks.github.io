/* eslint-disable no-undef, react/prop-types, react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import Blayout from '../components/Blayout/BLayout';
import { MDBContainer, MDBView, MDBMask } from 'mdbreact';
import AuthorCard from '../components/Author/AuthorCard';
import './blogPost.css';

const Template = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Blayout>
      <MDBContainer className="mt-5 blog-post">
        <MDBView hover cascade waves>
          <img
            src={post.frontmatter.blogimage}
            alt={post.frontmatter.title}
            className="img-fluid blog-post-img"
          />
          <MDBMask overlay="white-slight" className="waves-light" />
        </MDBView>
        <h1 className="text-center text-danger font-weight-bold">{post.frontmatter.title}</h1>

        <div dangerouslySetInnerHTML={{ __html: post.html }} className="mb-5" />

        <AuthorCard
          id={post.frontmatter.author.id}
          bio={post.frontmatter.author.bio}
          authorimage={post.frontmatter.author.authorimage}
          name={post.frontmatter.author.name} />
      </MDBContainer>
    </Blayout>
  );
};

export const query = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        blogimage
        author {
          id
          bio
          name
          authorimage
        }
      }
    }
  }
`;

export default Template;
