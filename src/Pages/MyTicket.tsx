import { useNavigate } from "react-router-dom";

export function MyTicket() {
    const navigate = useNavigate();
    const redirectToSeat = () =>{
        navigate('/seat');
    }
    return (
        <div>
                    <h1>My Ticket</h1>
        </div>


    )
}