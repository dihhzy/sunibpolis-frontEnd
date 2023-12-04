import axios from "axios";
import { useEffect, useState } from "react";

interface User {
    userId: string,
    userName: string,
    userPhoneNumber: string,
}

interface Transaction {
    transactionId: number,
    transactionStatus: string,
    totalTicket: number,
    totalPrice: number,
    transactionDate: string,
    user: {
        userId: string,
        userName: string,
        userEmail: string,
        userPhoneNumber: string,
        userPassword: string,
        userAge: number,
        transaction: null
    },
    theater: {
        theaterId: number,
        theaterType: string,
        theaterName: string,
        ticketPrice: number,
        movieId: number,
        movie: null,
        cinemaLocationId: number,
        cinemaLocation: string,
        transaction: null,
        movieShowTime: string,
        seat: string
    },
    paymentMethod: {
        paymentMethodId: 1,
        paymentMethodType: string,
        paymentMethodName: string,
        transaction: null
    }
}

export function Transaction() {
    const [user, setUser] = useState<User | null>(null)
    const [transactionData, setTransactionData] = useState<Transaction[]>([])

    useEffect(() => {
        axios.get(`https://localhost:7234/api/Transaction/${localStorage.getItem("userId")}`)
            .then(response => {
                const responseData = response.data.data;
                setTransactionData(responseData);
            })
            .catch(error => {
                console.error('Error fetching transaction data:', error);
            })
    }, [])

    return (
        <div>
            <h3>Transaction</h3>
            <ul>
                {transactionData.map(transaction => (
                    <li key={transaction.transactionId}>
                        {transaction.transactionDate}
                        {transaction.user.userId}
                    </li>
                ))}
            </ul>
        </div>
    )
}