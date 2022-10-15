import React from "react";
import { Tab, TabPanel, Tabs } from "react-tabs";
import { TabButtons } from "../../my-profile-edit/MyProfileEdit.styles";
import { ButtonFind, ButtonSection, ContactsMainContainer, ContactsNavigator, ContactsTxt, DontHaveDataSection, DontHaveDataText, FacebookTxt, GlasesImg, Subscribebtn, SuggestionTxt, TabTopContainer, Unsubscribe, UserContentDiv, UserImage, UserUsername } from "./CSubscribers.styled";
import { UnsubscribeDataCard } from "./UnsubscribeData";
import { UsersDataCard } from "./UsersCards";
import { BsCheckCircleFill } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { SuggestDataCard } from "./SuggestionData";
import { Component } from "react";
import file1 from "../../../style/icons/file1.png"
import { FacebookFriendsDataCard } from "./FacebookFriends";


class ContactsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {isVisible: false}
        this.onToggle = this.onToggle.bind(this);
    }

    onToggle(e) {
        this.setState({isVisible: !this.state.isVisible})
    }
    render() {
        return (
            <ContactsMainContainer>
                <ContactsNavigator> Main {">"} Profile {'>'} Contacts </ContactsNavigator>
                <ContactsTxt>Contacts</ContactsTxt>
                <Tabs defaultValue="followers">
                    <TabTopContainer>
                        <div className='insider'>
                            <Tab value="followers" >
                                <button className='editing-buttons'>Followers <span style={{ color: "gray", fontFamily: "sans-serif", marginLeft: "8px" }}>237</span></button>
                            </Tab>
                            <Tab value="following">
                                <button className='editing-buttons'>Following <span style={{ color: "gray", fontFamily: "sans-serif", marginLeft: "8px" }}>522</span></button>
                            </Tab>
                            <Tab value="find-friends">
                                <button className='editing-buttons'>Find friends</button>
                            </Tab>
                        </div>
                    </TabTopContainer>

                    <TabPanel value="followers">
                        {
                          (UsersDataCard.data) ? (UsersDataCard.data.map(({ foto, username }) => (
                                <UserContentDiv>
                                    <UserImage src={foto} />
                                    <UserUsername>{username}</UserUsername>
                                    <BsCheckCircleFill className="check" />
                                    <Subscribebtn href="#">Subscribe</Subscribebtn>
                                </UserContentDiv>
    
                            )))

                            :

                            <DontHaveDataSection>
                                <DontHaveDataText>You haven't subscribed to anyone yet</DontHaveDataText>
                                <ButtonSection>
                                    <ButtonFind>Find friends</ButtonFind>
                                </ButtonSection>
                                <GlasesImg src={file1} />
                            </DontHaveDataSection>
                        }
                    </TabPanel>

                    <TabPanel value="following">
                        {
                           (UnsubscribeDataCard.data) ? (UnsubscribeDataCard.data.map(({ foto, username }) => (
                                <UserContentDiv>
                                    <UserImage src={foto} />
                                    <UserUsername>{username}</UserUsername>
                                    <BsCheckCircleFill className="check" />
                                    <Unsubscribe href="#">Unsubscribe</Unsubscribe>
                                </UserContentDiv>
                            )))

                            :

                            <DontHaveDataSection>
                                <DontHaveDataText>You haven't subscribed to anyone yet</DontHaveDataText>
                                <ButtonSection>
                                    <ButtonFind>Find friends</ButtonFind>
                                </ButtonSection>
                                <GlasesImg src={file1} />
                            </DontHaveDataSection>
                            
                        }
                    </TabPanel>

                    <TabPanel value="find-friends">
                        <FacebookTxt>Facebook friends</FacebookTxt>
                        {!this.state.isVisible &&
                            <button className='facebook-button' onClick={this.onToggle}>
                                <FaFacebook className='facebook-icon'></FaFacebook>
                                <h1 className='facebook-title' style={{ margin: '0' }}>Connect Facebook</h1>
                            </button>
                        }
                        <div className="mb-5">
                            {this.state.isVisible &&
                                <div>
                                    {
                                     (FacebookFriendsDataCard.data) ? (FacebookFriendsDataCard.data.map(({ foto, username }) => (
                                            <UserContentDiv>
                                                <UserImage src={foto} />
                                                <UserUsername>{username}</UserUsername>
                                                <BsCheckCircleFill className="check" />
                                                <Subscribebtn href="#">Subscribe</Subscribebtn>
                                            </UserContentDiv>
                                        )))

                                        :

                                        <DontHaveDataSection>
                                            <DontHaveDataText>You haven't subscribed to anyone yet</DontHaveDataText>
                                            <ButtonSection>
                                                <ButtonFind>Find friends</ButtonFind>
                                            </ButtonSection>
                                            <GlasesImg src={file1} />
                                        </DontHaveDataSection>
                                    }
                                </div>
                            }
                        </div>

                        <div>
                            <SuggestionTxt>Suggestion</SuggestionTxt>

                        </div>

                        {

                           (SuggestDataCard.data) ? (SuggestDataCard.data.map(({ foto, username }) => (
                                <UserContentDiv>
                                    <UserImage src={foto} />
                                    <UserUsername>{username}</UserUsername>
                                    <BsCheckCircleFill className="check" />
                                    <Subscribebtn href="#">Subscribe</Subscribebtn>
                                </UserContentDiv>
                            )))

                            :

                            <DontHaveDataSection>
                                <DontHaveDataText>You haven't subscribed to anyone yet</DontHaveDataText>
                                <ButtonSection>
                                    <ButtonFind>Find friends</ButtonFind>
                                </ButtonSection>
                                <GlasesImg src={file1} />
                            </DontHaveDataSection>

                        }

                            
                    </TabPanel>
                </Tabs>
            </ContactsMainContainer>
        )
    }
}

export default ContactsPage;