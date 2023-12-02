import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Movie.css';
import { useNavigate } from 'react-router-dom';

interface Movie {
    movieId: number;
    movieName: string;
    movieGenre: string;
    movieType: string;
    movieAgeRating: string;
    movieDurationTime: number;
    movieDescription: string;
    movieImg: string;
}

export function Movie() {
    const [movieData, setMovieData] = useState<Movie[]>([]);
    const navigate = useNavigate();

    const navigateToMoviePage = (movieId: number) => {
        navigate(`/moviePage/${movieId}`);
    };

    useEffect(() => {
        axios.get('https://localhost:7234/api/Movie')
            .then(response => {
                const responseData = response.data.data;
                setMovieData(responseData);
            })
            .catch(error => {
                console.error('Error fetching movie data:', error);
            });
    }, []);


    const filteredNowShowing = movieData.filter(movie => movie.movieType === 'Now Showing');

    const filteredComingSoon = movieData.filter(movie => movie.movieType === 'Coming Soon');

    return (
        <div className="movie-container">

            <h1>================ Now Showing ================</h1>
            <br />

            <div className="movie-grid">



                {filteredNowShowing.map(movie => (
                    <div key={movie.movieId} className="movie-card">
                        <img
                            onClick={() => navigateToMoviePage(movie.movieId)}
                            src={movie.movieImg}
                            alt={movie.movieName} />
                        <p className='movie-title'><strong>{movie.movieName}</strong></p>
                    </div>
                ))}

            </div>

            <br />

            <h1>=================== Coming Soon ===================</h1>

            <br />

            <div className='movie-grid'>

                {filteredComingSoon.map(movie => (
                    <div key={movie.movieId} className="movie-card">
                        <img
                            onClick={() => navigateToMoviePage(movie.movieId)}
                            src={movie.movieImg}
                            alt={movie.movieName} />
                        <p className='movie-title'><strong>{movie.movieName}</strong></p>
                    </div>
                ))}
            </div>
        </div>
    );
}
