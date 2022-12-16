import axios from "axios"
import { useCallback, useEffect, useState } from "react"

function Reccomendation(movie_id) {
    const key = "8eefc62922325b5c7206cf4e152825af"

    const [Data, setData] = useState(" ")

    const url = `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=${key}&language=en-US&page=1`

    const getReccomendations = useCallback(() => {
        axios.get(url).then((res) => setData(res.data.results)).catch((err) => console.log(err))
    }, [url])


    useEffect(() => {

        getReccomendations()

    }, [getReccomendations])

    return Data
}

export default Reccomendation


