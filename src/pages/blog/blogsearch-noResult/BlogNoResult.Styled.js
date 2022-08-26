import { Grid, Container } from "@mantine/core";
import styled from "styled-components";

export const BlogMainSection = styled(Container) `
    padding-top: 50px;
    padding-left: 150px;
    padding-right: 130px;

    .instruction h2 {
        font-size: 50px;
        font-weight: 600;
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
    }

    .Mui-selected {
        border-radius: 5px;
        background-color: #3800B0 !important;
        color: white;
        font-weight: bold;
    }

    .txt-section {
        color: #0B0023;
        font-size: 35px;
        font-weight: 500;
        padding-bottom: 30px;
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

export const NotFoundSection = styled(Container) `
    background: #F7F8FA;
    padding-top: 20px;

    .glasses-img { 
        display: flex;
        justify-content: center;
        padding-bottom: 60px;
    }

    .notfound-section h1 {
        padding-top: 50px;
        color: #6033C0;
        text-align: center;
        font-size: 40px;
        font-weight: 600;
    }

    .notfound-section p {
        padding-top: 30px;
        padding-bottom: 10px;
        text-align: center;
        color: #6033C0;
        font-size: 15px;
        font-weight: 400;
    }
`
