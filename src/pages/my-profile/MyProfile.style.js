import { Container, Grid } from '@mantine/core';
import styled from "styled-components";

export const Body = styled.div`
background: #E5E5E5;

.rainbow {
    @media (min-width: 375px) and (max-width: 420px) {
        height: 200px !important;
    }
}

.firsttabname {
    margin-right:110px;
}

.col-one {
    padding-left: 195px;
}

.main-grid {
    margin: 0px !important;
}

.main-tab {
    display: flex;
    border: 2px solid hwb(261 75% 16%);
    padding-left: 0px;
    width: 87%;
    border-radius: 9px;
    background: #FFFFFF;
}

.tab-classes {
    display: flex;
}

.btn-section {
    display: flex;
    width: 56.5%;
    border: 1px solid #8f75bc;
    border-radius: 9px;

    @media (max-width: 420px) {
        overflow: scroll;
        width: 182%;    
    }
}




.tabname {
    width: 39.3%;
    color: #160046;
    padding: 5px 0px;
    text-align: center;
    cursor: pointer;
    margin: 0px 16px;
    
}

.tabname:focus {
    background: #EBE5F7;
    border: 1px solid #3800B0;
    color: #3800B0;
}



.react-tabs__tab--selected{
    
    color: #3800B0;
    border: 2px solid #3800B0;
    padding: 11px 0;
    text-align: center;
    cursor: pointer;
    border-radius: 8px;
    height: 47px;
    background: #EBE5F7;
    width: 33.3%;
}
.mantine-Slider-bar{
    background: #3800B0;
}
.loading{
    width: 440px;
    font-size: 4px;
    float: right;
    margin: 0;
    margin: -173px 40px 0 35px;
}
.mantine-vl2f9f{
    height: 4px;
}
.mantine-d21okt::before {
    height: 4px;
}
.Facebook{
    float: right;
    margin-right: 150px;
    color: #2D008D;
    font-size: 23px;
}
.twitter{
    float: right;
    margin-right: 120px;
    color: #2D008D;
    font-size: 23px;
    margin-top: -25px;
}
.telegram{
    float: right;
    margin-right: 90px;
    color: #2D008D;
    font-size: 23px;
    margin-top: -25px;
}
.whatsapp{
    float: right;
    margin-right: 60px;
    color: #2D008D;
    font-size: 23px;
    margin-top: -25px;
}
.mail{
    float: right;
    margin-right: 30px;
    color: #2D008D;
    margin-top: -25px;
    font-size: 23px;
}
.link{
    float: right;
    margin-right: 0px;
    color: #2D008D;
    font-size: 23px;
    margin-top: -25px;
}
.bluechek{
    color: blue;
    font-size: 16px;
    float: right;
    margin: 4px 17px 0 -30px;

    @media (min-width: 375px) and (max-width: 420px) {
        margin: 4px 25px 0 -42px;
    }
}
@media ( max-width: 480px){
    
.col-one {
        padding-left: 132px;
    }   
.main-tab {
    display: flex;
    border: 2px solid hwb(261 75% 16%);
    padding-left: 0px;
    width: 100%;
    border-radius: 9px;
    background: #FFFFFF;
    owerflow: scroll;

}


.tabname {
    width: 53.3%;
    color: #160046;
    padding: 11px 22px;
    text-align: center;
    cursor: pointer;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-left: 0px;
    -webkit-flex: none;
    -ms-flex: none;
    flex: none;
}

.tabname:focus {
    background: #EBE5F7;
    border: 1px solid #3800B0;
    color: #3800B0;
}

.tabname2 {
    width: 53.3%;
    color: #160046;
    padding: 11px 0px;
    text-align: center;
    cursor: pointer;
    margin-left: -17px;
    flex: none;
    display: none;

    @media (max-width: 420px) {
        display: block;
    }
}
.react-tabs__tab--selected{
    
    color: #3800B0;
    border: 2px solid #3800B0;
    padding: 11px 0;
    text-align: center;
    cursor: pointer;
    border-radius: 8px;
    height: 47px;
    background: #EBE5F7;
    width: 33.3%;
}
    .loading{
       width: 167px;
       height: 4px;
       float: right;
       margin: -46px 16px 0 0;
    }
    .Facebook{
        float: right;
        margin-right: 150px;
        color: #2D008D;
        font-size: 23px;
    }
    .twitter{
        float: right;
        margin-right: 120px;
        color: #2D008D;
        font-size: 23px;
        margin-top: -25px;
    }
    .telegram{
        float: right;
        margin-right: 90px;
        color: #2D008D;
        font-size: 23px;
        margin-top: -25px;
    }
    .whatsapp{
       display: none; 
    }
    .mail{
        display: none;
    }
    .link{
       display: none;
    }
    
    .mantine-vl2f9f{
        height: 4px;
        width: 75px;
    }
    .mantine-d21okt::before {
        height: 4px;
        width: 167px;
        position: absolute;
    }
}
`;


