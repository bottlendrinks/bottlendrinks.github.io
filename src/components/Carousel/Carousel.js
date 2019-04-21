import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from
    "mdbreact";
import { StaticQuery, graphql } from 'gatsby';

const CarouselPage = (props) => {
    const imgData = props.data.allS3Object.edges.map(imgnode => imgnode.node.Key);
    console.log(imgData);
    return (
        <MDBCarousel activeItem={1} length={imgData.length - 1} className="z-depth-1 w-100">
            <MDBCarouselInner>
                {imgData.map((imgKey, index) => (
                    <MDBCarouselItem key={index} itemId={index}>
                        <MDBView>
                            <img className="d-block w-100" src={"https://bottlendrinks.s3.amazonaws.com/" + imgKey} alt="Bottle & Drinks " />
                            <MDBMask overlay="black-slight" />
                        </MDBView>
                    </MDBCarouselItem>
                ))
                }


            </MDBCarouselInner>
        </MDBCarousel>
    );
}



const bannerQuery = graphql`
  query {
    allS3Object(filter:{Url:{regex:"/banner/"}}){
    totalCount
    edges {
      node{
        Key
        Url
      }}}
  }
`;

//export default CarouselPage;
export default props => (<StaticQuery
    query={bannerQuery}
    render={data => (<CarouselPage data={data} {...props} />)}
/>);

