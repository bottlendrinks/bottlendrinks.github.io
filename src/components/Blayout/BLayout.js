import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../BFooter/BFooter';
import Navbar from '../BNavbar/BNavbar';
const Blayout = (props) => {
    return (
        <>
            <Navbar />
            {props.children}
            <Footer />

        </>
    );
};

Blayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Blayout;