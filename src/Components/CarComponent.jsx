import React, { useContext } from 'react'
import { Carousel } from '@mantine/carousel';
import { MovieContext } from '../Context/DataContext';
import { Text } from '@mantine/core';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
color: white ;
    img{
        object-fit: cover !important;
        border-radius: 9px ;
    }
.img{
    position: relative;
    
}

.div{
    position: absolute;
    z-index: 100;
    bottom: 4rem;
    left: 2rem;
    width: 80%;
    text-align: start!important ;
}

.l{
    display: flex;
    gap: 2rem ;
}
`

const Wrapper2 = styled.div`
    position: absolute;
    background-color: #29252598;
    padding: 0.5rem 0.3rem;
    z-index: 100;
    bottom: 2rem;
    left: 2rem;
    width: 80%;
    text-align: start!important ;

`

function CarComponent({ data, slides, slideSize, height, slideGap, indicators, render, width }) {
    const { state: { genres } } = useContext(MovieContext)

    return (
        <>
            <Carousel mx="auto" withIndicators={indicators} height={height} slidesToScroll={slides} slideSize={slideSize} slideGap={slideGap} align="start" breakpoints={[
                { maxWidth: 'md', slideSize: '50%' },
                { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
            ]} styles={{
                control: {
                    '&[data-inactive]': {
                        opacity: 0,
                        cursor: 'default',
                    },
                },
            }}>
                {data?.map((lol) =>
                    <Carousel.Slide key={lol.title}>
                        <Link to={`/movie/${lol.id}`}>
                            <Wrapper>
                                <div className="img">
                                    {lol.backdrop_path ? <img src={`https://image.tmdb.org/t/p/${width ?? "w500"}${lol.backdrop_path}`} alt='' /> : "lol"}
                                </div>
                                {render === true ?
                                    <Wrapper2>
                                        <Text component='h4'>{lol.title}</Text>
                                        <div className="l">
                                            <Text component='h5'>{lol.release_date.slice(0, 4)}</Text>
                                            <Text component='h5'>{genres.find((data) => data.id === lol.genre_ids[0]).name}</Text>
                                        </div>
                                    </Wrapper2> : <div className="div"><h4>{lol.title}</h4></div>}
                            </Wrapper>
                        </Link>
                    </Carousel.Slide>)}
            </Carousel>
        </>
    );
}

export default CarComponent