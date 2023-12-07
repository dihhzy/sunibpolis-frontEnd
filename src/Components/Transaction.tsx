import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Transaction.css"
import { Seat } from "../Pages/Seat";

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
    const userName = localStorage.getItem("userName")
    const movieName = localStorage.getItem("selectedMovieName")
    const movieShowTime = localStorage.getItem("selectedMovieShowTime")
    const theaterName = localStorage.getItem("selectedTheaterNamee")
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats") || '[]') as Seat[];
    console.log('selectedSeats:', selectedSeats);
    const selectedSeatInfo = selectedSeats.map(seat => `${seat.seatName}${seat.seatNumber}`).join(', ');
    console.log('selectedSeatInfo:', selectedSeatInfo);


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
                <p><strong>Username:</strong> {userName}</p>
                <p><strong>Movie name:</strong> {movieName}</p>
                <p><strong>Theater name:</strong> {theaterName}</p>
                <p><strong>Movie show time:</strong> {movieShowTime}</p>
                <p><strong>Seat:</strong> {selectedSeatInfo}</p>
            </Col>
        </Container>
    )
}