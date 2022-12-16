// const image = https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
// const search = https://api.themoviedb.org/3/search/movie?api_key=8eefc62922325b5c7206cf4e152825af&language=en-US&query=avengers&page=1&include_adult=false
// const PopularData = https://api.themoviedb.org/3/movie/popular?api_key=8eefc62922325b5c7206cf4e152825af&language=en-US&page=1
// const cast = https://api.themoviedb.org/3/movie/299536/credits?api_key=8eefc62922325b5c7206cf4e152825af&language=en-US
// const UI = https://www.behance.net/gallery/152666383/Movie-Streaming-Desktop-Screen-Recreation?tracking_source=search_projects_recommended%7Cmovie%20app
// const URL = `${baseUrl}/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc${key}`;
// const genre = https://api.themoviedb.org/3/discover/movie?with_genres=${genreID}&sort_by=revenue.desc&api_key=67cf32bdad212a7cc907563a23e39342`)
// const genres = [
//     {
//         "id": 28,
//         "name": "Action"
//     },
//     {
//         "id": 12,
//         "name": "Adventure"
//     },
//     {
//         "id": 16,
//         "name": "Animation"
//     },
//     {
//         "id": 35,
//         "name": "Comedy"
//     },
//     {
//         "id": 80,
//         "name": "Crime"
//     },
//     {
//         "id": 99,
//         "name": "Documentary"
//     },
//     {
//         "id": 18,
//         "name": "Drama"
//     },
//     {
//         "id": 10751,
//         "name": "Family"
//     },
//     {
//         "id": 14,
//         "name": "Fantasy"
//     },
//     {
//         "id": 36,
//         "name": "History"
//     },
//     {
//         "id": 27,
//         "name": "Horror"
//     },
//     {
//         "id": 10402,
//         "name": "Music"
//     },
//     {
//         "id": 9648,
//         "name": "Mystery"
//     },
//     {
//         "id": 10749,
//         "name": "Romance"
//     },
//     {
//         "id": 878,
//         "name": "Science Fiction"
//     },
//     {
//         "id": 10770,
//         "name": "TV Movie"
//     },
//     {
//         "id": 53,
//         "name": "Thriller"
//     },
//     {
//         "id": 10752,
//         "name": "War"
//     },
//     {
//         "id": 37,
//         "name": "Western"
//     }
// ]

import axios from 'axios';
import { useCallback, useContext, useEffect } from 'react'
import { MovieContext } from '../Context/DataContext';

const popular = "https://api.themoviedb.org/3/movie/popular?api_key=8eefc62922325b5c7206cf4e152825af&language=en-US&page=1"
const Trending = "https://api.themoviedb.org/3/trending/movie/day?api_key=8eefc62922325b5c7206cf4e152825af"
const mcu = "https://api.themoviedb.org/3/discover/movie?api_key=8eefc62922325b5c7206cf4e152825af&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_companies=420&with_watch_monetization_types=flatrate"


function Api() {

    const { dispatch } = useContext(MovieContext)

    const Fetching = useCallback(() => {
        axios.all([axios.get(Trending), axios.get(mcu), axios.get(popular)]).then((data) => {
            return (
                dispatch({ type: "SET_MOVIES", payload: data.map((data) => (data.data.results)).flat() }),
                dispatch({ type: "MCU", payload: data[1].data.results }),
                dispatch({ type: "POPULAR", payload: data[2].data.results })
            )
        })
    }, [dispatch])


    useEffect(() => {

        Fetching()

    }, [Fetching])



}

export default Api
