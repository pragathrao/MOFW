import styled from '@emotion/styled'
import { Button, Image } from '@mantine/core'
import React, { useCallback, useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Reccomendation from '../API/Reccomendation'
import CarComponent from '../Components/CarComponent'
import LeftBar from '../Components/LeftBar'
import { MovieContext } from '../Context/DataContext'

function MoviePage() {

    const { state: { data: { data }, recent }, dispatch } = useContext(MovieContext)

    const { id } = useParams()


    const MovieData = data.find((data) => data.id === parseInt(id))
    const Check = recent.find((data) => data.id === parseInt(id))
    const Data = Reccomendation(MovieData?.id)


    const AddMovie = useCallback(() => {

        if (MovieData === Check) {
            console.log("check")
        } else {
            MovieData ? dispatch({ type: "RECENTLY_VIEWED", payload: MovieData }) : console.log("lol")

        }

    }, [MovieData, dispatch, Check])



    const url = `https://image.tmdb.org/t/p/original${MovieData?.backdrop_path}`

    useEffect(() => {
        AddMovie()
    }, [AddMovie, Data])

    const Wrapper = styled.div`
        background: var(--background-color) ;
        background: linear-gradient(to top, #3204fdba, #9907facc), url(${url}) no-repeat center center/cover ;
        background-blend-mode: multiply;
        min-height: 100vh;
        color: white ;
        display: grid;
        grid-template-columns: 1fr minmax(10rem, 15rem);

        .right-bar{
            background: #010000!important ;
            grid-row: 1/3 ;
            grid-column: 2/3 ;
        }

        .also-Watch{
            grid-column:1/2!important ;
            margin-left: 15rem;
            margin-right: 15rem ;

            h3{
                margin-bottom: 2rem ;
            }
        }
        .hero{
            display: flex;
            margin-top: 20rem;
            margin-left: 15rem;
            max-width: 70rem ;

            &-image{
                margin-left: 10rem ;

                img{
                    height: 40rem!important; ;
                }
            }
        }

        .hero-data{
            margin-bottom: 10rem;
            justify-self: center;
            display: flex;
            flex-direction: column;
            align-items: flex-start ;
            
            

            h1{
                font-size:6rem;
                margin-bottom: 1rem ;
                line-height:1.3!important ;
            }
            button{
                margin-top: 6rem ;
                div{
                    span{
                        padding: 2rem 8rem;

                    }
                }

            }
        } 
    `

    return (
        <>
            {Data.length > 1 ?
                <Wrapper>
                    <div className="hero">
                        <div className="hero-data">
                            <h1>{MovieData.title}</h1>
                            <p>{MovieData.overview}</p>
                            <Button>Play</Button>
                        </div>
                    </div>
                    <div className="also-Watch">
                        <h3>People Also Watch</h3>
                        <CarComponent data={Data.length > 0 ? Data : []} slides={4} slideSize="20%" slideGap="lg" />
                    </div>
                    <div className="right-bar">
                        <LeftBar />
                    </div>
                </Wrapper >
                : <h1>Loading</h1>
            }
        </>
    )
}

export default MoviePage