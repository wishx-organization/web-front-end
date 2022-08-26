import { Grid, Container } from "@mantine/core";
import styled from "styled-components";

export const BlogPostSection = styled(Container) `
    text-align: center;


    .icon{
        width: 100% !important;
        height: 10px !important;
    }

    .rule-section p {
        font-size: 14px;
        color: grey;
        padding-top: 30px;
    }
    
    .main-txt h1 {
        font-size: 50px;
        font-weight: 600;
    }

    .mantine-Image-image {
        
    }

    .dot-main {
        font-size: 40px;
        margin: 2px;
    }

    .main-txt p {
        font-size: 13px;
        color: grey;
        padding-top: 10px;
    }

    .first-txt {
        text-align: start;
        width: 85%;
        padding-left: 181px;
    }

    .custom-txt {
        padding-top: 50px;
        width: 78%;
        text-align: start;
        padding-left: 180px;
    }

    .second-txt {
        text-align: start;
        width: 85%;
        padding-left: 181px;
        padding-top: 30px;
    }

    .colagrid {
        width: 82% !important;
        padding-left: 150px;
    }

    .finishing-touch {
        text-align: start;
        padding-left: 180px;
        font-size: 20px;
        padding-top: 10px;
        font-weight: 600;
    }
    .social-icons {
        display: flex;
        justify-content: center;
        gap: 30px;
        padding-right: 200px;
        padding-top: 20px;
        padding-bottom: 50px;
    }
}
`

export const OtherBlogPost = styled(Container) `
    max-width: 1180px !important;
    padding-bottom: 100px;
    
    .blogposttop-text {
        font-size: 35px;
        padding-top: 30px;
        padding-bottom: 50px;
        font-weight: 500;
        padding-left: 10px;
    }

    .date-category {
        color: grey;
        font-size: 13px;
        font-weight: 300;
    }
    
    .title-card {
        color: #0B0023;
        font-weight: 600;
        font-size: 25px;
    }

    .text-card {
        font-size: 14px;
        color: #110035;
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

export const BlogOtherCard = styled(Container) `

`

export const ColaImg = styled(Container) `
    .colapostimg {
        border: 0;
        padding-left: 50px;
        padding-top: 20px;
        border-radius: 25px !important;
        height: 300px !important;
        width: 95% !important; 
    }
`

export const LineImage = styled(Container)`
    .line-flex {
        display: flex;
    }
`

export const BottomSection = styled(Container) `

`