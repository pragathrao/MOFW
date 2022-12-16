import axios from "axios"
import { useContext, useEffect } from "react"
import { MovieContext } from "../Context/DataContext"

function Search({ query }) {

    const key = "8eefc62922325b5c7206cf4e152825af"

    const { dispatch } = useContext(MovieContext)


    useEffect(() => {

        const search = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`
        const Timeout = setTimeout(() => {
            axios.get(search).then((res) => dispatch({ type: "SET_SEARCH", payload: res.data.results }), console.log("search")).catch((err) => console.log(err))
        }, 500)

        return () => {
            clearTimeout(Timeout)
        }
    }, [query, dispatch])


}

export default Search