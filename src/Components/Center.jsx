import styled from '@emotion/styled'
import React, { useContext } from 'react'
import Api from '../API/Api'
import { MovieContext } from '../Context/DataContext'
import CarComponent from './CarComponent'
import { Text } from '@mantine/core'


const Wrapper = styled.div`
    color: white;
    /* background: #152436; */
    background: #00111b;

    grid-row: 2/3;
        grid-column: 2/3;

    .main{
        margin: 3rem 3rem;

        img{
            border-radius: 20px;
            height: 420px;
            width: 1470%;
        }
    }

    .mcu{
        margin: -1rem 3rem 2rem 3rem;
    }
    h3{
        font-size: 2rem;
        margin: 1rem 0 2rem 0;
        
        
    }
    .below{
        margin: 0 3rem 2rem 3rem;
    }

`

// Things to do 
// Reduce the width of the right icons
// Find Good color for the background
// add shadow to carousal
// add backlay to recently viewed
// Finish Recommended
// Check Property of all images

// https://www.behance.net/gallery/103396733/MovieZone-streaming-service?tracking_source=search_projects%7Cmovie+app
// https://www.behance.net/gallery/152797999/Game-Streaming-Dashboard?tracking_source=search_projects_recommended%7Cmodern+dashboard

function Center() {
    const { state: { data } } = useContext(MovieContext)

    const mainData = data.data.slice(0, 4)

    return (
        <Wrapper>
            <div className="main">
                <CarComponent data={mainData} slides={1} slideSize="100%" indicators={true} width={"original"} />
            </div>
            <div className="topRated below">
                <Text component='h3' sx={{ marginTop: "20px!important" }}>Popular</Text>
                <CarComponent height={200} data={data.popular} slides={5} slideSize="25%" slideGap="xl" render={true} />
            </div>
            <div className=" mcu">
                <Text component='h3' >Marvel Cinematic Universe</Text>
                <CarComponent height={200} data={data.mcu.slice(1, -1)} slides={5} slideSize="25%" slideGap="xl" render={true} />
            </div>
            <Api />
        </Wrapper>
    )
}

export default Center