import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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

export function MoviePage() {
    const { movieId } = useParams<{ movieId: string | undefined }>();
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:7234/api/Movie');
                const movieData: Movie[] = response.data.data;
                const foundMovie = movieData.find(
                    (movie) => movie.movieId === parseInt(movieId || '', 10)
                );

                if (foundMovie) {
                    setSelectedMovie(foundMovie);
                } else {
                    console.error(`Movie with ID ${movieId} not found.`);
                }
            } catch (error) {
                console.error('Error fetching movie data:', error);
            }
        };

        if (movieId) {
            fetchData();
        }
    }, [movieId]);

    return (
        <div>
            <h2>Movie Page</h2>
            {selectedMovie && (
                <div className="movie-details">
                    <div className="movie-card">
                        <img src={selectedMovie.movieImg} alt={selectedMovie.movieName} />
                        <h4>{selectedMovie.movieName}</h4>
                        <p>{selectedMovie.movieDescription}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
