import { Grid, Container } from "@mantine/core";
import styled from "styled-components";

export const BlogMainSection = styled(Container) `
    padding-top: 50px;
    padding-left: 150px;
    overflow-x: hidden;
    padding-right: 130px;

    .grid-card-root {
        margin:0px;
    }

    .grid-root {
        @media screen and (max-width: ${({ theme })=> theme.breakPoints.sm}){
            display: block;
        }
    }

    .col-root-img {
        @media screen and (max-width: ${({ theme })=> theme.breakPoints.sm}){
            max-width: 97.6%;
        }

        @media (min-width: 355px) and (max-width: 370px) {
            max-width: 97.7%;
        }
        @media (min-width: 370px) and (max-width: 390px) {
            max-width: 97.8%;
        }
        @media (min-width: 390px) and (max-width: 400px) {
            max-width: 97.9%;
        }
        @media (min-width: 400px) and (max-width: 431px) {
            max-width: 98.2%;
        }
    }

    @media screen and (max-width: ${({ theme })=> theme.breakPoints.sm}){
        padding-left:15px;
        padding-right:15px;
    }

    .instruction h2 {
        font-size: 50px;
        font-weight: 600;
        @media screen and (max-width: ${({ theme })=> theme.breakPoints.sm}){
            font-size: 40px;
        }
    }

    .instruction p {
        color: grey;
        padding-bottom: 10px;
        font-size: 13px;
    }
    .img-section {
        object-fit: cover;
        width: 98%;
        height: auto;
        margin-left: 8px;

        @media screen and (max-width: ${({ theme })=> theme.breakPoints.sm}){

        }
    }

    .Mui-selected {
        border-radius: 5px;
        background-color: #3800B0 !important;
        color: white;
        font-weight: bold;
    }
`

export const ButtonSection = styled(Grid) `
    padding-top:30px;
    display: flex;
    padding-bottom: 100px;

    @media screen and (max-width: ${({ theme })=> theme.breakPoints.sm}){
        flex-direction: column-reverse;
        gap: 18px;
        padding-bottom: 50px;
    }
    
    .btn-section {
        border: 2px solid rgb(229 228 228);
        border-radius:13px;
        padding-right: 35px;

        @media screen and (max-width: ${({ theme })=> theme.breakPoints.sm}){
            display: flex;
            overflow: scroll;
            width: 102%;
            padding-right: 35px;
            border-top-left-radius: 12px;
            border-bottom-left-radius: 12px;
        }
    }

    .all-btn {
        border: 2px solid #3800B0;
        color: #3800B0;
        height: 50px;
        border-radius: 10px;
        background: rgb(222 229 255);
        text-transform: capitalize;
    }

    .other-btn {
        background: white;
        border: none;
        color: black;
        height: 50px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        margin-left: 25px;
        text-transform: capitalize;

        @media screen and (max-width: ${({ theme })=> theme.breakPoints.sm}){
            margin-left: 33px;
        }
    }

    .inp-sect {
        width: 232%;
        padding: 8px;
        margin-left: 7px;

        @media screen and (max-width: ${({ theme })=> theme.breakPoints.sm}){
            width: 98%;
            padding: 0px; 
            margin-left: 0px;
        }
    }

`

export const CardTopSection = styled(Container) `
    background: #0B0023;
    border-radius: 20px;
    padding: 0px !important;

    

    .mantine-Image-image {
        height: 400px !important;
        border-radius: 21px;
    }

    .read-section h2 {
        font-size: 45px;
        color: white;
        font-weight: 600;

        @media screen and (max-width: ${({ theme })=> theme.breakPoints.sm}){
            width: 197%;
            font-size: 21px;
        }
    }

    .txt {
        font-size: 16px;
        color: #EBE5F7;
        padding-top: 10px;
        padding-bottom: 10px;

        @media screen and (max-width: ${({ theme })=> theme.breakPoints.sm}){
            font-size: 15px;
            color: #EBE5F7;
            width: 231%;
            padding-right: 25px;
            padding-top: 10px;
        }
    }

    .top-txt {
        padding-bottom: 10px;
        color: grey;
        font-size: 15px;
    }

    .read-section a {
        text-decoration: none;
        color: white;
        font-weight: 600;
        font-size: 13px;
    }

    .read-section {
        padding-top:20px;
        padding-left: 30px;
        
        @media screen and (max-width: ${({ theme })=> theme.breakPoints.sm}){
            padding-left: 15px;
        }
    }
`

export const BlogCard = styled(Container) `
    padding: 0px;
    padding-top: 50px;
    margin: 0;

    .date-category {
        color: grey;
        font-size: 13px;
        font-weight: 300;
    }
    
    .title-card {
        color: #0B0023;
        font-weight: 500;
        font-size: 30px;
    }

    .text-card {
        padding-bottom: 15px;
        padding-top: 10px;
        font-size: 16px;
    }

    .read-article {
        color: #3800B0 !important;
        font-size: 14px;
        padding: 0;
        margin: 0;
        text-decoration: none;
        font-weight: 600;
    }
`

export const PaginationSection = styled(Container) `
    display: flex;
    justify-content: center;
    padding-bottom: 70px;
    padding-top: 50px;

    @media screen and (max-width: ${({ theme })=> theme.breakPoints.sm}){
        padding-left: 0px;
        padding-right: 0px;
    }
`






