import styled from "styled-components";



export const Seconddiv = styled.div`

    width: 450px;
    height: 46px;
    float: right;
    margin:-210px 25px 0 0;
    display: block;

    @media (max-width: 420px) {
        display: block;
    }
`;
export const Views = styled.p`

    width: 96px;
    height: 46px;
    float: left;
    text-align: start;
    font-size: 24px;
    font-weight: 600;

    @media (max-width: 420px) {
        display: none;
    }
`;
export const Lastdiv = styled.div`

    width: 450px;
    height: 56px;
    float: right;
    margin: 50px 20px 0 20px;
    display: block;
    background: #2D008D;
    border-radius: 8px;

    .star-card {
        @media (max-width: 420px) {
            margin: 8px 0px 0px 16px !important;
        }
    }

    @media (max-width: 420px) {
        width: 171px;
        height: 37px;
        float: right;
        margin: 155px -7px 0px 13px;
        display: block;
        background: #2D008D;
        border-radius: 8px;
    }

`;
export const Targets = styled.p`

    width: 170px;
    height: 20px;
    float: right;
    margin: 18px 16px 0 0;
    display: block;
    color: #EBE5F7;
    font-size: 14px;

    @media (max-width: 420px) {
        width: 100px;
        height: 20px;
        float: left;
        margin: 11px 0 0 13px;
        display: block;
        color: #00FF9E;
        font-size: 14px;
        display: none;
    }
`;
export const Raised = styled.p`

    width: 100px;
    height: 20px;
    float: left;
    margin: 18px 0 0 16px;
    display: block;
    color: #00FF9E;
    font-size: 14px;

    @media (max-width: 420px) {
        margin: 10px 0px 0px 16px;
    }
`;
export const CardSecond = styled.div`
    margin-top: 24px;
    width: 666px;
    height: 186px;
    background: white;
    border: 1px solid #EBE5F7;
    border-radius: 24px;
    @media(max-width: 480px){
        width: 343px;
        height: 240px;
        border-radius: 16px;
        margin: 16px 16px 0 16px;
    }
`;
export const Hood = styled.div`
    margin: 34px 0 0 33px;
    width: 600px;
    height: 24px;
    float: left;

    @media(max-width: 480px){
        width: 300px;
        height: 62px;
        border-radius: 16px;
        margin: 16px 16px 0 16px;
    }
`;
export const Parag = styled.p`

    width: auto;
    height: 20px;
    margin-top: 2px;
    margin-left: 6px;
    float: left;
    font-size: 14px;
    font-weight: 500;
    font-family: revert;
    text-align: start;
    @media (max-width: 420px) {
        display: none;
    }
`;
export const Photo = styled.img`

    width: 24px;
    height: 24px;
    margin-left: 6px;
    float: left;
    border-radius: 50%;
    @media(max-width: 480px){
        float: right;
    }
    `;
    export const Person = styled.p`

    width: auto;
    height: 20px;
    margin-top: 2px;
    margin-left: 6px;
    float: left;
    color:#0C0E19;
    font-size: 14px;
    font-weight: 600;

`;
export const Parags = styled.p`

    width: auto;
    height: 20px;
    margin-top: 2px;
    float: right;
    font-size: 14px;
    font-weight: 500;
    font-family: revert;

    @media(max-width: 480px){
        float: left;
        margin-top: 7px;
        margin-right: 43px;
        display: none;
    }
`;
export const Titles = styled.div`
    margin: 24px 0 0 33px;
    width: 600px;
    height: 24px;
    float: left;
    font-weight: 600;
    font-size: 20px;
    line-height: 140%;
    color: #1A1C29;
    @media(max-width: 480px){
        width: 290px;
        height: 24px;
        margin: 42px 16px 0 23px;
    }
`;
export const Third = styled.div`
    margin: 24px 0 0 27px;
    width: 606px;
    height: 24px;
    float: left;
    @media(max-width: 480px){
        width: 334px;
        height: 71px;
        border-radius: 16px;
        margin: 16px 16px 0 26px;
    }
`;
export const Pass = styled.a`
    margin-top: 2px;
    float: right;
    color: #3800B0;
    font-weight: 600;
    font-size: 12px;  

    @media(max-width: 480px){
        margin-right: 45px;
        margin-top: 40px; 
    }
`;
export const CardLonger = styled.div`
    margin-top: 24px;
    width: 98%;
    height: 520px;
    border: 1px solid #EBE5F7;
    border-radius: 24px;
    margin-bottom: 64px;
    @media(max-width: 480px){
        width: 343px;
        height: 144px;
        border-radius: 16px;
        margin: 16px 16px 0 16px;
    }
 
  
`;
export const NotWishes = styled.p`

    width: 510px;
    height: 48px;
    float: right;
    font-weight: 600;
    font-family: revert;
    margin : 64px 165px  0 165px;
    font-size: 40px;
    color: #6033C0;
`;
export const Buttons = styled.div`

    width: 326px;
    height: 56px;
    margin : 136px auto  0  auto;
`;
export const Buttonleft = styled.button`

    width: 150px;
    background: #3800B0;
    height: 56px;
    float: left;
    border-radius: 8px;
    text-align: center;
    color: white;
    font-size: 14px;
`;
export const Buttonright = styled.button`

    width: 150px;
    height: 56px;
    float: right;
    border-radius: 8px;
    text-align: center;
    color: #3800B0;
    border: 1px solid #3800B0;
    font-size: 14px;
`;
export const Glasses = styled.img`

    width: 262px;
    height: 240px;
    margin : 24px auto  0  auto;

`;

