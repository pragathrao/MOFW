import styled from '@emotion/styled'
import { Avatar, Input, Text } from '@mantine/core'
import { openSpotlight } from '@mantine/spotlight'
import React from 'react'
import { TbSearch } from 'react-icons/tb'

function Header() {

    const Wrapper = styled.div`
        grid-column: 1/-1;
        z-index: 30000 ;
        box-shadow: 0px 10px 20px #00090f;
        /* background: var(--side-color); */
        display: flex ;
        justify-content: space-between;
        align-items: center ;

    `

    return (
        <Wrapper>
            <h1 className='h1'>MOFW != BORING</h1>
                <div className="head">
                    <Input
                        icon={<TbSearch />}
                        placeholder="Search"
                        radius="lg"
                        size="xs"
                        onClick={() => openSpotlight()}
                    />
                    <div className="avatar">
                        <Avatar radius="xl" size={35}>HE</Avatar>
                        <Text component='p'> User</Text>

                    </div>
                </div>
        </Wrapper>
    )
}

export default Header