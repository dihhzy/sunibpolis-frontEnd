import { Button, Nav, Navbar as NavbarNav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import './Navbar.css';

export function Navbar() {

    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("userId"))
    const handleLogout = () => {
        localStorage.removeItem("userId")
        setIsLoggedIn(false)
        window.location.href = "/"
    }

    const [loggedIn, setLoggedIn] = useState(false);

    const checkLoggedIn = () =>{
        const checkLocal = localStorage.getItem("userId");
        if(checkLocal === null){
            setLoggedIn(false);
        }else{
            setLoggedIn(true);
        }
    }

    useEffect(() => {
        checkLoggedIn();
    }, []);

    const setFalse = () => {
        localStorage.removeItem("userId");
        window.location.reload();
    }

    //User forced to login first to access My Ticket
    //If a user hasn't logged in, user can't access his own ticket.
    const handleMyTicketClick = () => {
        if (!isLoggedIn) {
            alert("Please login first to access My Ticket");
            window.location.href = "/login";
        } else {
            window.location.href = "/myTicket";
        }
    };

    return (
        <NavbarNav expand="md" className="shadow-sm mb-3 p-3"
            style={{
                backgroundColor: "rgb(54, 48, 98)",
            }}>
            <NavbarNav.Toggle aria-controls="responsive-navbar-nav" />
            <NavbarNav.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto"
                    style={{
                        fontSize: "18px",
                        color: "rgb(54, 48, 98)"
                    }}>
                    <Nav.Link to="/" as={NavLink}
                        style={{ color: "rgb(245, 232, 199)" }}>
                        Movie
                    </Nav.Link>
                    <Nav.Link to="/myTicket" as={NavLink}
                        style={{ color: "rgb(245, 232, 199)" }}
                        onClick={handleMyTicketClick}>
                        my Ticket
                    </Nav.Link>
                    <Nav.Link to="/news" as={NavLink}
                        style={{ color: "rgb(245, 232, 199)" }}>
                        Sunibpolis News
                    </Nav.Link>
                    <span className="mx-2 d-flex align-items-center"
                        style={{
                            color: "rgb(245, 232, 199)", marginBottom: "4px", fontSize: "20px"
                        }}>
                        |
                    </span>
                    {isLoggedIn ? 
                    (
                    <div className="logout">
                        <Button className="d-flex align-items-center justify-content-center"
                            style={{
                                fontSize: "18px",
                                height: "30px",
                                width: "75px",
                                backgroundColor: "rgb(54, 48, 98)",
                                border: "1px solid white",
                                borderRadius: "10px",
                                color: "rgb(245, 232, 199)",
                                display: "flex",
                                justifyContent: "center",
                                padding: "3px 12px 5px 12px"
                            }}
                            onClick={setFalse}
                            >
                            Logout
                        </Button>
                    </div>
                    ) 
                    
                    : 
                    
                    (
                    <div className="registerAndLogin">
                        <Nav.Link to="/register" as={NavLink}
                            style={{ color: "rgb(245, 232, 199)", paddingLeft: "0px" }}>
                            Register
                        </Nav.Link>
                        <Nav.Link to="/login" as={NavLink} className="d-flex align-items-center justify-content-center">
                            <Button className="d-flex align-items-center justify-content-center"
                                style={{
                                    fontSize: "18px",
                                    height: "30px",
                                    width: "75px",
                                    backgroundColor: "rgb(54, 48, 98)",
                                    border: "1px solid white",
                                    borderRadius: "10px",
                                    color: "rgb(245, 232, 199)",
                                    display: "flex",
                                    justifyContent: "center",
                                    padding: "3px 12px 5px 12px"
                                }}>
                                Login
                            </Button>
                        </Nav.Link>
                    </div>
                    )}
                </Nav>
            </NavbarNav.Collapse>
        </NavbarNav>
    )
}