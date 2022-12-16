import styled from '@emotion/styled'
import { Avatar, Input, Text, UnstyledButton } from '@mantine/core'
import { TbSearch } from "react-icons/tb";

import { openSpotlight, useSpotlight } from '@mantine/spotlight'
import React, { useContext, useEffect } from 'react'
import Search from '../API/Search'
import { MovieContext } from '../Context/DataContext'


const Wrapper = styled.div`
    background: var(--side-color);
    box-shadow: var(--box-shadow);
        z-index: 20 ;
        color: white;

        h5{
            padding: 0 3rem ;
        }

        button{
                background-position: center;
                transition: background 0.8s;
                border: none;
                border-radius: 0.2rem;
                padding: 1.2rem 1.8rem;
                font-size: 1.6rem;
                cursor: pointer;
                color: white;
                outline: none;
                width: 100% ;
                display: flex;

                .mantine-5f6x53{
                    margin-left: 5rem ;
                }
                    &:hover {
                        background: var(--background-color) radial-gradient(circle, transparent 1%, #343431 1%) center/15000%;
                        }
                    &:active {
                            background-color: var(--background-color);
                            background-size: 100%;
                            transition: background 0s;
                            }
            }

        .right{
            padding: 1rem 0 0 0;

            &-img{
                padding: 0 3rem ;
            }

        }

        img{
            height: 11rem;
        }

        .right-img{
            display: flex;
            max-width: 25rem;
            margin-top: 1.5rem;
            gap: 1rem;

        }

        .head{
            display: flex;
            margin-top: 2rem ;
            gap: 1.5rem ;
            align-items: center ;
            justify-content: center;
            margin: 1rem 0 2rem 0 ;

            input{
                background: none;
                cursor: pointer;
            }

            .avatar{
                display: flex;
                align-items: center ;
                gap: 1rem;
            }
        }
`

function RightBar() {
    const { opened, query } = useSpotlight()
    const { state: { recent }, dispatch } = useContext(MovieContext)

    const uniq = {}

    const arrFiltered = recent.filter(obj => !uniq[obj.id] && (uniq[obj.id] = true))
    useEffect(() => {
        if (opened === true) {
            console.log('opened')
        } else {
            dispatch({ type: 'SET_SEARCH', payload: [] })
        }
    }, [opened, dispatch])


    return (
        <>
            <Wrapper>
                <div className="right">

                    <div className="div">
                        <Text component='h5'>Recently Viewed</Text>
                        {arrFiltered.length > 0 ? arrFiltered.slice(0, 3).map((recent) => {
                            return (
                                <UnstyledButton>
                                    <div className="right-img">
                                        <img src={`https://image.tmdb.org/t/p/w500${recent.poster_path}`} alt="" />
                                        <div className="info">
                                            <Text>{recent.title}</Text>
                                        </div>
                                    </div>
                                </UnstyledButton>

                            )
                        }) : <Text> Notary </Text>}
                    </div>
                    <Text component='h5' mt={10}>Movies You'd Like </Text>
                </div>

            </Wrapper>

            <Search query={query} />
        </>
    )

}

export default RightBar