export const Division = styled.div`
    margin-top: 24px;
    width: 98%;
    height: 260px;
    border-radius: 24px;
    margin-bottom: 109px;
    @media(max-width: 480px){
        width: 343px;
        height: 144px;
        border-radius: 16px;
        margin: 16px 16px 0 16px;
    }
    .swiper {
        width: 840px;
        height: 200px;
      }
      
      .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        border-radius: 16px;

      
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }
     
  
`;
export const Maybe = styled.p`

      width: 840px;
      height: 29px;
      font-size: 24px;
      font-weight: 600;
      font-family: 'Steppe';
      text-align: start;
      margin-bottom:24px;

`
export const Picture = styled.img`

      width: 80px;
      height: 80px;
      text-align: start;
      margin:-96px 46px 0 11px;
      border-radius: 50%;
      display:block;
`
export const Name = styled.p`

      width:177px;
      height: 28px;
      font-size: 20px;
      font-weight: 600;
      font-family: 'Steppe';
      text-align: center;
      margin-top:24px;
      margin-bottom:4px;
      margin-left:-176px;
      display:block;
`
export const Tag  = styled.p`

      font-size: 14px;
      font-weight: 500;
      font-family: 'Steppe';
      text-align: center;
      margin-bottom:-74px;
      margin-left:-128px;

      display:block;
`

export const DisplayOnButtonText = styled.p`
    display: none;

    @media (max-width: 420px) {
        display: block;
        margin: -75px 1px 1px 162px;
        font-size: 11px;
    }
`

export const Paragraf = styled.p`

    width: auto;
    height: 20px;
    margin-top: 2px;
    margin-left: 6px;
    float: left;
    font-size: 14px;
    font-weight: 500;
    font-family: revert;
    text-align: start;
    @media(max-width: 480px){
        display: none;
    }
`;
export const Paragrap = styled.p`
    display: none;
    width: auto;
    height: 20px;
    margin-top: 2px;
    margin-left: 6px;
    float: left;
    font-size: 14px;
    font-weight: 500;
    display: none
    font-family: revert;
    text-align: start;

    @media (max-width: 480px){
        display: block;
        margin-top: 40px;
        margin-left: 7px;
    }
`;

export const DisplayTopText = styled.p`
    color: #0C0E19;
    font-size: 14px;
    display: none;

    @media (max-width: 420px) {
        display: block;
        margin-top: 5px;
    }
`

export const DisplayBirthdaytext = styled.p`
    display: none;

    @media (max-width: 420px) {
        color: grey;
        font-size: 13px;
        display: block;
        padding: 7px;
    }
`

export const DisplayTime = styled.p`
    display: none;

    @media (max-width: 420px) {
        display: block;
        font-size: 13px;
        color: grey;
        margin: -1px 6px;
    } 

`

export const DisplayTopImgCard = styled.div`
    margin-top: -60px !important;
`