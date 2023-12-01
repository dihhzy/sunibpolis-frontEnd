import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Cinema {
    cinemaLocationId: number;
    cinemaLocationName: string;
}

export function CinemaLocation() {
    const [cinemaLocData, setCinemaLocData] = useState<Cinema[]>([]);

    useEffect(() => {
        axios.get('https://localhost:7234/api/CinemaLocation')
            .then(response => {
                const responseData = response.data.data;
                setCinemaLocData(responseData);
            })
            .catch(error => {
                console.error('Error fetching city data:', error);
            });
    }, []);

    return (
        <div>
            <h3>Cinema Locations</h3>
            <ul>
                {cinemaLocData.map(cinema => (
                    <li key={cinema.cinemaLocationId}>
                        {cinema.cinemaLocationName}
                    </li>
                ))}
            </ul>
        </div>
    )
}
