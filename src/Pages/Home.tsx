import { City } from "../Components/City";

export function Home() {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <City />
            <h1 style={{ margin: '0 auto' }}>Home</h1>
        </div>
    )
}