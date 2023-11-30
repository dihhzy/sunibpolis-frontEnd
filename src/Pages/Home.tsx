import { City } from "../Components/City";
import { Movie } from "../Components/Movie";

export function Home() {
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <City />
                <h1 style={{ margin: '0 auto' }}>Movie</h1>
            </div>
            <div>
                <Movie />
            </div>
        </>
    )
}