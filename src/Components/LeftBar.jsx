import styled from '@emotion/styled'
import { Group, Text, UnstyledButton } from '@mantine/core'
import { openSpotlight } from '@mantine/spotlight';
import React from 'react'
import { MdSearch, MdSettings, MdLogout, MdMovie, MdHome } from "react-icons/md";
import { Link } from 'react-router-dom';


const Wrapper = styled.div`
    background: var(--side-color);
    z-index: 20;
    box-shadow: 0px 5px 10px #000910;; 
    grid-row: 2/3;
    grid-column: 1/2 ;

    svg{
        height: 3rem ;
        width: 3rem ;
    }

    
    .menu{
        margin-top: 5rem;
        text-align: center;
    }

    .setting-menu{
        margin-top: 10rem ;
        div{
            display: flex ;
            flex-direction: column;
            align-items: center; 
            width: 100% ;
    
        }
    }
    .title{
        margin-top: 7rem;
        div{
            display: flex ;
            flex-direction: column;
            align-items: center; 
            width: 100% ;

        }

    }


        

`

export const Button = styled(UnstyledButton)`
    background-position: center;
    transition: background 0.8s;
    border: none;
    border-radius: 2px;
    padding: 12px 18px;
    font-size: 16px;
    text-transform: uppercase;
    cursor: pointer;
    color: #ffffffb0;
    outline: none;
    width: 100% ;
    display: flex;

        &:hover {
                    background: var(--background-color) radial-gradient(circle, transparent 1%, #343431 1%) center/15000%;
                    }
        &:active {
                    background-color: var(--background-color);
                    background-size: 100%;
                    transition: background 0s;
                    }

`

const MenuData = [
    { logo: <MdHome />, title: "Home", link: "/", onClick: "" },
    { logo: <MdSearch />, title: "Search", link: "", onClick: () => openSpotlight() },
    { logo: <MdMovie />, title: "Explore", link: "/Explore", onClick: "" },
]
const Settings = [
    { logo: <MdSettings />, title: "Settings" },
    { logo: <MdLogout />, title: "Logout" },
]

function LeftBar() {

    return (
        <Wrapper>
            <div className="title">
                {MenuData.map((data, i) => {
                    return (
                        <Link to={data.link}>
                            <div key={i}>
                                <Button onClick={data.onClick}>
                                    <Group>
                                        {data.logo}
                                        <div>
                                            <Text size="md" component='h6'>{data.title}</Text>
                                        </div>
                                    </Group>
                                </Button>
                            </div>
                        </Link>

                    )
                })}

            </div>
            <div className="setting-menu">
                {Settings.map((data, i) => {
                    return (
                        <div key={i}>
                            <Button>
                                <Group>
                                    {data.logo}
                                    <div>
                                        <Text size="md" component='h6'>{data.title}</Text>
                                    </div>
                                </Group>
                            </Button>
                        </div>

                    )
                })}


            </div>

        </Wrapper>
    )
}

export default LeftBar