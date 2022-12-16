import styled from '@emotion/styled'
import React from 'react'
import Center from '../Components/Center'
import Header from '../Components/Header'
import LeftBar from '../Components/LeftBar'
import RightBar from '../Components/RightBar'


const Wrapper = styled.div`
    display:grid;
    grid-template-columns: 15rem 1fr;
    grid-template-rows: 7rem 1fr;
    min-height: 100vh ;


`

function Home() {

    return (
        <Wrapper>
            <Header />
            <LeftBar />
            <Center />
            {/* <RightBar /> */}
        </Wrapper>
    )
}

export default Home