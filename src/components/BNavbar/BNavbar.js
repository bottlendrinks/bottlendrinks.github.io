import React, { Component } from "react";
import { MDBContainer, MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { Link } from 'gatsby';
import CustomNavLink from '../CustomLink/CustomLink';
import logo from "../../assets/images/bottlendrinks.png";

class bnavbar extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <MDBNavbar color="white" light expand="md">
                <MDBContainer>
                    {/* <Logo /> */}

                    <Link to="/" className="navbar-brand">
                        <strong className="ml-3 white-text"> <img src={logo} alt="bottleanddrinks" height="72px" /></strong></Link>
                    <MDBNavbarToggler name="navbar-toggler" onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav right>
                            <CustomNavLink to="/">Home</CustomNavLink>
                            <CustomNavLink to="/about">About</CustomNavLink>
                            <CustomNavLink to="/blog">Blog</CustomNavLink>
                            {/* <CustomNavLink to="/blog">Projects</CustomNavLink> */}
                            {/* <MDBNavItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle nav caret>
                                        <div className="d-none d-md-inline">About</div>
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu right>
                                        <MDBDropdownItem href="#!">Contact</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Articles</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Testimonials</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavItem> */}

                            <div className="d-flex align-items-center">
                                <CustomNavLink to="#!">
                                    <MDBIcon fab icon="facebook" className="ml-1" />
                                </CustomNavLink>
                                <CustomNavLink to="#!">
                                    <MDBIcon fab icon="twitter" className="ml-1" />
                                </CustomNavLink>
                                <CustomNavLink to="#!">
                                    <MDBIcon fab icon="linkedin" className="ml-1" />
                                </CustomNavLink>
                            </div>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        );
    }
}

export default bnavbar;