import { React } from "react";
import { ContactContainer, ContactSecondSection } from "./Contact.Styled";
import { Grid, Textarea, Input, Button } from '@mantine/core';
import { ReactComponent as Envelope } from '../../style/icons/envelope.svg'
import { CustomInput } from '../../shared/ui/İnput';


const Contact = () => {
    return (
        <ContactContainer p={0} fluid>
            <Grid className="grid-contact-top">
                <Grid.Col style={{marginBottom: "8px"}} className="contact-top" xl={6} lg={6} md={6} sm={12} xs={12}>
                    <div className="toggle">
                        <p>Main {">"} Contact Us</p>
                    </div>
                    <div className="content">
                        <h2>Contact us</h2>
                    </div>
                    <div className="info">
                        <p>You can contact us by</p>
                        <ul>
                            <li>+994 55 814 41 91</li>
                            <li>support@wishx.me</li>
                        </ul>
                    </div>

                    <div className="envelope-img">
                        <Envelope/>
                    </div>
                </Grid.Col>
                <Grid.Col xl={6} lg={6} md={6} sm={12} xs={12} className="contact-bottom">
                    <ContactSecondSection >
                        <div className="write_section">
                            <h2>Write us</h2>
                        </div>
                            <div className="input-section-one">
                                <CustomInput
                                placeholder={"Your email"}
                                required
                                />
                            </div>
                                <div className="input-section-two">
                                    <CustomInput
                                    required
                                    placeholder={"Write a message"}
                                    />
                                </div>
                        
                        <Button className="send-button">Send</Button>
                    </ContactSecondSection>
                </Grid.Col>
            </Grid>
        </ContactContainer>
    )
}

export default Contact;