import { CinemaLocation } from "../Components/CinemaLocation";
import { City } from "../Components/City";
import { Movie } from "../Components/Movie";

export function Home() {
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h1 style={{ margin: '0 auto' }}>Movie</h1>
                <City />
            </div>
            <div>
                <Movie />
            </div>
        </>
    )
}