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

    @media (min-width: 1200px) and (max-width: 1700px) {
        width: 86.5%;
    }

    @media (max-width: 420px) {
        overflow: scroll;
        width: 182%;    
    }

    .tabname:focus {
        background: black;
    }

    .btn-section tab:focus {
        background: black;
    }


}

.btn-sectiondesctop {
    display: flex;
    width: 56.5%;
    border: 1px solid #8f75bc;
    border-radius: 9px;

    @media (min-width: 1200px) and (max-width: 1235px) {
        width: 53%; 
    }

    @media (min-width: 1235px) and (max-width: 1300px) {
        width: 53.8%; 
    }

    @media (min-width: 1300px) and (max-width: 1350px) {
        width: 54.3%; 
    }

    @media (min-width: 1350px) and (max-width: 1400px) {
        width: 54.8%; 
    }

    @media (min-width: 1400px) and (max-width: 1415px) {
        width: 55%; 
    }

    @media (min-width: 1400px) and (max-width: 1500px) {
        width: 55%; 
    }

    @media (min-width: 1550px) and (max-width: 1600px) {
        width: 57%; 
    }

    @media (min-width: 1600px) and (max-width: 1650px) {
        width: 58%; 
    }

    @media (min-width: 1650px) and (max-width: 1700px) {
        width: 58.5%; 
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

    @media (min-width: 1200px) and (max-width: 1300px) {
        margin: -172px 142px 0 35px;
        width: 320px;
    }

    @media (min-width: 1300px) and (max-width: 1400px) {
        margin: -173px 52px 0 35px;
        width: 415px;
    }

    @media (min-width: 1400px) and (max-width: 1500px) {
        margin: -173px 53px 0 35px;
        width: 412px;
    }

    @media (min-width: 1500px) and (max-width: 1600px) {
        margin: -173px 33px 0 35px;
        width: 411px;
    }

    @media (min-width: 1600px) and (max-width: 1700px) {
        margin: -173px -37px 0 35px;
        width: 455px;
    }
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

    @media (min-width: 375px) and (max-width: 385px) {
        margin: 4px 35px 0 -61px;
    }

    @media (min-width: 385px) and (max-width: 400px) {
        margin: 4px 45px 0 -61px;
    }

    @media (min-width: 400px) and (max-width: 420px) {
        margin: 4px 60px 0 -61px;
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
    width: 55%;
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

       @media (min-width: 375px) and (max-width: 377px) {
        margin: -48px 26px 0 0;
       }
       @media (min-width: 377px) and (max-width: 379px) {
        margin: -48px 27px 0 0;
       }
       @media (min-width: 379px) and (max-width: 381px) {
        margin: -48px 30px 0 0;
       }
       @media (min-width: 381px) and (max-width: 383px) {
        margin: -48px 32px 0 0;
       }
       @media (min-width: 383px) and (max-width: 385px) {
        margin: -48px 34px 0 0;
       }
       @media (min-width: 385px) and (max-width: 387px) {
        margin: -48px 36px 0 0;
       }
       @media (min-width: 387px) and (max-width: 389px) {
        margin: -48px 38px 0 0;
       }
       @media (min-width: 389px) and (max-width: 391px) {
        margin: -48px 40px 0 0;
       }
       @media (min-width: 391px) and (max-width: 393px) {
        margin: -48px 42px 0 0;
       }
       @media (min-width: 393px) and (max-width: 395px) {
        margin: -48px 44px 0 0;
       }
       @media (min-width: 395px) and (max-width: 397px) {
        margin: -48px 46px 0 0;
       }
       @media (min-width: 397px) and (max-width: 399px) {
        margin: -48px 49px 0 0;
       }
       @media (min-width: 399px) and (max-width: 401px) {
        margin: -48px 50px 0 0;
       }
       @media (min-width: 401px) and (max-width: 403px) {
        margin: -48px 52px 0 0;
       }
       @media (min-width: 403px) and (max-width: 405px) {
        margin: -48px 53px 0 0;
       }
       @media (min-width: 405px) and (max-width: 407px) {
        margin: -48px 55px 0 0;
       }
       @media (min-width: 407px) and (max-width: 409px) {
        margin: -48px 57px 0 0;
       }
       @media (min-width: 409px) and (max-width: 411px) {
        margin: -48px 59px 0 0;
       }
       @media (min-width: 411px) and (max-width: 413px) {
        margin: -48px 61px 0 0;
       }
       @media (min-width: 413px) and (max-width: 415px) {
        margin: -48px 63px 0 0;
       }
       @media (min-width: 415px) and (max-width: 417px) {
        margin: -48px 65px 0 0;
       }
       @media (min-width: 417px) and (max-width: 420px) {
        margin: -48px 67px 0 0;
       }

       @media (min-width: 1200px) and (max-width: 1300px) {
        margin: -172px 142px 0 35px;
        width: 320px;
       }

       
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

    .com-cont {
        @media (min-width: 1200px) and (max-width: 1700px) {
            width: 800px;
        }

    
    }

    .cont-text {
        @media (min-width: 1200px) and (max-width: 1700px) {
            width: 800px;
        }
    }

    @media (min-width: 375px) and (max-width: 420px) {
        width: 153%;
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

    @media (min-width: 1200px) and (max-width: 1300px) {
        margin: -271px 0 0 336px;
        font-size: 17px;
    }


    @media (min-width: 1300px) and (max-width: 1500px) {
        margin: -271px -24px 0 330px;
        font-size: 21px;
    }

    @media (min-width: 1500px) and (max-width: 1600px) {
        font-size: 23px;
    }

    @media (min-width: 1600px) and (max-width: 1700px) {
        margin: -271px 0 0 378px;
    }

       @media (min-width: 375px) and (max-width: 377px) {
        margin: -146px 26px 0 0;
       }
       @media (min-width: 377px) and (max-width: 379px) {
        margin: -146px 27px 0 0;
       }
       @media (min-width: 379px) and (max-width: 381px) {
        margin: -146px 30px 0 0;
       }
       @media (min-width: 381px) and (max-width: 383px) {
        margin: -146px 32px 0 0;
       }
       @media (min-width: 383px) and (max-width: 385px) {
        margin: -146px 34px 0 0;
       }
       @media (min-width: 385px) and (max-width: 387px) {
        margin: -146px 36px 0 0;
       }
       @media (min-width: 387px) and (max-width: 389px) {
        margin: -146px 38px 0 0;
       }
       @media (min-width: 389px) and (max-width: 391px) {
        margin: -146px 40px 0 0;
       }
       @media (min-width: 391px) and (max-width: 393px) {
        margin: -146px 42px 0 0;
       }
       @media (min-width: 393px) and (max-width: 395px) {
        margin: -146px 44px 0 0;
       }
       @media (min-width: 395px) and (max-width: 397px) {
        margin: -146px 46px 0 0;
       }
       @media (min-width: 397px) and (max-width: 399px) {
        margin: -146px 49px 0 0;
       }
       @media (min-width: 399px) and (max-width: 401px) {
        margin: -146px 50px 0 0;
       }
       @media (min-width: 401px) and (max-width: 403px) {
        margin: -146px 52px 0 0;
       }
       @media (min-width: 403px) and (max-width: 405px) {
        margin: -146px 53px 0 0;
       }
       @media (min-width: 405px) and (max-width: 407px) {
        margin: -146px 55px 0 0;
       }
       @media (min-width: 407px) and (max-width: 409px) {
        margin: -146px 57px 0 0;
       }
       @media (min-width: 409px) and (max-width: 411px) {
        margin: -146px 59px 0 0;
       }
       @media (min-width: 411px) and (max-width: 413px) {
        margin: -146px 61px 0 0;
       }
       @media (min-width: 413px) and (max-width: 415px) {
        margin: -146px 63px 0 0;
       }
       @media (min-width: 415px) and (max-width: 417px) {
        margin: -146px 65px 0 0;
       }
       @media (min-width: 417px) and (max-width: 420px) {
        margin: -146px 67px 0 0;
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

    @media (min-width: 1200px) and (max-width: 1300px) {
        margin: -203px 24px 0 40px;
    }

    @media (min-width: 1300px) and (max-width: 1400px) {
        margin: -203px 29px 0 40px;
    }

    @media (min-width: 1400px) and (max-width: 1500px) {
        margin: -203px 28px 0 40px;
    }

    @media(min-width: 1500px) and (max-width: 1600px){
        margin: -203px 6px 0 40px;
    }

    @media(min-width: 1500px) and (max-width: 1600px){
        margin: -203px 6px 0 40px;
    }

    @media(min-width: 1600px) and (max-width: 1700px){
        margin: -203px -21px 0 40px;
    }


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

    @media (min-width: 1200px) and (max-width: 1300px) {
        width: 307px;
    }

    @media (min-width: 1300px) and (max-width: 1400px) {
        margin: -20px 40px 0 16px;
        width: 400px;
    }
    
    @media (min-width: 1400px) and (max-width: 1500px) {
        width: 398px;
    }

    @media (min-width: 1500px) and (max-width: 1600px) {
        width: 394px;
    }

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

    @media (min-width: 1200px) and (max-width: 1300px) {
        margin: -155px 25px 0 263px;
    }

    @media (min-width: 1300px) and (max-width: 1400px) {
        margin: -154px 28px 0 40px;
    }

    @media (min-width: 1400px) and (max-width: 1500px) {
        margin: -154px 27px 0 40px;
    }

    @media (min-width: 1500px) and (max-width: 1600px) {
        margin: -154px 7px 0 40px;
    }

    @media (min-width: 1600px) and (max-width: 1700px) {
        margin: -154px -22px 0 40px;
    }

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

    @media (min-width: 1200px) and (max-width: 1300px) {
        width: 310px;
    }

    @media (min-width: 1300px) and (max-width: 1400px) {
        margin: -23px 47px 0 16px;
        width: 400px;
    }  

    @media (min-width: 1400px) and (max-width: 1500px) {
        width: 396px;
    }

    @media (min-width: 1500px) and (max-width: 1600px) {
        width: 397px;
    }
    
`;
export const LastDiv = styled.div`
  
    width: 440px;
    height: 56px;
    float: right;
    border-radius: 8px;
    margin: -108px 88px 0 35px;

    @media (min-width: 1200px) and (max-width: 1350px) {
        display: flex;
        justify-content: center;
        padding-left: 40px;
    }

    @media (min-width: 1350px) and (max-width: 1400px) {
        padding-left: 183px;
    }

    @media (min-width: 1400px) and (max-width: 1500px) {
        margin: -108px 27px 0 35px;
    } 
    
    @media (min-width: 1500px) and (max-width: 1600px) {
        margin: -108px 5px 0 35px;
    } 

    @media (min-width: 1600px) and (max-width: 1700px) {
        margin: -108px -18px 0 35px;
    } 

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

    @media (min-width: 1200px) and (max-width: 1400px) {
        display: none;
    }
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
        margin-left: -116px;
        margin-top: -76px;
        width: 358px;

    }

    @media (min-width: 375px) and (max-width:378px) {
        width: 346px;
        margin-left: -117px;
        margin-top: -76px;
        height: 355px;
    }

    @media (min-width: 378px) and (max-width:380px) {
        width: 349px;
        margin-left: -117px;
        margin-top: -76px;
        height: 355px;
    }

    @media (min-width: 380px) and (max-width:385px) {
        width: 351px;
        margin-left: -117px;
        margin-top: -76px;
        height: 355px;
    }

    @media (min-width: 382px) and (max-width:385px) {
        width: 354px;
        margin-left: -117px;
        margin-top: -76px;
        height: 355px;
    }

    @media (min-width: 385px) and (max-width:388px) {
        width: 358px;
        margin-left: -117px;
        margin-top: -76px;
        height: 355px;
    }

    @media (min-width: 390px) and (max-width:393px) {
        width: 362px;
        margin-left: -117px;
        margin-top: -76px;
        height: 355px;
    }

    @media (min-width: 393px) and (max-width:396px) {
        width: 366px;
        margin-left: -117px;
        margin-top: -76px;
        height: 355px;
    }

    @media (min-width: 397px) and (max-width:400px) {
        width: 370px;
        margin-left: -117px;
        margin-top: -76px;
        height: 355px;
    }

    @media (min-width: 401px) and (max-width:406px) {
        width: 375px;
        margin-left: -117px;
        margin-top: -76px;
        height: 355px;
    }

    @media (min-width: 406px) and (max-width:410px) {
        width: 380px;
        margin-left: -117px;
        margin-top: -76px;
        height: 355px;
    }

    @media (min-width: 410px) and (max-width:415px) {
        width: 383px;
        margin-left: -117px;
        margin-top: -76px;
        height: 400px;
    }

    @media (min-width: 415px) and (max-width:421px) {
        width: 388px;
        margin-left: -117px;
        margin-top: -76px;
        height: 355px;
    }
    
    @media (min-width: 1200px) and (max-width: 1300px) {
        margin-left: -173px;
        margin-top: -290px;
    }

    @media (min-width: 1300px) and (max-width: 1400px) {
        margin-top: -290px;
        margin-left: -110px;
    }

    @media (min-width: 1400px) and (max-width: 1500px) {
        margin-top: -290px;
        margin-left: -60px;
    }

    @media (min-width: 1500px) and (max-width: 1600px) {
        margin-top: -290px;
        margin-left: -10px;
    }

    @media (min-width: 1600px) and (max-width: 1675px) {
        margin-top: -290px;
        margin-left: 27px;
    }

    @media (min-width: 1675px) and (max-width: 1725px) {
        margin-top: -290px;
        margin-left: 50px;
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
            width: 83%;
            padding-top: 20px;
            padding-bottom: 10px;
            padding-left: 132px;
            padding-right: 51px;
            text-align: center;
            margin-top: -50px;
            display: inline-table;

        }

        @media (min-width: 389px) and (max-width: 400px) {
            width: 80%;
        }

        @media (min-width: 401px) and (max-width: 410px) {
            width: 78%;
        }

        @media (min-width: 410px) and (max-width: 421px) {
            width: 76%;
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

    @media (max-width: 420px) {
        margin-left: 35px;
    }

    @media (min-width: 414px) and (max-width: 420px) {
        margin-top: -40px;
    }
`;

export const TagName = styled.p `
    max-width: 290px;
    text-align: center;
    font-weight: 600;
    font-size: 14px;

    @media (max-width: 420px) {
        margin-left:22px;
    }
`;

export const Text = styled.p`
    max-width: 290px;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    margin-top: 12px;

    @media (max-width: 420px) {
        padding-bottom: 15px;
        margin-left: 25px;
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
        width: 130px;
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

    @media (max-width: 420px) {
        display: flex;
        padding-top: 7px;
        padding-left: 100px;
    }
`;

export const UserDesc = styled.p`
    display: none;

    @media  (max-width:450px) {
        display: block;
        margin-top: -74px;
        margin-left: 159px;
        font-size: 12px;
    }

    @media (min-width: 375px) and (max-width: 420px) {
        margin-left: 164px;
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

    @media (min-width: 375px) and (max-width: 420px) {
        margin-left: 164px;
    }
`

export const LeftPrice = styled.p`

`

export const RightPrice = styled.p`

`

export const MenuScrollCards = styled.div`
    display: flex;
    width: 153%;

    @media (min-width: 1200px) and (max-width: 1700px) {
        width: 100%;
    }
  
`
export const MenuScrollCardsDesktop = styled.div`
    display: flex;
    width: 153%;
    justify-content: end;
    margin-left: -288px;
    padding-top: 27px;

    @media (min-width: 1200px) and (max-width: 1300px) {
        margin-left: -413px;
    }

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
    width: 300px;
    margin: 0px 16px 3px 7px;
    display: none;

    @media (max-width: 420px) {
        display: flex;
        margin-left: 20px;

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
            margin: 14px 15px 14px -5px;
            border: 2px solid #8f75bc;
            border-radius: 25px;
            padding: 9px;
            overflow: visible;
        }

        .mobile-btn {
            margin: 12px 7px 12px 11px;
            width: 130px;
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
    max-width: 84%;
    padding-bottom: 10px;
    
    .rainbow {
        border-radius: 15px !important;
    }

    .rainbow {
        @media (min-width: 414px) and (max-width: 420px) {
            height: 224px !important;
            width: 388px;
            margin-left: -34px;
        }
    }

    body { 
        
    }
`