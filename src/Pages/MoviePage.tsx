import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './MoviePage.css'

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
                
                console.log('Movie Data:', movieData);

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



    const [theatreData, setTheatreData] = useState<Theatre[]>([]);

    useEffect(() => {
        axios.get('https://localhost:7234/api/Theater')
            .then(response => {
                const responseData = response.data.data;
                console.log('Theatre Data:', responseData);
                setTheatreData(responseData);
            })
            .catch(error => {
                console.error('Error fetching theatre data:', error);
            });
    }, []);

<<<<<<< HEAD
    const filteredTheatreData = selectedMovie ? theatreData.filter(theatre => theatre.movie.movieId === selectedMovie.movieId) : [];
=======
    const filteredTheatreData = selectedMovie? theatreData.filter(theatre => theatre.movie?.movieId  === selectedMovie.movieId): [];
    
    interface MovieShowTime {
        movieShowTimeId : number;
        ShowTime : string;
        theatre: {
            theatreId : number;
            theaterType : string;
            theaterName : string;
            ticketPrice : number;
            movieId : number;
            cinemaLocationId: number;
        };
>>>>>>> 1b1c9e8592bbbd31056af24aeca7cbbb9dc1649e

    }
    
    const [movieShowTimeData, setMovieShowTimeData] = useState<MovieShowTime[]>([]);
    
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

    const movieIds = movieShowTimeData.map((movieShowTime) => movieShowTime.theatre && movieShowTime.theatre.movieId);
    const validMovieIds = movieIds.filter((movieId) => movieId !== undefined);
    console.log('movieshowtime validMovieIds', validMovieIds);

    console.log('movieshowtime movieIds', movieIds);


    const filteredMovieShowTimeData = selectedMovie? movieShowTimeData.filter(movieShowTime => movieShowTime.theatre?.movieId  === selectedMovie.movieId): [];

    console.log('selectedMovie.movieId:', selectedMovie?.movieId);
    console.log('movieShowTimeData:', movieShowTimeData);


    console.log('Filtered Theatre Data:', filteredTheatreData);
    console.log('Filtered Movie Show Time Data:', filteredMovieShowTimeData);

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
                        <div className='desc-movie'>
                            <h2>{selectedMovie.movieName}</h2>
                            <br />
                            <ul>
                                <li>Genre&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {selectedMovie.movieGenre}</li>
                                <li>Censor Rating&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {selectedMovie.movieAgeRating}</li>
                                <li>Duration&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {selectedMovie.movieDurationTime} minutes</li>
                            </ul>
                        </div>
                    )}

                    <br /><br />

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
<<<<<<< HEAD
                    {filteredTheatreData.map(theatre => (
                        <div className="" key={theatre.theaterId}>
                            <p className=''>
                                <strong>
                                    {theatre.cinemaLocation.cinemaLocationName} {theatre.theaterName} {theatre.movie.movieName}
                                </strong>
                            </p>
                        </div>
                    ))}
                </div>

=======
                    {filteredTheatreData.map((theatre, index) => (
                        <div key={theatre.theaterId}>
                            {index > 0 && <div className='vertical-line'></div>}
                            <h2>{theatre.cinemaLocation && theatre.cinemaLocation.cinemaLocationName}</h2>
                            <h4>{theatre.theaterName}</h4>
                        </div>
                    ))}
                </div>
                
>>>>>>> 1b1c9e8592bbbd31056af24aeca7cbbb9dc1649e
            </div>
            
            <div className='vertical-line'></div>

        </div>
    );
}
// nanti loop semua nama mall yang ada movieIdnya
// didalem loopnya ada theatrenya yang ada movieidnya