export const CardLong = styled.div`
    margin-top: 24px;
    width: 87%;
    height: 321px;
    background: white;
    border: 1px solid #EBE5F7;
    border-radius: 24px;
    @media(max-width: 480px){
        width: 350px;
        height: 144px;
        border-radius: 16px;
        margin: 16px 16px 0 -2px;
    }
`;

export const Imagess = styled.img`

    border-radius: 24px;
    height: 321px;
    width: 321px;
    @media(max-width: 480px){
        width: 144px;
        height: 144px;
        border-radius: 16px;

    }
`;

export const Title = styled.p`

    height: 29px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 120%;
    display: flex;
    align-items: flex-end;
    font-feature-settings: 'liga' off;
    color: #110035;
    float: left;
    margin: -271px 0 0 349px;
    @media(max-width: 480px){
        width: 170px;
        height: 46px;
        border-radius: 16px;
        font-size: 14px;
        margin: -144px 16px 0 0;
        float: right;
        text-align: start;
    }
`;
export const TargetFinal = styled.p`

    height: 22px;
    font-family: system-ui;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #110035;
    width: 440px;
    float: right;
    margin: 0;
    margin: -203px 87px 0 40px;
    @media(max-width: 480px){
        display: none;
    }
`;
export const Target = styled.p`

    height: 22px;
    font-family: system-ui;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #110035;
    opacity: 0.72;
    width: 440px;
    text-align: start;
    margin: 0;
    // margin: -203px 40px 0 40px;
    @media(max-width: 480px){
        display: none;
    }
`;
export const Final = styled.p`

    height: 22px;
    font-family: system-ui;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #110035;
    opacity: 0.72;
    width: 440px;
    margin: 0;
    text-align: end;
    margin: -20px 40px 0 16px;
    @media(max-width:480px){
        display: none;
    }
`;

export const Price = styled.p`

    height: 22px;
    font-family: system-ui;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #110035;
    width: 440px;
    float: right;
    margin: 0;
    margin: -154px 88px 0 40px;
    @media(max-width:480px){
        display: none;
    }
`;

export const Firstprice = styled.p`

    height: 22px;
    font-family: system-ui;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #110035;
    opacity: 0.72;
    width: 440px;
    text-align: start;
    margin: 0;
    // margin: -203px 40px 0 40px;
`;
export const Lastprice = styled.p`

    height: 22px;
    font-family: system-ui;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #110035;
    opacity: 0.72;
    width: 440px;
    margin: 0;
    text-align: end;
    margin: -20px 40px 0 16px;
    
`;
export const LastDiv = styled.div`
  
    width: 440px;
    height: 56px;
    float: right;
    border-radius: 8px;
    margin: -108px 88px 0 35px;
    @media(max-width: 480px){
       display: none;
    }

`;
export const SosialN = styled.div`
  
    width: 270px;
    height: 56px;
    float: left;
    background: #F7F8FA;
    border: 1px solid #EBE5F7;
    border-radius: 8px;
    padding: 18px;
`;
export const Edit = styled.div`
  
    
    float: left;
    border: 1px solid #3800B0;
    border-radius: 8px;
    padding:16px 18px;
    font-size: 14px;
    font-family: sans-serif;
    color: #3800B0;
    font-weight: 600;
`;
export const Details = styled.div`
  
    
    float: left;
    background:#3800B0;
    border-radius: 8px;
    padding:16.5px 20px;
    font-size: 14px;
    font-family: 'Steppe';
    color: white;
    font-weight: 600;
    letter-spacing: 1px;
    margin-left: 9px;
`;
export const LeftSection = styled(Container)`
    background: white;
    border-radius: 20px;
    margin-left: -46px;
    width: 307px;
    margin-top: -317px;
    position: sticky;
    top:0;

    @media (min-width: 375px) and (max-width:420px) {
        margin-left: -91px;
        margin-top: -76px;
    }


    .tomcruse {
        width: 85%;
        padding-top: 20px;
        padding-bottom: 10px;
        padding-left: 100px;
        padding-right: 45px;
        text-align: center;

        @media (max-width: 500px) {
            display: none;
        }
    }

    #tomcrusemobile {
        display: none;
        @media (max-width: 500px) {
            width: 85%;
            padding-top: 20px;
            padding-bottom: 10px;
            padding-left: 100px;
            padding-right: 45px;
            text-align: center;
            margin-top: -50px;
            display:inline-table;

        }
    }
`

