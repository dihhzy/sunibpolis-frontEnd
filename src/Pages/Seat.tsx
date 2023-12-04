import { useEffect, useState } from 'react';
import axios from 'axios';
import './Seat.css';
import { useLocation, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Console } from 'console';

interface SeatProps {

}


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
        movie: null;
        movieId: number;
    };
}

interface Seat{
    seatId : number;
    seatName : string;
    seatNumber : number;
    seatStatus : string;
    theater :{
        theaterId : number;
    }
}

export function Seat(props: SeatProps): JSX.Element {

    const [seatData, setSeatData] = useState<Seat[]>([]);
    const [selectedMovieShowTime, setSelectedMovieShowTime] = useState<MovieShowTime | null>(null);
    const { theaterId } = useParams<{ theaterId: string | undefined }>();
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const movieShowTimeResponse = await axios.get(`https://localhost:7234/api/MovieShowTime`);
                const movieShowTimeData: MovieShowTime[] = movieShowTimeResponse.data.data;
                const foundMovieShowTime = movieShowTimeData.find((MovieShowTime) => MovieShowTime.theater.theaterId === parseInt(theaterId || '', 10));

                if (foundMovieShowTime) {
                    setSelectedMovieShowTime(foundMovieShowTime);
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
        return(
            seat.theater.theaterId === selectedMovieShowTime?.theater.theaterId &&
            seat.seatName === 'A'
        ) 
    });

    const filteredSeatIdSeatTypeB = seatData.filter((seat) => {
        return(
            seat.theater.theaterId === selectedMovieShowTime?.theater.theaterId &&
            seat.seatName === 'B'
        ) 
    });

    const filteredSeatIdSeatTypeC = seatData.filter((seat) => {
        return(
            seat.theater.theaterId === selectedMovieShowTime?.theater.theaterId &&
            seat.seatName === 'C'
        ) 
    });


    console.log('filtered seat id Type A: ', filteredSeatIdSeatTypeA);
    console.log('filtered seat id Type B: ', filteredSeatIdSeatTypeB);
    console.log('filtered seat id Type C: ', filteredSeatIdSeatTypeC);

  const [ticketPrice, setTicketPrice] = useState<number>(30000);
  const [selectedSeatsCount, setSelectedSeatsCount] = useState<number>(0);

  const handleSeatClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const targetElement = e.target as HTMLDivElement;

    if (targetElement && !targetElement.classList.contains('occupied')) {
      targetElement.classList.toggle('selected');
      updateSelectedCount();
    }
  };

  const updateSelectedCount = () => {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const newSelectedSeatsCount = selectedSeats.length;
    setSelectedSeatsCount(newSelectedSeatsCount);
  };
  
    return(
        <div className="body">
            <ul className="showcase">
            <li>
                <div className="seat"></div>
                <small>Available</small>
            </li>
            <li>
                <div className="seat selected"></div>
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
                                        className={`seat-${filteredSeatIdSeatTypeA.seatStatus === 'Available' ? 'available' : 'occupied'}`}
                                        key={filteredSeatIdSeatTypeA.theater.theaterId}
                                        onClick={handleSeatClick}
                                    >
                                        {/* {filteredSeatIdSeatTypeB.seatName} {filteredSeatIdSeatTypeB.seatNumber} */}
                                    </div>
                                ))}
                        </div>

                        <div className='row'>
                            {filteredSeatIdSeatTypeB
                                .filter(seat => seat.theater.theaterId === selectedMovieShowTime?.theater.theaterId)
                                .map(filteredSeatIdSeatTypeB => (
                                    <div
                                        className={`seat-${filteredSeatIdSeatTypeB.seatStatus === 'Available' ? 'available' : 'occupied'}`}
                                        key={filteredSeatIdSeatTypeB.theater.theaterId}
                                        onClick={handleSeatClick}
                                    >
                                        {/* {filteredSeatIdSeatTypeB.seatName} {filteredSeatIdSeatTypeB.seatNumber} */}
                                    </div>
                                ))}
                        </div>

                        <div className='row'>
                            {filteredSeatIdSeatTypeC
                                .filter(seat => seat.theater.theaterId === selectedMovieShowTime?.theater.theaterId)
                                .map(filteredSeatIdSeatTypeC => (
                                    <div
                                        className={`seat-${filteredSeatIdSeatTypeC.seatStatus === 'Available' ? 'available' : 'occupied'}`}
                                        key={filteredSeatIdSeatTypeC.theater.theaterId}
                                        onClick={handleSeatClick}
                                    >
                                        {/* {filteredSeatIdSeatTypeB.seatName} {filteredSeatIdSeatTypeB.seatNumber} */}
                                    </div>
                                ))}
                        </div>



                <p className="text">
                    You have selected <span id="count"> {selectedSeatsCount} </span> seats for a price of Rp.<span id="total">{selectedSeatsCount * ticketPrice}</span>
                </p>
            </div>

            <div className='button-field2'>
                <button>
                    Order
                </button>
            </div>
            
    </div>
        
    );
}