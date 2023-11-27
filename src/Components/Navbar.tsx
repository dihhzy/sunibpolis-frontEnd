import { Container, Button, Nav, Navbar as NavbarNav } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export function Navbar() {
    return (
        <NavbarNav sticky="top" className="bg-white shadow-sm mb-3 p-2">
            <Container>
                <Nav className="me-auto" style={{ fontSize: "18px" }}>
                    <Nav.Link to="/" as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/movies" as={NavLink}>
                        Movies
                    </Nav.Link>
                    <Nav.Link to="/myTicket" as={NavLink}>
                        my Ticket
                    </Nav.Link>
                    <Nav.Link to="/news" as={NavLink}>
                        Sunibpolis News
                    </Nav.Link>
                </Nav>
            </Container>
        </NavbarNav>
    )
}