import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './City.css';

interface City {
    cityId: number;
    cityName: string;
}

export function City() {
    const [cityData, setCityData] = useState<City[]>([]);
    const [selectedCity, setSelectedCity] = useState<number | null>(null);

    useEffect(() => {
        axios.get('https://localhost:7234/api/City')
            .then(response => {
                const responseData = response.data.data;
                setCityData(responseData);
            })
            .catch(error => {
                console.error('Error fetching city data:', error);
            });
    }, []);

    const handleCitySelect = (cityId: number) => {
        setSelectedCity(cityId);
    };

    return (
        <div>
            <Dropdown
                onSelect={(eventKey) => handleCitySelect(Number(eventKey))}
                className="d-inline-block"
            >
                <Dropdown.Toggle variant="success" id="dropdown-city" className="city-dropdown">
                    {selectedCity ? `City: ${selectedCity}` : 'Select a city'}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {cityData.map(city => (
                        <Dropdown.Item key={city.cityId} eventKey={city.cityId}>
                            {city.cityName}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}
