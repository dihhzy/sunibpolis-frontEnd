import { useNavigate } from "react-router-dom";
import { Transaction } from "../Components/Transaction";
import { useEffect, useState } from "react";

export function MyTicket() {
    return (
        <div>
            <h1>My Ticket</h1>
            <Transaction />
        </div>


    )
}