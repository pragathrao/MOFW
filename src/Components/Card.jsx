import React from 'react';

import styled from '@emotion/styled';
import { MdStar } from "react-icons/md";

const Wrapper = styled.div`
    box-shadow: 0 1px 3px rgb(0 0 0 / 5%), rgb(0 0 0 / 5%) 0px 10px 15px -5px, rgb(0 0 0 / 4%) 0px 7px 7px; 
    border: 0.1rem solid rgb(55, 58, 64);
    width: 26.67rem ;
    position: relative;
    color: white ;

    .rating{
        position: absolute ;
        top: 1rem ;
        display: flex ;
        align-items: center ;
        background-color: #29252598;
        width: 100%;
        justify-content: flex-end ;
        padding-right: 1rem ;


        .icon{
            height: 3rem ;
            width: 3rem ;
            fill: #ffe247 ;
        }
    }
    
    .img{
        display: flex ;
        img{
            height:40rem !important;
            max-width: 100%;
            object-fit: contain;
            background: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
            background-blend-mode: overlay;
        }
    }
    `
function CardComponent({ url, title, rating }) {
    return (
        <Wrapper>
            <div className="img">
                <img src={`https://image.tmdb.org/t/p/original${url}`} alt="" />
                <div className="rating">
                    <p>{Math.floor(Number(rating))}</p>
                    <MdStar className='icon' />
                </div>
                <div className="caption">
                    <h3>{title}</h3>
                </div>
            </div>
        </Wrapper>
    );
}

export default CardComponent