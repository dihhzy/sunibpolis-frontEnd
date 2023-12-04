import { Col, Container, Row } from "react-bootstrap";
import { CinemaLocation } from "../Components/CinemaLocation";
import { City } from "../Components/City";
import { Movie } from "./Movie";

export function Home() {
    return (
        <Container fluid style={{
            backgroundColor: "rgb(67, 85, 133)",
            minHeight: "100vh",
            width: "100%",
            padding: '20px'
        }}>
            <Row className="p-3"  >
                <Col xs={12} md={12}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: "space-between",
                        backgroundColor: 'rgb(245, 232, 199)',
                        padding: "15px"
                    }}>
                        <h1 className="m-0 mx-auto">Movie</h1>
                        <div><City /></div>
                    </div>
                </Col>
            </Row>
            <Row className="p-3">
                <Col>
                    <div style={{
                        backgroundColor: '#ffffff',
                        padding: '20px',
                        borderRadius: '10px'
                    }}>
                        <Movie />
                    </div>
                </Col>
            </Row>
        </Container>

    )
}