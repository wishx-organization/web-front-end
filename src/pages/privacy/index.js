import React from "react";
import { PrivacyTopContainer, Privacy_policy_text, Terms_text, Shipping_text } from "./Privacy.Styled";
import { Image, MediaQuery, Menu, Box, Text } from '@mantine/core';
import { display } from "styled-system";

const Privacy = () => {
    return (
        <PrivacyTopContainer>
            <div className="topsection">
                <p>Main {">"} Privacy Policy</p>
            </div>
            <Privacy_policy_text>
                <p>Privacy Policy</p>
            </Privacy_policy_text>
            <Terms_text>
                <p>Terms and conditions</p>
            </Terms_text>
            <div className="text_section">
                <p>This website is operated by Marigold {"&"} Grey Inc. Throughout the site, the terms “we”, “us” and “our” refer to Marigold {"&"} Grey Inc. MarigoldGrey.com ( the “Website”) 
                is intended for sole use by those wishing to review, consider, purchase or otherwise engage in commercial transactions involving Marigold {"&"} Grey Inc. 
                By visiting our Website and/or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”). 
                These Terms of Service apply to all users of the site including but not limited to browsers, vendors, customers, merchants, and/or contributors of content. 
                We reserve the right to refuse service to anyone for any reason at any time.<br/>
                <br/>
                By accessing or using any part of the site, you agree to be bound by these Terms of Service. 
                If you do not agree to all the terms and conditions of this agreement, 
                then you may not access the website or use any services. Please read these Terms of Service carefully before accessing or using our Website.</p>
            </div>
            <Shipping_text>
                <p>How shipping works</p>
            </Shipping_text>
                <div className="shipping_bgtext">
                    <p>Unless otherwise specified, offers of "free shipping" throughout the Marigold {"&"} Grey 
                    website and across all social media accounts, refers to free shipping within the contiguous United States only. 
                    U.S territories, Alaska, Hawaii and shipping destinations other than the United States are not entitled to free shipping. 
                    If a destination address is eligible for 'Free Shipping', a 'Free Shipping' option will appear in the cart at checkout. </p>
                    <p>When a creative-at-heart person such as myself invests fifteen years in the corporate 
                        world and then finally takes a leap of faith to start over where they really belong, getting the chance to tour 
                        an award-winning design studio is like heaven on earth. Not to mention, the opportunity to brainstorm with 
                        an expert like Sarah. Priceless.<br/>
                        <br/>
                        I arrived in the morning and Sarah and her team were busy at work on their last big wedding 
                        of the year! White blooms for days. Just breathtaking.</p>
                </div>
        </PrivacyTopContainer>
    )
}

export default Privacy;