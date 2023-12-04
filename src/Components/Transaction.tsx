import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Transaction.css"

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
        <Container className="transaction-container">
            {transactionData.map(transaction => (
                <Col key={transaction.transactionId}>
                    <div className="transaction-item">
                        <p><strong>User ID:</strong> {transaction.user.userId}</p>
                        <p>
                            <strong>
                                Transaction Date:
                            </strong>
                            {new Date(transaction.transactionDate).toLocaleString()}
                        </p>
                        <p><strong>Theater Name:</strong> {transaction.theater.theaterName}</p>
                        <p><strong>Theater Type:</strong> {transaction.theater.theaterType}</p>
                        <p><strong>Total Price:</strong> {transaction.totalPrice}</p>
                        <p><strong>Payment Method:</strong> {transaction.paymentMethod.paymentMethodName}</p>
                        <p><strong>Transaction Status:</strong> {transaction.transactionStatus}</p>
                    </div>
                </Col>
            ))}
        </Container>
    )
}