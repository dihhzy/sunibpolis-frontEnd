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
    const userId = localStorage.getItem("userId")
    const movieName = localStorage.getItem("selectedMovieName")
    const movieShowTime = localStorage.getItem("selectedMovieShowTime")
    const theaterName = localStorage.getItem("selectedTheaterNamee")
    const paymentMethod = localStorage.getItem("selectedPaymentMethod")
    console.log(theaterName)

    // create transaction
    // const response = axios.post('https://localhost:7234/api/CreateTransaction', {
    //     // TransactionDate: /* ... */,
    //     // TransactionStatus: /* ... */,
    //     // TotalTicket: /* ... */,
    //     // TotalPrice: /* ... */,
    //     UserId: localStorage.getItem("userId"),
    // }, {
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // });


    const [transactionData, setTransactionData] = useState<Transaction[]>([])

    // get transaction data
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
            <Col>
                <p><strong>User ID:</strong> {userId}</p>
                <p><strong>Movie Name:</strong> {movieName}</p>
                <p><strong>Theater Name:</strong> {theaterName}</p>
                <p><strong>Movie ShowTime:</strong> {movieShowTime}</p>
                <p><strong>Payment Method:</strong> {paymentMethod}</p>
            </Col>
        </Container>
    )
}