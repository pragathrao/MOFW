import styled from '@emotion/styled'
import { Input } from '@mantine/core'
import React, { useContext } from 'react'
import { TbSearch } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import Api from '../API/Api'
import CardComponent from '../Components/Card'
import { MovieContext } from '../Context/DataContext'

const Wrapper = styled.div`
background-color: var(--background-color);
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
    gap: 0.5rem ;
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
}

h5{
    color: white ;
    font-size: 1.8rem ;
}
    
`




function Explore() {
    const { state: { data: { data }, genres } } = useContext(MovieContext)
    return (
        <>
            <Wrapper>
                <div className="filter">
                    <h1 className='h1'>MOFW != BORING</h1>
                    <Input
                        icon={<TbSearch />}
                        placeholder="Search"
                        // radius="lg"
                        size="xs"
                    />
                    <h2 className='h1'>Filter By Genre</h2>
                    <div className="genres">
                        {genres.map((item) => <h5>{item.name}</h5>)}

                    </div>
                </div>
                <div className="cards">
                    {data.map((item) => <Link to={`/movie/${item.id}`}><CardComponent url={item.poster_path} title={item.title} rating={item.vote_average} /> </Link>)}
                </div>
            </Wrapper>
            {data ? <Api /> : ""}

        </>

    )
}

export default Explore