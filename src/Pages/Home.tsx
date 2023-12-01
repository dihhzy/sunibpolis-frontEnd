import { Container } from "react-bootstrap";
import { CinemaLocation } from "../Components/CinemaLocation";
import { City } from "../Components/City";
import { Movie } from "../Components/Movie";

export function Home() {
    return (
        <Container>
            <div style={{
                backgroundColor: 'rgb(67, 85, 133)',
                minHeight: '100vh',
                width: "100%",
                padding: '20px'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'rgb(245, 232, 199)',
                    padding: '10px'
                }}>
                    <h1 style={{ margin: '0 auto', color: 'black', paddingLeft: "180px" }}>Movie</h1>
                    <City />
                </div>
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '20px',
                    borderRadius: '10px',
                    marginTop: '20px'
                }}>
                    <Movie />
                </div>
            </div>
        </Container>
    )
}