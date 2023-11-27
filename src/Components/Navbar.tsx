import { Container, Button, Nav, Navbar as NavbarNav } from "react-bootstrap"
import { NavLink } from "react-router-dom"

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
                            style={{ color: "rgb(245, 232, 199)" }}>
                            |
                        </span>
                        <Nav.Link to="/register" as={NavLink}
                            style={{ color: "rgb(245, 232, 199)" }}>
                            Register
                        </Nav.Link>
                        <Nav.Link to="/login" as={NavLink}
                            style={{ color: "rgb(245, 232, 199)" }}>
                            <Button className="d-flex align-items-center"
                                style={{
                                    fontSize: "16px",
                                    height: "30px",
                                    backgroundColor: "rgb(129, 143, 180)",
                                    border: "none",
                                    borderRadius: "10px",
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