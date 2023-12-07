import { useEffect, useState } from 'react';
import axios from 'axios';
import './Seat.css';
import { useLocation, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Console } from 'console';


interface MovieShowTime {
    movieShowTimeId: number;
    showTime: string;
    theater: {
        theaterId: number;
        theaterType: string;
        theaterName: string;
        ticketPrice: number;
        cinemaLocation: null;
        cinemaLocationId: number;
        movie: {
            movieName: string;
        }
        movieId: number;
    };
}

export interface Seat {
    seatId: number;
    seatName: string;
    seatNumber: number;
    seatStatus: string;
    theater: {
        theaterId: number;
    }
}

export function Seat() {

    const [seatData, setSeatData] = useState<Seat[]>([]);
    const [selectedMovieShowTime, setSelectedMovieShowTime] = useState<MovieShowTime | null>(null);
    const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);
    const { theaterId } = useParams<{ theaterId: string | undefined }>();

    const navigate = useNavigate();
    const navigateToPaymentMethod = () => {
        navigate(`/PaymentMethod/`);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const movieShowTimeResponse = await axios.get(`https://localhost:7234/api/MovieShowTime`);
                const movieShowTimeData: MovieShowTime[] = movieShowTimeResponse.data.data;
                const foundMovieShowTime = movieShowTimeData.find((MovieShowTime) => MovieShowTime.theater.theaterId === parseInt(theaterId || '', 10));

                if (foundMovieShowTime) {
                    setSelectedMovieShowTime(foundMovieShowTime);
                    localStorage.setItem("selectedMovieShowTime", foundMovieShowTime.showTime)
                    localStorage.setItem("selectedTheaterNamee", foundMovieShowTime.theater.theaterName)
                } else {
                    console.error(`Theater with ID ${theaterId} not found.`);
                }

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (theaterId) {
            fetchData();
        }
    }, [theaterId]);

    console.log('theater id : ', selectedMovieShowTime?.theater?.theaterId);

    useEffect(() => {
        axios.get('https://localhost:7234/api/Seat')
            .then(response => {
                const responseData = response.data.data;
                console.log('Theatre Data:', responseData);
                setSeatData(responseData);
            })
            .catch(error => {
                console.error('Error fetching theatre data:', error);
            });
    }, []);

    const filteredSeatIdSeatTypeA = seatData.filter((seat) => {
        return (
            seat.theater.theaterId === selectedMovieShowTime?.theater.theaterId &&
            seat.seatName === 'A'
        )
    });

    const filteredSeatIdSeatTypeB = seatData.filter((seat) => {
        return (
            seat.theater.theaterId === selectedMovieShowTime?.theater.theaterId &&
            seat.seatName === 'B'
        )
    });

    const filteredSeatIdSeatTypeC = seatData.filter((seat) => {
        return (
            seat.theater.theaterId === selectedMovieShowTime?.theater.theaterId &&
            seat.seatName === 'C'
        )
    });

    console.log('filtered seat id Type A: ', filteredSeatIdSeatTypeA);
    console.log('filtered seat id Type B: ', filteredSeatIdSeatTypeB);
    console.log('filtered seat id Type C: ', filteredSeatIdSeatTypeC);

    const handleSeatClick = (seatId: number, seatName: string, seatNumber: number, seatStatus: string) => {
        if (seatStatus === 'Occupied') {
            return;
        }

        const isSelected = selectedSeats.some((seat) => seat.seatId === seatId);

        if (isSelected) {
            const updatedSeats = selectedSeats.filter((seat) => seat.seatId !== seatId);
            setSelectedSeats(updatedSeats);
        } else {
            const selectedSeat = seatData.find((seat) => seat.seatId === seatId);
            if (selectedSeat) {
                setSelectedSeats([...selectedSeats, selectedSeat]);
            }
        }

        // Store selected seats in local storage
        localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));

        const seatElement = document.getElementById(`seat-${seatId}`);
        if (seatElement) {
            seatElement.classList.toggle('selected');
        }
    };
    const calculateTotalPrice = () => {
        return selectedSeats.length * (selectedMovieShowTime?.theater?.ticketPrice || 0);
    };

    const selectedSeatsCount = selectedSeats.length;
    const ButtonDisabled = selectedSeatsCount === 0;
    const buttonColor = ButtonDisabled ? "grey" : "rgb(163, 183, 99)";

    console.log('seatIds selected: ', selectedSeats);

    // Store selected seats in local storage
    // localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
    // console.log("SELECTED SEAT ", selectedSeats)

    // update seat status [put axios]
    const handleOrder = async () => {
        try {
            for (const seat of selectedSeats) {
                await axios.put(
                    `https://localhost:7234/api/Seat/${seat.seatId}`,
                    { seatStatus: 'Occupied' },
                    {
                        params: {
                            SeatId: seat.seatId
                        },
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    }
                );
            }

            localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
            navigateToPaymentMethod();
        } catch (error) {
            console.error('Error placing order:', error);
        }
    };


    return (
        <div className="body">
            <ul className="showcase">
                <li>
                    <div className="seat"></div>
                    <small>Available</small>
                </li>
                <li>
                    <div className="seat-selected"></div>
                    <small>Selected</small>
                </li>
                <li>
                    <div className="seat occupied"></div>
                    <small>Occupied</small>
                </li>
            </ul>

            <div className="isi">
                <div className="screen"></div>
                <div className='row'>
                    {filteredSeatIdSeatTypeA
                        .filter(seat => seat.theater.theaterId === selectedMovieShowTime?.theater.theaterId)
                        .map(filteredSeatIdSeatTypeA => (
                            <div
                                id={`seat-${filteredSeatIdSeatTypeA.seatId}`}
                                className={`seat ${filteredSeatIdSeatTypeA.seatStatus === 'Available' ? 'available' : 'occupied'}`}
                                key={filteredSeatIdSeatTypeA.seatId}
                                onClick={() => handleSeatClick(filteredSeatIdSeatTypeA.seatId, filteredSeatIdSeatTypeA.seatName, filteredSeatIdSeatTypeA.seatNumber, filteredSeatIdSeatTypeA.seatStatus)}
                            >
                                {filteredSeatIdSeatTypeA.seatName}{filteredSeatIdSeatTypeA.seatNumber}
                            </div>
                        ))}
                </div>

                <div className='row'>
                    {filteredSeatIdSeatTypeB
                        .filter(seat => seat.theater.theaterId === selectedMovieShowTime?.theater.theaterId)
                        .map(filteredSeatIdSeatTypeB => (
                            <div
                                id={`seat-${filteredSeatIdSeatTypeB.seatId}`}
                                className={`seat ${filteredSeatIdSeatTypeB.seatStatus === 'Available' ? 'available' : 'occupied'}`}
                                key={filteredSeatIdSeatTypeB.seatId}
                                onClick={() => handleSeatClick(filteredSeatIdSeatTypeB.seatId, filteredSeatIdSeatTypeB.seatName, filteredSeatIdSeatTypeB.seatNumber, filteredSeatIdSeatTypeB.seatStatus)}
                            >
                                {filteredSeatIdSeatTypeB.seatName}{filteredSeatIdSeatTypeB.seatNumber}
                            </div>
                        ))}
                </div>

                <div className='row'>
                    {filteredSeatIdSeatTypeC
                        .filter(seat => seat.theater.theaterId === selectedMovieShowTime?.theater.theaterId)
                        .map(filteredSeatIdSeatTypeC => (
                            <div
                                id={`seat-${filteredSeatIdSeatTypeC.seatId}`}
                                className={`seat ${filteredSeatIdSeatTypeC.seatStatus === 'Available' ? 'available' : 'occupied'}`}
                                key={filteredSeatIdSeatTypeC.seatId}
                                onClick={() => handleSeatClick(filteredSeatIdSeatTypeC.seatId, filteredSeatIdSeatTypeC.seatName, filteredSeatIdSeatTypeC.seatNumber, filteredSeatIdSeatTypeC.seatStatus)}
                            >
                                {filteredSeatIdSeatTypeC.seatName}{filteredSeatIdSeatTypeC.seatNumber}
                            </div>
                        ))}
                </div>

                <p className="text">
                    You have selected <span id="count"> {selectedSeats.length} </span> seats for a price of Rp.<span id="total">{calculateTotalPrice()}</span>
                </p>
            </div>

            <div className='button-field2'>
                <button onClick={handleOrder} disabled={ButtonDisabled} style={{ backgroundColor: buttonColor }}>
                    Order
                </button>
            </div>
        </div>
    );
}