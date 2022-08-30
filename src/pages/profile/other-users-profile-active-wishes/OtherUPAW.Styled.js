import { Container, Grid } from '@mantine/core';
import styled from "styled-components";

export const Body = styled.div`
    background: #E5E5E5;

    .col-one {
        padding-left: 114px;
        padding-right: 50px;
    }

    .main-grid {
        margin: 0px !important;
    }

    .main-tab {
        display: flex;
        border: 1px solid #bcbcbc;
        padding-left: 0px;
        width: 99.5%;
        border-radius: 9px;
    }

    .col-two-sect {
        max-width: 60.5%;
    }

    .anytabname {
        color: #160046;
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