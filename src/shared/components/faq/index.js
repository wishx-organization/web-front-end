import React from "react";
import { Grid, Textarea, Input, Button } from '@mantine/core';
import { FaqContainer, ImageSector } from "./faq.Styled";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import foto from '../../../style/icons/lamp.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import {SetFaqSecId, SetFaqOpitions} from "./functions";
import { useEffect } from "react";

const FaqSection = () => {
   
  useEffect(() => {
     SetFaqSecId();
  });

  return (
    <FaqContainer p={0} fluid>
      <h1 className="faq-txt">FAQ</h1>
      <Grid className="main-container">
        <Grid.Col xl={4} lg={4} md={4} sm={4} span={4} className='left-col'>
          <div className="navigator-section">
            <Button className="first-btn">Return {"&"} Refunds</Button>
            <Button className="another-btn">Shipping Policy</Button>
            <Button className="another-btn">Payment Methods</Button>
            <Button className="another-btn">Retail Partnership</Button>
            <Button className="another-btn">Unsubscribe</Button>
          </div>
          <ImageSector>
            <img className="foto_faq" src={foto} />
          </ImageSector>
        </Grid.Col>
        <Grid.Col xl={8} lg={8} md={8} sm={8} xs={8} span={6} className="right-col">
          <div className="faq">
            <Accordion className="faq-sect">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography class="faq-content">What payment methods are accepted?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="faq-sect">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography class="faq-content">What should I do if my credit card was charged the wrong amount?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="faq-sect">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography class="faq-content">What is your return and refund policy?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="faq-sect">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography class="faq-content">How do I cancel my account?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="faq-sect">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography class="faq-content">To where are invoices sent?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>

          </div>
        </Grid.Col>
      </Grid>
      <Grid className="main-container-sm">
        <Grid.Col className='left-col-sm'>
          <div className="navigator-section-sm">
            <Button className="first-btn">Return {"&"} Refunds</Button>
            <Button className="another-btn">Shipping Policy</Button>
            <Button className="another-btn">Payment Methods</Button>
            <Button className="another-btn">Retail Partnership</Button>
            <Button className="another-btn">Unsubscribe</Button>
          </div>
        </Grid.Col>
        <Grid.Col className="right-col-sm">
          <div className="faq">
            <Accordion className="faq-sect-sm" onClick={(e) => {SetFaqOpitions(e.currentTarget)}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography class="faq-content">What payment methods are accepted?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="faq-title">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="faq-sect-sm" onClick={(e) => {SetFaqOpitions(e.currentTarget)}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography class="faq-content">What should I do if my credit card was charged the wrong amount?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="faq-title">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="faq-sect-sm" onClick={(e) => {SetFaqOpitions(e.currentTarget)}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography class="faq-content">What is your return and refund policy?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="faq-title">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="faq-sect-sm" onClick={(e) => {SetFaqOpitions(e.currentTarget)}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography class="faq-content">How do I cancel my account?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="faq-title">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="faq-sect-sm" onClick={(e) => {SetFaqOpitions(e.currentTarget)}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography class="faq-content">To where are invoices sent?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="faq-title">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
               
          </div>
        </Grid.Col>
        <ImageSector>
            <img className="foto_faq" src={foto} />
          </ImageSector>
      </Grid>
    </FaqContainer>
  )
}

export default FaqSection