export const Namesurname = styled.h1`
    max-width: 290px;
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    padding-bottom: 10px;
    margin-right: 30px;
`;

export const TagName = styled.p `
    max-width: 290px;
    text-align: center;
    font-weight: 600;
    font-size: 14px;
`;
export const Text = styled.p`
    max-width: 290px;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    margin-top: 12px;

    @media (max-width: 420px) {
        padding-bottom: 15px;
    }

`;
export const DateSection = styled.div `
    background: #F7F8FA;
    padding-top: 20px;
    padding-bottom: 1px;
    border-radius: 10px;
    margin: 0px 10px;
    height: 72px;
    width: 257px;
    margin: 0px 24px 0 9px;

    @media (max-width: 420px) {
        display: none;
    }
`;

export const Date = styled.h4`
    font-size: 16px;
    text-align: center;
    font-weight: 600;

    @media (max-width: 420px) {
        font-size: 11px;
        width: 98px;
        margin-left: 16px;
        margin-top: 6px;
    }
`;

export const DateText = styled.p`
    font-size: 12px;
    font-weight: 600;
    text-align: center;

    @media (max-width: 420px) {
        color: grey;
    }
`;

export const FollowersSection = styled.div`

    background: #F7F8FA;
    padding-top: 20px;
    padding-bottom: 1px;
    border-radius: 10px;
    margin: 0px 10px;
    height: 72px;
    width: 257px;
    margin: 0px 24px 0 9px;
    margin-top: 12px;

    @media (max-width: 420px) {
        display: none;
    }
`;

export const Follower = styled.p`
    font-weight: 600;
    float: left;
    width: 128.5px;
    text-align: center;

    @media (max-width: 420px) {
        font-size: 11px;
        margin-left: 8px;
    }

`;

export const Following = styled.p`
    font-weight: 600;
    float: right;
    width: 128.5px;
    text-align: center;

    @media (max-width: 420px) {
        font-size: 11px;
    }
`;

export const SocialSection = styled.div`

    background: #F7F8FA;
    padding-top: 20px;
    padding-bottom: 1px;
    border-radius: 10px;
    margin: 0px 10px;
    height: 57px;
    width: 257px;
    margin: 0px 24px 0 9px;
    margin-top: 12px;

    @media (max-width: 420px) {
        display: none;
    }

`;
export const ButtonSection = styled.div`


    .second-btn {
        margin: 12px 7px 12px 11px;
        width: 257px;
        background: #FFFFFF;
        border: 1px solid #8f75bc;
        border-radius: 8px;
        color: #3800B0;
        height: 56px;

        @media (max-width: 420px) {
            display: none;
        }
    }
`;

export const Joined = styled.p `
    max-width: 290px;
    text-align: center;
    font-weight: 600;
    font-size: 13px;
    color: #5D627D;
    padding-bottom: 24px;
`;

export const UserDesc = styled.p`
    display: none;

    @media (max-width:450px) {
        display: block;
        margin-top: -74px;
        margin-left: 159px;
        font-size: 12px;
    }
`

export const LeftRightPriceDisplay = styled.div`
    display: none;
    gap: 50px;
    margin-left: 159px;
    padding-top: 20px;
    font-size: 10px;

    @media (max-width: 500px) {
        display: flex;
    }
`

export const LeftPrice = styled.p`
`

export const RightPrice = styled.p`

`

export const MenuScrollCards = styled.div`
    display: flex;
    width: 153%;
`

export const ButtonOne = styled.button`
`
export const ButtonTwo = styled.button`
`
export const ButtonThree = styled.button`
`

export const DisplayDateBirthaySection = styled.div`
    background: #F7F8FA;
    padding-top: 20px;
    padding-bottom: 1px;
    border-radius: 10px;
    margin: 0px 10px;
    height: 70px;
    width: 260px;
    margin: 0px 16px 3px 7px;
    display: none;

    @media (max-width: 420px) {
        display: flex;

    }
`

export const MobileBtnSection = styled.div`
    display: none;

    @media (max-width: 420px) {
        display: flex;
        overflow: scroll;

        .fb-icon {
            font-size: 46px !important;
            margin: 14px 15px 5px 10px;
            border: 2px solid #8f75bc;
            border-radius: 25px;
            padding: 9px;
            overflow: visible;
        }

        .insta-icon {
            font-size: 46px !important;
            margin: 14px 15px 5px -5px;
            border: 2px solid #8f75bc;
            border-radius: 25px;
            padding: 9px;
            overflow: visible;
        }

        .mobile-btn {
            margin: 12px 7px 12px 11px;
            width: 118px;
            background: #FFFFFF;
            border: 1px solid #8f75bc;
            border-radius: 8px;
            color: #3800B0;
            height: 50px;
        }
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