import { useEffect, useState } from 'react';
import './Seat.css';

interface SeatProps {}

export function Seat(props: SeatProps): JSX.Element {
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
                <small>N/A</small>
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

                <div className="row" onClick={handleSeatClick}>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                </div>
                <div className="row" onClick={handleSeatClick}>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                </div>
                <div className="row" onClick={handleSeatClick}>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat "></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                </div>
                <p className="text">
                    You have selected <span id="count">{selectedSeatsCount}</span> seats for a price of Rp.<span id="total">{selectedSeatsCount * ticketPrice}</span>
                </p>
            </div>
    </div>
        
    );
}