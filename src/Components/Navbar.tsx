import { Container, Button, Nav, Navbar as NavbarNav } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import './Navbar.css'

export function Navbar() {
    return (
        <NavbarNav sticky="top" expand="md" className="shadow-sm mb-3 p-3"
            style={{
                backgroundColor: "rgb(54, 48, 98)",
            }}>
            <Container>
                <NavbarNav.Toggle aria-controls="responsive-navbar-nav" />
                <NavbarNav.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto"
                        style={{
                            fontSize: "18px",
                            color: "rgb(54, 48, 98)"
                        }}>
                        <Nav.Link to="/" as={NavLink}
                            style={{ color: "rgb(245, 232, 199)" }}>
                            Home
                        </Nav.Link>
                        <Nav.Link to="/myTicket" as={NavLink}
                            style={{ color: "rgb(245, 232, 199)" }}>
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
                                    padding: "2px 12px 5px 12px"
                                }}>
                                Login
                            </Button>
                        </Nav.Link>
                    </Nav>
                </NavbarNav.Collapse>
            </Container>
        </NavbarNav >
    )
}