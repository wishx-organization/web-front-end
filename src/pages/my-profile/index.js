import { Container, Grid, Image, Button, Slider } from '@mantine/core';
import React from "react";
import { Body, ButtonSection, DateSection, LeftSection, CardLong, FollowersSection, Follower, Following, Details, Edit, Final, Date, DateText, Text, TagName, Firstprice, Namesurname, Imagess, LastDiv, Lastprice, Price, SosialN, Target, TargetFinal, Title, SocialSection, Joined, UserDesc, LeftRightPriceDisplay, LeftPrice, RightPrice, MenuScrollCards, DisplayDateBirthaySection, MobileBtnSection, FotoSection } from './MyProfile.style'
import estetika from '../../style/icons/estetika.png'
import tomcruse from '../../style/icons/tomcruse.png'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Carddata } from './CardData';
import { BsFacebook, BsTwitter, BsWhatsapp, BsInstagram, BsTelegram } from 'react-icons/bs';
import { FaTelegram } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';
import { RiLinksFill } from 'react-icons/ri';
import { HiBadgeCheck, HiArrowNarrowRight, HiArrowNarrowLeft } from 'react-icons/hi';
import { Lastdiv, Seconddiv, Views, Targets, Raised, CardSecond, Hood, Parag, Photo, Person, Parags, Titles, Third, Pass, CardLonger, NotWishes, Division, Maybe, Picture, Name, Tag, Buttons, Buttonleft, Buttonright, Glasses, DisplayOnButtonText, DisplayUsernameText, DisplayBirthdaytext, DisplayTime, DisplayTitle, DisplayTextToTheWish, DisplayCountLike, DisplayButtonTheWish, Paragraf, Paragrap, DisplayTopText, DisplayTopImgCard } from './MyprofilSecond.style';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import file1 from "../../style/icons/file1.png"
import { Component } from 'react';

class MyProfile extends Component {
    constructor(props) {
        super(props)
        this.state = { matches: window.matchMedia("(min-width: 500px)").matches };
    }
    componentDidMount() {
        const handler = e => this.setState({matches: e.matches});
        window.matchMedia("(min-width: 500px)").addEventListener('change', handler);
    }

