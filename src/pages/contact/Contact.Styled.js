import { Grid, Container } from "@mantine/core";
import styled from "styled-components";

export const ContactContainer = styled(Container)`
    overflow: hidden;

    .contact-top {
        background-color: #2D008D;
        border-radius: 50px;
    }

    .contact-bottom {
      .mantine-Container-root .sc-eKBdFk .domdww .mantine-15pjuqq{
        align-items: center;
      }
    }

    .grid-contact-top {
        @media screen and (max-width: ${({theme}) => theme.breakPoints.sm}) {
            width:100%;
            margin: 0;
        }
    }

    .toggle p {
        color: grey;
        font-size: 14px;
        text-align: center;
        padding-top: 130px;
    }

    .content h2 {
        font-size: 50px;
        color: white;
        font-weight: 500;
        text-align: center;
        padding-top: 30px;
    }

    .info p {
        font-size: 17px;
        padding-top: 32px;
        padding-bottom: 10px;
        font-weight: 200;
        text-align: center;
        color: white;
    }

    .info ul {
        padding-top: 5px;
    }

    .info ul li {
        font-size: 18px;
        list-style: none;
        color: white;
        text-align:center;
        line-height: 35px;
    }

    .envelope-img {
        display: flex;
        justify-content: center;
        padding-top: 120px;
        padding-bottom: 127px;
    }

    
`
export const ContactSecondSection = styled(Container) `
    
    display:flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
    height: 100%;
    font-weight: 200;
   
    @media screen and (max-width: ${({theme}) => theme.breakPoints.lg}) {
       padding-top: 200px;
       padding-bottom: 200px;
    }


    .input-section-one {
        padding-top:40px;
    }
    
    .input-section-two {
        border: 1px solid white;
        padding-top:20px;
    }

    .send-button {
        background-color: #3800B0;
        color: white;
        width:100%;
        height: 50px;
        margin-top: 40px;
    }

`
