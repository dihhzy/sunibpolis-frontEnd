import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './MoviePage.css';

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

interface Theater {
    theaterId: number;
    theaterType: string;
    theaterName: string;
    ticketPrice: number;
    movie: {
        movieId: number;
        movieName: string;
    };
    cinemaLocation: {
        cinemaLocationId: number;
        cinemaLocationName: string;
        cityId: number;
    };
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

export function MoviePage() {
    const { movieId } = useParams<{ movieId: string | undefined }>();
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    const [theatreData, setTheatreData] = useState<Theater[]>([]);
    const [movieShowTimeData, setMovieShowTimeData] = useState<MovieShowTime[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const movieResponse = await axios.get('https://localhost:7234/api/Movie');
                const movieData: Movie[] = movieResponse.data.data;
                const foundMovie = movieData.find((movie) => movie.movieId === parseInt(movieId || '', 10));

                if (foundMovie) {
                    setSelectedMovie(foundMovie);
                } else {
                    console.error(`Movie with ID ${movieId} not found.`);
                }

                const theatreResponse = await axios.get('https://localhost:7234/api/Theater');
                const theatreData: Theater[] = theatreResponse.data.data;
                setTheatreData(theatreData);

                const movieShowTimeResponse = await axios.get('https://localhost:7234/api/MovieShowTime');
                // console.log('Movie Show Time API Response:', movieShowTimeResponse.data);

                const movieShowTimeData: MovieShowTime[] = movieShowTimeResponse.data.data;
                setMovieShowTimeData(movieShowTimeData);

                // console.log('Movie Data:', movieData);
                // console.log('Selected Movie:', foundMovie);
                // console.log('Theatre Data:', theatreData);
                // console.log('Movie Show Time Data:', movieShowTimeData);
                // console.log('Filtered Theatre Data:', filteredTheatreData);
                // console.log('Filtered Movie Show Time Data:', filteredMovieShowTimeData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (movieId) {
            fetchData();
        }
    }, [movieId]);

    interface Theatre {
        theaterId: number;
        theaterType: string;
        theaterName: string;
        ticketPrice: number;
        movie: {
            movieId: number;
            movieName: string;
        };
        cinemaLocation: {
            cinemaLocationId: number;
            cinemaLocationName: string;
            cityId: number;
        };
    }
    
    
    useEffect(() => {
        axios.get('https://localhost:7234/api/Theater')
            .then(response => {
                const responseData = response.data.data;
                // console.log('Theatre Data:', responseData);
                setTheatreData(responseData);
            })
            .catch(error => {
                console.error('Error fetching theatre data:', error);
            });
    }, []);

    const filteredTheatreData = selectedMovie? theatreData.filter(theatre => theatre.movie?.movieId  === selectedMovie.movieId): [];
    
    

    useEffect(() => {
        axios.get('https://localhost:7234/api/MovieShowTime')
            .then(response => {
                const responseData = response.data.data;
                console.log('Movie Show Time Data:', responseData);
                setMovieShowTimeData(responseData);
            })
            .catch(error => {
                console.error('Error fetching theatre data:', error);
            });
    }, []);


    // console.log('selectedMovie.movieId:', selectedMovie?.movieId);
    // console.log('movieShowTimeData:', movieShowTimeData);

    const filteredMovieShowTimeData = movieShowTimeData.filter((movieShowTime) => {
        return (
            movieShowTime.theater?.movieId === selectedMovie?.movieId &&
            movieShowTime.theater?.theaterId === (filteredTheatreData.length > 0 ? filteredTheatreData[0].theaterId : 0)
        );
    });
    
    
    console.log('filteredMovieShowTimeData: ', filteredMovieShowTimeData);
    

    const filteredMovieShowTimeIds = movieShowTimeData.map(movieShowTime => movieShowTime.theater?.movieId)

    // console.log('Movie Show Time IDs:', filteredMovieShowTimeIds);
  

    console.log('Filtered Theatre Data:', filteredTheatreData);
    // console.log('Filtered Movie Show Time Data:', filteredMovieShowTimeData);

    return (
        <div>
            <div className="container">
                <div className="Movie-Pics">
                    {selectedMovie && (
                        <div className="movie-card">
                            <img src={selectedMovie.movieImg} alt={selectedMovie.movieName} />
                        </div>
                    )}
                </div>
                <div className="Movie-Desc">
                    {selectedMovie && (
                        <div className="desc-movie">
                            <h2>{selectedMovie.movieName}</h2>
                            <br />
                            <ul>
                                <li>
                                    Genre&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{' '}
                                    {selectedMovie.movieGenre}
                                </li>
                                <li>Censor Rating&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {selectedMovie.movieAgeRating}</li>
                                <li>
                                    Duration&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{' '}
                                    {selectedMovie.movieDurationTime} minutes
                                </li>
                            </ul>
                        </div>
                    )}
                    <br />
                    <br />
                    {selectedMovie && (
                        <div>
                            <h2>Sinopsis</h2>
                            <p>{selectedMovie.movieDescription}</p>
                        </div>
                    )}
                </div>
            </div>

            <br /><br />

            <div className='vertical-line'></div>


            
            <div className='show-time-container'>

            <div className="">
                {filteredTheatreData.length > 0 ? (
                    filteredTheatreData.map((theatre, index) => (
                    <div key={theatre.theaterId}>
                        {index > 0 && <div className='vertical-line'></div>}
                        <div className='show-time-desc'>
                        <h2>{theatre.cinemaLocation && theatre.cinemaLocation.cinemaLocationName}</h2>
                        <h4>{theatre.theaterName}</h4>
                        </div>

                        <div className='button-field'>
                        {filteredMovieShowTimeData.map(movieShowTime => (
                                <div className="" key={movieShowTime.movieShowTimeId}>
                                    <button type="submit">
                                    <a href="/Seat.tsx">
                                        {new Date(movieShowTime.showTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </a>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    ))
                ) : (
                    <p>No theaters available for the selected movie.</p>
                )}
                <div className='vertical-line'></div>
            </div>

                
            </div>
        </div>
    );
}
