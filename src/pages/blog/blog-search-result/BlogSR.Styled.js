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
`

export const ButtonSection = styled(Grid) `
    padding-top:30px;
    display: flex;
    padding-bottom: 30px;
    
    .btn-section {
        border: 2px solid rgb(229 228 228);
        border-radius:13px;
        padding-right: 25px;
    }

    .all-btn {
        border: 2px solid #3800B0;
        color: #3800B0;
        height: 50px;
        border-radius: 10px;
        background: rgb(222 229 255);
        text-transform: capitalize;
    }

    .other-btn-th {
        color: black;
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
    }

    .inp-sect {
        width: 232%;
        padding: 8px;
        margin-left: 7px;
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

export const PaginationSection = styled(Container) `
    display: flex;
    justify-content: center;
    padding-bottom: 70px;
    padding-top: 50px;
`