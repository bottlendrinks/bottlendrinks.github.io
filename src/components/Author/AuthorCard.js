import React from "react";
import { MDBContainer, MDBCardHeader, MDBIcon, MDBMedia } from "mdbreact";

const AuthorCard = (props) => {
    return (
        <MDBContainer>
            <MDBCardHeader className="border-0  font-weight-bold d-flex justify-content-between">
                <p className="mr-4 mb-0">About the author</p>
                <ul className="list-unstyled text-default list-inline mb-0">
                    <li className="list-inline-item mr-3"><MDBIcon className="mr-2" icon="envelope" />Send message</li>
                    <li className="list-inline-item mr-3"><MDBIcon className="mr-2" icon="user" />See profile</li>
                    <li className="list-inline-item mr-3"><MDBIcon className="mr-2" icon="rss" />Follow</li>
                </ul>
            </MDBCardHeader>
            <MDBMedia className="p-4 bg-white">
                <MDBMedia >
                    <img className="card-img-100 rounded-circle d-flex z-depth-1 mr-3" src={props.authorimage} alt="" />
                </MDBMedia>
                <MDBMedia body>
                    <h5 className="font-weight-bold text-danger mt-0">
                        {props.name}
                    </h5>
                    <ul className="list-unstyled list-inline mb-2 pt-1">
                        <li className="list-inline-item">
                            <MDBIcon fab className="grey-text" size="lg" icon="facebook" />
                        </li>
                        <li className="list-inline-item">
                            <MDBIcon fab className="grey-text" size="lg" icon="twitter" />
                        </li>
                        <li className="list-inline-item">
                            <MDBIcon fab className="grey-text" size="lg" icon="google-plus" />
                        </li>
                        <li className="list-inline-item">
                            <MDBIcon fab className="grey-text" size="lg" icon="linkedin" />
                        </li>
                        <li className="list-inline-item">
                            <MDBIcon fab className="grey-text" size="lg" icon="instagram" />
                        </li>
                    </ul>
                    {props.bio}
                </MDBMedia>
            </MDBMedia>
        </MDBContainer>
    );
}

export default AuthorCard;