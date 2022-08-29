import { Container, Grid, Image, Button } from '@mantine/core';
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
                    <Grid.Col span={8}>
                        <Tabs>
                            <TabList className="main-tab">
                                <Tab className="anytabname">Active wishes</Tab>
                                <Tab className="tabname">Complete wishes</Tab>
                                <Tab className="tabname">Congratulations</Tab>
                            </TabList>

                            <TabPanel>
                                <h2>Any content 1</h2>
                            </TabPanel>
                            <TabPanel>
                                <h2>Any content 2</h2>
                            </TabPanel>
                            <TabPanel>
                                <h2>Any content 3</h2>
                            </TabPanel>
                        </Tabs>
                    </Grid.Col>
                </Grid>
            </Body>
        </>
    )
}

export default OtherUserProfileActive;