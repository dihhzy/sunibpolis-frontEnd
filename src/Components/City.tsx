import axios from 'axios';
import { useEffect, useState } from 'react';

interface City {
    cityId: number;
    cityName: string;
}

export function City() {
    const [cityData, setCityData] = useState<City[]>([]);

    useEffect(() => {
        axios.get('https://localhost:7234/api/City')
            .then(response => {
                // Extract data property from response (backend)
                const responseData = response.data.data;
                setCityData(responseData);
            })
            .catch(error => {
                console.error('Error fetching city data:', error);
            });
    }, []); // Empty dependency array (effect runs once when the component mounts)

    return (
        <div>
            <h2>City</h2>
            <ul>
                {Array.isArray(cityData) && cityData.map(city => (
                    <li key={city.cityId}>{city.cityName}</li>
                ))}
            </ul>
        </div>
    );
}