    render() {
        return (
                <Body>
                    <FotoSection fluid>
                    {this.state.matches && <Image id='rainbow' radius="lg" className='rainbow' src={estetika} height={300} />}
                    {!this.state.matches && <Image id='rainbow' radius="lg" className='rainbow' src={estetika} height={200} />}
                        
                    </FotoSection>
                    <Grid className='main-grid'>
                        <Grid.Col className='col-one' span={4}>
                            <LeftSection>
                                <DisplayTopImgCard>
                                    <Image radius="100px" style={{border: '3px solid white !important;'}} id='tomcrusemobile' className="tomcrusemobile" height={85} src={tomcruse} />
                                </DisplayTopImgCard>
                                
                                <Image radius="100px" className="tomcruse" height={85} src={tomcruse} />
                                <Namesurname>Ilya Davidov<HiBadgeCheck className='bluechek' /></Namesurname>
                                <TagName>@ cucuruz</TagName>
                                <Text>Spec, Child, Chaos and Shadow</Text>
    
                                <DateSection>
                                    <Date>5 November 1992</Date>
                                    <DateText>Birthdate</DateText>
                                </DateSection>
                                <DisplayDateBirthaySection>
                                    <Date>5 Nov 1992 <DateText>Birthdate</DateText></Date>
                                    <Follower>144 <DateText>followers</DateText></Follower>
                                    <Following>156 <DateText>followings</DateText></Following>
                                </DisplayDateBirthaySection>
                                <FollowersSection>
                                    <Follower>144 <br /> <span style={{ fontSize: "12px" }}>followers</span></Follower>
                                    <Following>156 <br /> <span style={{ fontSize: "12px" }}>followings</span></Following>
                                </FollowersSection>
                                <SocialSection>
                                    <BsFacebook style={{ float: "left", color: "#2D008D", fontSize: "23px", margin: "0 0 0 94px" }} />
                                    <BsInstagram style={{ float: "right", color: "#2D008D", fontSize: "23px", margin: "0 94px 0 0" }} />
                                </SocialSection>
                                <ButtonSection>
                                    <Button className='second-btn'>Edit</Button>
                                </ButtonSection>
                                <MobileBtnSection>
                                    <Button className='mobile-btn'>Edit profile</Button>
                                    <BsFacebook className='fb-icon' style={{ color: "#2D008D", fontSize: "23px" }} />
                                    <BsInstagram className='insta-icon' style={{ color: "#2D008D", fontSize: "23px" }} />
                                    <BsTelegram className='insta-icon' style={{ color: "#2D008D", fontSize: "23px" }} />
                                </MobileBtnSection>
                                <Joined>Joined November 2021</Joined>
                            </LeftSection>
                        </Grid.Col>
                        <Grid.Col span={8}>
                            <Tabs defaultValue="com">
                                <MenuScrollCards>
                                    <div className='btn-section'>
                                        <Tab value="act" id='firsttabname' className="tabname">Active wishes <span style={{ color: "gray", fontFamily: "sans-serif", marginLeft: "8px" }}>4</span></Tab>
                                        <Tab variant='button' className="tabname" value="com" >Complete wishes <span style={{ color: "gray", fontFamily: "sans-serif", marginLeft: "8px" }}>4</span></Tab>
                                        <Tab value="con" className="tabname">Congratulations <span style={{ color: "gray", fontFamily: "sans-serif", marginLeft: "8px" }}>6</span></Tab>
                                    </div>
                                </MenuScrollCards>
                                {/* <MenuScrollCards className="main-tab">
                                    <div className='tab-classes'>
                                        <Tab value="act" id='firsttabname' className="tabname">Active wishes <span style={{ color: "gray", fontFamily: "sans-serif", marginLeft: "8px" }}>4</span></Tab>
                                        <Tab value="com" className="tabname">Complete wishes<span style={{ color: "gray", fontFamily: "sans-serif", marginLeft: "8px" }}>4</span></Tab>
                                        <Tab value="con" className="tabname">Congratulations<span style={{ color: "gray", fontFamily: "sans-serif", marginLeft: "8px" }}>6</span></Tab>
                                    </div>
                                </MenuScrollCards> */}
                                <TabPanel value="act">
                                    {
                                        (Carddata.data) ? (Carddata.data.map((index) => (
    
                                            <CardLong id={index.id}>
                                                <Imagess src={index.url} />
                                                <Title>{index.title}</Title>
                                                <TargetFinal><Target>Target: $10000</Target><Final>Final: 25.10.2022</Final></TargetFinal>
                                                <UserDesc>{index.userdesc}</UserDesc>
                                                <Slider className='loading' defaultValue={17} disabled />
                                                <LeftRightPriceDisplay>
                                                    <LeftPrice>{index.leftprice}</LeftPrice>
                                                    <RightPrice>{index.rightprice}</RightPrice>
                                                </LeftRightPriceDisplay>
                                                <Price><Firstprice>{index.leftprice}</Firstprice><Lastprice>{index.rightprice}</Lastprice></Price>
                                                <LastDiv>
                                                    <SosialN>Share
                                                        <a href='#'>
                                                            <BsFacebook className='Facebook' />
                                                        </a>
                                                        <a href='#'>
                                                            <BsTwitter className='twitter' />
                                                        </a>
                                                        <a href='#'>
                                                            <FaTelegram className='telegram' />
                                                        </a>
                                                        <a href='#'>
                                                            <BsWhatsapp className='whatsapp' />
                                                        </a>
                                                        <a href='#'>
                                                            <IoMailOutline className='mail' />
                                                        </a>
                                                        <a href='#'>
                                                            <RiLinksFill className='link' />
                                                        </a>
                                                    </SosialN>
                                                    <Edit>Edit</Edit>
                                                    <Details>Details</Details>
                                                </LastDiv>
                                            </CardLong>
                                        ))) :
                                            (<div>
                                                <CardLonger>
                                                    <NotWishes>Yo don’t have any wishes</NotWishes>
                                                    <Buttons>
                                                        <Buttonleft>Create a wish</Buttonleft>
                                                        <Buttonright>Explore wishes</Buttonright>
                                                    </Buttons>
                                                    <Glasses src={file1} />
                                                </CardLonger>
                                                <Division>
                                                    <Maybe>Maybe you know  <HiArrowNarrowRight style={{ float: "right", fontSize: "20px", color: "#3800B0" }} /><HiArrowNarrowLeft style={{ float: "right", fontSize: "20px", color: "#3800B0" }} /></Maybe>
                                                    <Swiper
                                                        slidesPerView={4.5}
                                                        spaceBetween={16}
                                                        slidesPerGroup={5}
                                                        loop={true}
                                                        loopFillGroupWithBlank={true}
                                                        modules={[Pagination, Navigation]}
                                                        className="mySwiper"
                                                    >
                                                        {
                                                            Carddata.popular.map((index) => (
                                                                <SwiperSlide>
                                                                    <Picture src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5ODc1NTM4NjMyOTc2Mzcz/gettyimages-693134468.jpg" />
                                                                    <Name>{index.title}<HiBadgeCheck style={{ color: "blue", margin: "2px 0 0 5px", float: "right" }} /></Name>
                                                                    <Tag>{index.time}</Tag>
                                                                </SwiperSlide>
                                                            ))
                                                        }
    
                                                    </Swiper>
                                                </Division>
                                            </div>
                                            )
    
                                    }
                                </TabPanel>
                                <TabPanel value="com">
                                    {
                                        (Carddata.data) ? (Carddata.data.map((index) => (
    
                                            <CardLong id={index.id}>
                                                <Imagess src={index.url} />
                                                <Title>{index.title}</Title>
                                                <Seconddiv>
                                                    <Views>256 <br /><p style={{ fontSize: "12px", marginTop: "-7px" }}>Views</p></Views>
                                                    <Views>8<br /><p style={{ fontSize: "12px", marginTop: "-7px" }}>Gifts</p></Views>
                                                    <Views>$12 <br /><p style={{ fontSize: "12px", marginTop: "-7px" }}>Avg gift amount</p></Views>
                                                    <Lastdiv>
                                                        <span className='star-card' style={{ float: "left", fontSize: "20px", margin: "16px 0 0 16px" }}>✨</span>
                                                        <Raised>$2 542 raised</Raised>
                                                        <Targets>120%  of $2 000 target</Targets>
                                                    </Lastdiv>
                                                </Seconddiv>
                                                <DisplayOnButtonText>for birthday on 25 Nov 2022</DisplayOnButtonText>
    
                                            </CardLong>
                                        ))) :
                                            (<div>
                                                <CardLonger>
                                                    <NotWishes>Yo don’t have any wishes</NotWishes>
                                                    <Buttons>
                                                        <Buttonleft>Create a wish</Buttonleft>
                                                        <Buttonright>Explore wishes</Buttonright>
                                                    </Buttons>
                                                    <Glasses src={file1} />
                                                </CardLonger>
                                                <Division>
                                                    <Maybe>Maybe you know  <HiArrowNarrowRight style={{ float: "right", fontSize: "20px", color: "#3800B0" }} /><HiArrowNarrowLeft style={{ float: "right", fontSize: "20px", color: "#3800B0" }} /></Maybe>
                                                    <Swiper
                                                        slidesPerView={4.5}
                                                        spaceBetween={16}
                                                        slidesPerGroup={5}
                                                        loop={true}
                                                        loopFillGroupWithBlank={true}
                                                        modules={[Pagination, Navigation]}
                                                        className="mySwiper"
                                                    >
                                                        {
                                                            Carddata.popular.map((index) => (
                                                                <SwiperSlide>
                                                                    <Picture src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5ODc1NTM4NjMyOTc2Mzcz/gettyimages-693134468.jpg" />
                                                                    <Name>{index.title}<HiBadgeCheck style={{ color: "blue", margin: "2px 0 0 5px", float: "right" }} /></Name>
                                                                    <Tag>{index.time}</Tag>
                                                                </SwiperSlide>
                                                            ))
                                                        }
    
                                                    </Swiper>
                                                </Division>
                                            </div>
                                            )
    
                                    }
                                </TabPanel>
                                <TabPanel value="con">
                                    {
                                        (Carddata.data) ? (Carddata.data.map((index) => (
    
                                            <CardSecond>
                                                <Hood>
                                                    <span style={{ float: "left", marginTop: "4px", fontSize: "16px" }}>☕</span>
                                                    <Parag>$10 to</Parag>
                                                    <Photo src='https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/31jPSK41kEL.jpg' />
                                                    <Person>{index.person}</Person>
                                                    <Parag>Birthday {index.date}</Parag>
                                                    <Parags>{index.time} min ago</Parags>
                                                    <DisplayTopText><span style={{ color: 'grey' }}>$10 to </span> Andrew Retriver’s</DisplayTopText>
                                                    <DisplayBirthdaytext>Birthday on 25 Dec 2022</DisplayBirthdaytext>
                                                    <DisplayTime>2 min ago</DisplayTime>
                                                </Hood>
                                                <Titles>{index.title}</Titles>
                                                <Third>
                                                    <Paragraf>22 people like this congratulation</Paragraf>
                                                    <Paragrap>22 like</Paragrap>
                                                    <Pass href='#'><HiArrowNarrowRight style={{ float: "left", margin: "2px 5px" }} /> To the wish</Pass>
                                                </Third>
                                            </CardSecond>
                                        ))) :
                                            (<div>
                                                <CardLonger>
                                                    <NotWishes>Yo don’t have any wishes</NotWishes>
                                                    <Buttons>
                                                        <Buttonleft>Create a wish</Buttonleft>
                                                        <Buttonright>Explore wishes</Buttonright>
                                                    </Buttons>
                                                    <Glasses src={file1} />
                                                </CardLonger>
                                                <Division>
                                                    <Maybe>Maybe you know  <HiArrowNarrowRight style={{ float: "right", fontSize: "20px", color: "#3800B0" }} /><HiArrowNarrowLeft style={{ float: "right", fontSize: "20px", color: "#3800B0" }} /></Maybe>
                                                    <Swiper
                                                        slidesPerView={4.5}
                                                        spaceBetween={16}
                                                        slidesPerGroup={5}
                                                        loop={true}
                                                        loopFillGroupWithBlank={true}
                                                        modules={[Pagination, Navigation]}
                                                        className="mySwiper"
                                                    >
                                                        {
                                                            Carddata.popular.map((index) => (
                                                                <SwiperSlide>
                                                                    <Picture src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5ODc1NTM4NjMyOTc2Mzcz/gettyimages-693134468.jpg" />
                                                                    <Name>{index.title}<HiBadgeCheck style={{ color: "blue", margin: "2px 0 0 5px", float: "right" }} /></Name>
                                                                    <Tag>{index.time}</Tag>
                                                                </SwiperSlide>
                                                            ))
                                                        }
    
                                                    </Swiper>
                                                </Division>
                                            </div>
                                            )
    
                                    }
                                </TabPanel>
                            </Tabs>
                        </Grid.Col>
                    </Grid>
                </Body>
        )
    }
}

export default MyProfile;