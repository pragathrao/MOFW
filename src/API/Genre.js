import axios from "axios"
import { useContext, useEffect } from "react"
import { MovieContext } from "../Context/DataContext"

function Genre({ genre }) {
    const key = "8eefc62922325b5c7206cf4e152825af"

    const { dispatch } = useContext(MovieContext)

    const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&sort_by=revenue.desc&api_key=${key}`

    useEffect(() => {
        axios.get(url).then((res) => dispatch({ type: "SET_SEARCH", payload: res.data.results })).catch((err) => console.log(err))


    }, [dispatch, url])
}

export default Genre