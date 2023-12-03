import { useNavigate } from "react-router-dom";
import { Transaction } from "../Components/Transaction";

export function MyTicket() {
    const navigate = useNavigate();
    const redirectToSeat = () => {
        navigate('/seat');
    }
    return (
        <div>
            <h1>My Ticket</h1>
            <Transaction />
        </div>


    )
}