import { Container, Grid } from '@mantine/core';
import styled from "styled-components";

export const Body = styled.div`
    background: #E5E5E5;

    .owl-theme {
        padding-top: 50px;
        width: 865px !important;
    }

    .owl-stage {
        width: 2535px !important;
    }



    .owl-nav {
        text-align: center;
        -webkit-tap-highlight-color: transparent;
        margin-top: -360px;
        float: right;
        font-size: 61px;
        margin-right: -8px;
    }

    .owl-next {
        color: #3800B0 !important;
    }

    .owl-next:hover {
        background: none !important;
    }

    .owl-prev {
        color: #3800B0 !important;
    }

    .owl-prev:hover {
        background: none !important;  
    }

    .col-one {
        padding-left: 114px;
        padding-right: 50px;
        padding-left: 160px;
    }

    .main-grid {
        margin: 0px !important;
    }

    .main-tab {
        display: flex;
        border: 1px solid #bcbcbc;
        padding-left: 0px;
        width: 86%;
        border-radius: 9px;
    }

    .col-two-sect {
        max-width: 60.5%;
    }

    .anytabname {
        color: #160046;
        gap: 80px;
        border: 1px solid grey;
        padding-left: 0px;
        width: 87%;
        border-radius: 9px;
    }

    .anytabname {
        color: #3800B0;
        border: 1px solid #3800B0;
        padding: 11px;
        width: 37%;
        text-align: center;
        cursor: pointer;
        height: 47px;
    }

    .anytabname:focus {
        border: 1px solid #3800B0;
        background: #EBE5F7;
        color: #3800B0;
        padding: 11px;
        width: 37%;
        border-radius: 8px;
        cursor: pointer;
        border-radius: 8px;
        height: 47px;
        background: #EBE5F7;
    }

    .tabname {
        color: #160046;
        padding: 11px;
        text-align: center;
        cursor: pointer;
        width: 37%;
    }

    .tabname:focus {
        border: 1px solid #3800B0;
        background: #EBE5F7;
        color: #3800B0;
        padding: 11px;
        border-radius: 8px;
        width: 37%;
        cursor: pointer;
    }
`

export const FotoSection = styled(Container)`
    padding-top: 20px;
    max-width: 88%;
    max-width: 1270px;
    padding-bottom: 10px;
    
    .rainbow {
        border-radius: 15px !important;
    }

    body { 
        
    }
`

export const LeftSection = styled(Container)`
    background: white;
    padding-left: 35px;
    border-radius: 20px;


    .tomcruse {
        width: 65%;
        padding-top: 20px;
        padding-bottom: 10px;
        padding-left: 100px;
        text-align: center;
    }
`

export const Namesurname = styled.h1`
    max-width: 290px;
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    padding-bottom: 10px;

`

export const TagName = styled.p `
    max-width: 290px;
    text-align: center;
`

export const Text = styled.p`
    max-width: 290px;
    text-align: center;
`

export const DateSection = styled.div `
    background: #F7F8FA;
    padding-top: 20px;
    padding-bottom: 1px;
    border-radius: 10px;
    margin: 0px 10px;
`

export const Date = styled.h4`
    font-size: 16px;
    text-align: center;
    font-weight: 600;
`

export const DateText = styled.p`
    font-size: 12px;
    font-weight: 600;
    text-align: center;
`

export const FollowersSection = styled.div`
    background: #F7F8FA;
    display: flex;
    gap: 40px;
    border-radius: 10px;
    margin: 10px 10px;
    padding-top: 15px;
`

export const Follower = styled.p`
    text-align: center;
    padding-left: 42px;
    font-weight: 600;
`

export const Following = styled.p`
    text-align: center;
    font-weight: 600;
`

export const ButtonSection = styled.div`
    .first-btn {
        background: #3800B0;
        margin: 0px 7px 10px 11px;
        width: 42.5%;
        border-radius: 8px;
        height: 50px;
    }

    .second-btn {
        margin: 0px 7px 10px 11px;
        width: 42.5%;
        background: #FFFFFF;
        border: 1px solid #8f75bc;
        border-radius: 8px;
        color: #3800B0;
        height: 50px;
    }
`

export const CarouselSection = styled.div`
    padding-top: 35px;
    padding-bottom: 45px;
    background: white;
    margin-right: -235px;
    display: flex;
    justify-content: center;
    flex-flow: wrap;
    border-radius: 15px;

    .carousel-img {
        border-radius: 10px;
    }
`

export const NameCarousel = styled.div`
    padding-top: 20px;
    font-size: 20px;
    display: flex;
    justify-content: center;
`

export const CarouselImage = styled.div`
`

export const Username = styled.div`
    padding-top: 10px;

`

export const VerifiedImg = styled.img`
width: 14% !important;
`