import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBTooltip, MDBCarousel, MDBCarouselInner, MDBCarouselItem } from "mdbreact";

const PopularDrinks = () => {
    return (
        <section className="text-center my-5">
            <h2 className="h1-responsive font-weight-bold text-center my-5">
                Popular  on <span style={{ "color": "#e54c2a" }}>Bottle & Drinks</span>
            </h2>
            <MDBCarousel
                activeItem={1}
                length={3}
                slide={true}
                showControls={true}
                showIndicators={true}
                multiItem>
                <MDBCarouselInner>
                    <MDBRow>

                    </MDBRow>
                </MDBCarouselInner>

            </MDBCarousel>
        </section>
    );
};

export default PopularDrinks;