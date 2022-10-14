import {Link, NavLink} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../contexts/auth.context";
import { Container, Navbar, Nav, Button, NavbarBrand} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

function Header() {
    const { user, logout } = useContext(AuthContext);
    // console.log(user.username);
    return (
        <div className="header">
            <Container fluid="md">
                <Navbar collapseOnSelect expand="lg">
                    <NavbarBrand to="/" className="nav-icon-image">
                        {/* <img src="https://i.imgur.com/MvCZOX5.png" alt="logo"/> */}
                    </NavbarBrand>
                    
                    <h2 className="nac-headline">IronCourses</h2>
                    <NavbarToggle aria-controls="responsive-navbar-nav"></NavbarToggle>
                
                {user ? (
                    <NavbarCollapse className="nav-options">
                        <Nav className="ml-auto">
                            {user.educator ? <NavLink to="/created-courses" className="nav-links">
                                Created courses
                            </NavLink>:<div></div>}
                            {user.educator ? <NavLink to="/create-course" className="nav-links">
                                Create new course
                            </NavLink>:<NavLink to="/" className="nav-links">
                                My Courses
                            </NavLink>}
                            <NavLink to="/" className="nav-links">
                                Home
                            </NavLink>
                            <NavLink to="/delete-user" className="nav-links">
                                Delete Account
                            </NavLink>
                            <Button onClick={logout} className="login-btn btn-dark">
                                Logout
                            </Button>
                        </Nav>
                    </NavbarCollapse>
                ) : (
                    <NavbarCollapse className="nav-options">
                        <Nav className="ml-auto">
                            <NavLink to="/" className="nav-links">
                                Home
                            </NavLink>
                            <NavLink to="/signup" className="nav-links">
                                Sign Up
                            </NavLink>
                        </Nav>
                        <NavLink to="/login" className="nav-links">
                            Log In
                        </NavLink>
                    </NavbarCollapse>
                )}
                </Navbar>
            </Container>
        </div>
    );
}

export default Header;