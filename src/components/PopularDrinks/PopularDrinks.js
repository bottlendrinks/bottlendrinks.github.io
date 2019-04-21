import React from 'react';
import { graphql } from 'gatsby';
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBTooltip, MDBCarousel, MDBCarouselInner, MDBCarouselItem } from "mdbreact";
import BlogCard from '../BlogCard/BlogCard';

const PopularDrinks = (props) => {
    return (
        <section className="text-center my-5">
            <h2 className="h1-responsive font-weight-bold text-center my-5">
                Popular  on <span className="text-danger font-weight-bold">Bottle & Drinks</span>
            </h2>
            <MDBCarousel
                activeItem={1}
                length={props.posts.length}
                slide={true}
                showControls={true}
                showIndicators={true}
                multiItem>
                <MDBCarouselInner>
                    <MDBRow>
                        {props.posts.filter(post => post.node.frontmatter.title.length > 0)
                            .map(({ node: post }, index) => {
                                return (

                                    <BlogCard blogimg={post.frontmatter.blogimage ? post.frontmatter.blogimage : ""} key={post.id} title={post.frontmatter.title} excerpt={post.excerpt} urlslug={post.fields.slug} />

                                );
                            })}
                    </MDBRow>
                </MDBCarouselInner>

            </MDBCarousel>
        </section>
    );
};




export default PopularDrinks;