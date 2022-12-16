import styled from '@emotion/styled'
import { Input } from '@mantine/core'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { TbSearch } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import Api from '../API/Api'
import CardComponent from '../Components/Card'
import { MovieContext } from '../Context/DataContext'
import Search from '../API/Search'
import Genre from '../API/Genre'
import { Button } from '../Components/LeftBar'


const Wrapper = styled.div`
display: grid;
grid-template-columns: 30rem 1fr ;
.cards{
    display: grid;
    grid-template-columns:repeat(auto-fit, 30rem);
    gap: 5rem ;
    padding-left: 3rem ;
    padding-top: 5rem ;

}

.genres{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center ;
    padding-left: 3rem;
    gap: 0.6rem ;

    button{
        padding: 0.5rem 0!important; ;
    }
}

h2{
    margin-top: 2rem ;
    margin-bottom: 1.2rem ;
    font-size: 3rem ;
}

.filter{
    background: var(--side-color);
    box-shadow: var(--box-shadow);
    z-index: 20;
    text-align: center;
    padding: 4rem 2rem 0 2rem ;
    .down{
        position: sticky ;
        top:  4rem;

    }

    h1{
        margin-bottom: 3rem ;
        line-height: 1.3!important ;
    }
}

h5{
    color: white ;
    font-size: 1.8rem!important; ;
}
    
`




function Explore() {
    const { state: { data: { data }, genres, search } } = useContext(MovieContext)

    const [Form, setForm] = useState("")
    const [Data, setData] = useState(data)
    const [Genres, setGenres] = useState(0)



    const HandleForm = useCallback((e) => {
        setForm(e.target.value)
    }, [])

    const Logic = useCallback(() => {
        if (Form.length > 0 && search.length > 0) {
            setData(search)
            console.log("search 1")
        } else if (Genre !== 0 && search.length > 0) {
            setData(search)
        }
        else {
            setData(data)
            console.log("data1")
        }
    }, [Form, data, search])


    useEffect(() => {

        Logic()


    }, [Logic])





    return (
        <>
            {Form.length > 0 ? <Search query={Form} /> : console.log("search")}
            {Genres !== 0 ? <Genre genre={Genres} /> : console.log("genre")}
            <Wrapper>
                <div className="filter">
                    <div className="down">
                        <Link to="/">
                            <h1 className='h1'>MOFW != BORING</h1>
                        </Link>
                        <Input
                            icon={<TbSearch />}
                            placeholder="Search"
                            size="xs"
                            value={Form}
                            onChange={HandleForm}
                        />

                        <h2 className='h1'>Filter By Genre</h2>
                        <div className="genres">
                            {genres.map((item) => <Button onClick={() => setGenres(item.id)}><h5 >{item.name}</h5></Button>)}

                        </div>
                    </div>
                </div>
                <div className="cards">
                    {Data.map((item) => <Link to={`/movie/${item.id}`}><CardComponent url={item.poster_path} title={item.title} rating={item.vote_average} /> </Link>)}
                </div>
            </Wrapper>
            {data.length === 0 ? <Api /> : console.log("data")}

        </>

    )
}

export default Explore