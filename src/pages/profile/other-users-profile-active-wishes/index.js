import { Container, Grid, Progress, Image, Button } from '@mantine/core';
import { WishesBtn, PartnersText } from '../../home/Home.Styled'

import { Carddata } from "../../home/CardData"
import {
    Wrapper,
    ImgWrapper,
    ContentWrapper,
    Title,
    UserWrapper,
    UserAbout,
    UserName,
    UserDesc,
    UserPhoto,
    PriceWrapper,
    Prices,
    LeftPrice,
    RightPrice,
    ProgressWrapper
} from "../../../shared/components/home/homeCard/HomeCard.styled"
import React from "react";
import { Body, DateSection, FotoSection, LeftSection, Namesurname, TagName, Text, Date, DateText, FollowersSection, Follower, Following, ButtonSection } from "./OtherUPAW.Styled";
import rainbowfoto from '../../../style/icons/rainbowfoto.png'
import tomcruse from '../../../style/icons/tomcruse.png'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
const OtherUserProfileActive = () => {
    return (
        <>
            <Body>
                <FotoSection fluid>
                    <Image radius="lg" className='rainbow' src={rainbowfoto} height={300} />
                </FotoSection>
                <Grid className='main-grid'>
                    <Grid.Col className='col-one' span={4}>
                        <LeftSection>
                            <Image radius="100px" className="tomcruse" height={85} src={tomcruse} />
                            <Namesurname>Tom Cruise</Namesurname>
                            <TagName>@ cucuruz</TagName>
                            <Text>Dedicated to create amazing for art exhibition information please check link below:</Text>
                            <DateSection>
                                <Date>3 July 1962</Date>
                                <DateText>Birthdate</DateText>
                            </DateSection>
                            <FollowersSection>
                                <Follower>144 <br /> followers</Follower>
                                <Following>156 <br /> followings</Following>
                            </FollowersSection>
                            <ButtonSection>
                                <Button className='first-btn'>Follow</Button>
                                <Button className='second-btn'>Message</Button>
                            </ButtonSection>
                        </LeftSection>
                    </Grid.Col>
                    <Grid.Col className='col-two-sect' span={8}>
                        <Tabs>
                            <TabList className="main-tab">
                                <Tab className="anytabname">Active wishes <span style={{ color: "#3800B0" }} className='ml-2'> 4</span></Tab>
                                <Tab className="tabname">Complete wishes <span style={{ color: "#3800B0" }} className='ml-2'> 4</span></Tab>
                                <Tab className="tabname">Congratulations <span style={{ color: "#3800B0" }} className='ml-2'> 4</span></Tab>
                            </TabList>

                            <TabPanel>
                                <h2>Any content 1</h2>

                                <Grid>
                                    {Carddata.data.map(({ url, title, username, userdesc, userphoto, leftprice, rightprice }) => (
                                        <Grid.Col xs={12} sm={6} md={4} lg={4}>
                                            <Wrapper className="cart-item" onMouseOver={(e) => {
                                                e.currentTarget.setAttribute('style', 'border: 1px solid #3800B0;');
                                                e.currentTarget.children[0].children[0].setAttribute('style', 'visibility: visible');
                                                e.currentTarget.children[0].children[1].setAttribute('style', 'visibility: visible');

                                            }} onMouseOut={(e) => {
                                                e.currentTarget.setAttribute('style', 'border: 1px solid #EBE5F7;')
                                                e.currentTarget.children[0].children[0].setAttribute('style', 'visibility: hidden');
                                                e.currentTarget.children[0].children[1].setAttribute('style', 'visibility: hidden');
                                            }}>
                                                <div className="image-container">
                                                    <button className='congralute-button'>Congralute</button>
                                                    <div className="image-background"></div>
                                                    <ImgWrapper src={url}></ImgWrapper>
                                                </div>
                                                <ContentWrapper>
                                                    <Title>{title}</Title>

                                                    <UserWrapper>
                                                        <UserAbout>
                                                            <UserName>{username}</UserName>
                                                            <UserDesc>{userdesc}</UserDesc>
                                                        </UserAbout>
                                                        <UserPhoto src={userphoto}></UserPhoto>
                                                    </UserWrapper>

                                                    <PriceWrapper>
                                                        <ProgressWrapper>
                                                            <Progress size="sm" sections={[{ value: 50, color: "#3800B0" }]} />
                                                        </ProgressWrapper>
                                                        <Prices>
                                                            <LeftPrice>{leftprice}</LeftPrice>
                                                            <RightPrice>{rightprice}</RightPrice>
                                                        </Prices>
                                                    </PriceWrapper>
                                                </ContentWrapper>
                                            </Wrapper>
                                        </Grid.Col>
                                    ))}
                                </Grid>
                            </TabPanel>
                            <TabPanel>
                                <h2>Any content 2</h2>

                                <Grid>
                                    {Carddata.data.map(({ url, title, username, userdesc, userphoto, leftprice, rightprice }) => (
                                        <Grid.Col xs={12} sm={6} md={3} lg={3}>
                                            <Wrapper className="cart-item" onMouseOver={(e) => {
                                                e.currentTarget.setAttribute('style', 'border: 1px solid #3800B0;');
                                                e.currentTarget.children[0].children[0].setAttribute('style', 'visibility: visible');
                                                e.currentTarget.children[0].children[1].setAttribute('style', 'visibility: visible');

                                            }} onMouseOut={(e) => {
                                                e.currentTarget.setAttribute('style', 'border: 1px solid #EBE5F7;')
                                                e.currentTarget.children[0].children[0].setAttribute('style', 'visibility: hidden');
                                                e.currentTarget.children[0].children[1].setAttribute('style', 'visibility: hidden');
                                            }}>
                                                <div className="image-container">
                                                    <button className='congralute-button'>Congralute</button>
                                                    <div className="image-background"></div>
                                                    <ImgWrapper src={url}></ImgWrapper>
                                                </div>
                                                <ContentWrapper>
                                                    <Title>{title}</Title>

                                                    <UserWrapper>
                                                        <UserAbout>
                                                            <UserName>{username}</UserName>
                                                            <UserDesc>{userdesc}</UserDesc>
                                                        </UserAbout>
                                                        <UserPhoto src={userphoto}></UserPhoto>
                                                    </UserWrapper>

                                                    <PriceWrapper>
                                                        <ProgressWrapper>
                                                            <Progress size="sm" sections={[{ value: 50, color: "#3800B0" }]} />
                                                        </ProgressWrapper>
                                                        <Prices>
                                                            <LeftPrice>{leftprice}</LeftPrice>
                                                            <RightPrice>{rightprice}</RightPrice>
                                                        </Prices>
                                                    </PriceWrapper>
                                                </ContentWrapper>
                                            </Wrapper>
                                        </Grid.Col>
                                    ))}
                                </Grid>
                            </TabPanel>
                            <TabPanel>
                                <h2>Any content 3</h2>

                                <Grid>
                                    {Carddata.data.map(({ url, title, username, userdesc, userphoto, leftprice, rightprice }) => (
                                        <Grid.Col xs={12} sm={6} md={3} lg={3}>
                                            <Wrapper className="cart-item" onMouseOver={(e) => {
                                                e.currentTarget.setAttribute('style', 'border: 1px solid #3800B0;');
                                                e.currentTarget.children[0].children[0].setAttribute('style', 'visibility: visible');
                                                e.currentTarget.children[0].children[1].setAttribute('style', 'visibility: visible');

                                            }} onMouseOut={(e) => {
                                                e.currentTarget.setAttribute('style', 'border: 1px solid #EBE5F7;')
                                                e.currentTarget.children[0].children[0].setAttribute('style', 'visibility: hidden');
                                                e.currentTarget.children[0].children[1].setAttribute('style', 'visibility: hidden');
                                            }}>
                                                <div className="image-container">
                                                    <button className='congralute-button'>Congralute</button>
                                                    <div className="image-background"></div>
                                                    <ImgWrapper src={url}></ImgWrapper>
                                                </div>
                                                <ContentWrapper>
                                                    <Title>{title}</Title>

                                                    <UserWrapper>
                                                        <UserAbout>
                                                            <UserName>{username}</UserName>
                                                            <UserDesc>{userdesc}</UserDesc>
                                                        </UserAbout>
                                                        <UserPhoto src={userphoto}></UserPhoto>
                                                    </UserWrapper>

                                                    <PriceWrapper>
                                                        <ProgressWrapper>
                                                            <Progress size="sm" sections={[{ value: 50, color: "#3800B0" }]} />
                                                        </ProgressWrapper>
                                                        <Prices>
                                                            <LeftPrice>{leftprice}</LeftPrice>
                                                            <RightPrice>{rightprice}</RightPrice>
                                                        </Prices>
                                                    </PriceWrapper>
                                                </ContentWrapper>
                                            </Wrapper>
                                        </Grid.Col>
                                    ))}
                                </Grid>
                            </TabPanel>
                        </Tabs>
                    </Grid.Col>
                </Grid>
            </Body>
        </>
    )
}

export default OtherUserProfileActive;