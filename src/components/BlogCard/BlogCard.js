import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import './BlogCard.css';
const BlogCard = (props) => {
    return (

        <MDBCol lg="4" md="6" className="mb-lg-0 mb-4 mt-5">
            <MDBCard >
                <MDBCardImage className="img-fluid bcard-img" src={props.blogimg} waves />
                <MDBCardBody>
                    <h3 className="text-center">{props.title}</h3>
                    <MDBCardText className="text-justify">
                        {props.excerpt}
                    </MDBCardText>
                    <MDBBtn href={props.urlslug} outline color="danger">More</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
}

export default BlogCard;