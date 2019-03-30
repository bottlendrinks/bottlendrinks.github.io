import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from
    "mdbreact";
import image1 from "../../assets/images/banner/1.webp"
import image2 from "../../assets/images/banner/2.webp"
import image3 from "../../assets/images/banner/3.webp"
import image4 from "../../assets/images/banner/4.webp"

const CarouselPage = () => {
    return (
        <MDBCarousel activeItem={1} length={4} className="z-depth-1 w-100">
            <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                    <MDBView>
                        <img className="d-block w-100" src={image1} alt="First slide" />
                        <MDBMask overlay="black-slight" />
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                    <MDBView>
                        <img className="d-block w-100" src={image2} alt="Second slide" />
                        <MDBMask overlay="black-slight" />
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                    <MDBView>
                        <img className="d-block w-100" src={image3} alt="Mattonit's item" />
                        <MDBMask overlay="black-slight" />
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="4">
                    <MDBView>
                        <img className="d-block w-100" src={image4} alt="Mattonit's item" />
                        <MDBMask overlay="black-slight" />
                    </MDBView>
                </MDBCarouselItem>
            </MDBCarouselInner>
        </MDBCarousel>
    );
}

export default CarouselPage;