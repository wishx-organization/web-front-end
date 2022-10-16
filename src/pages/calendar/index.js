import { Big_calendar_bigdiv, Calendar_first_empty, Small_middle_page,Calendar_item, Calendar_item_item, Calendar_item_into, Dateblue, Datediv, Mainpage, ShowToday, Title, Toppage, Person_item, Person_item_second, Photo_cycle, User_name, Photo_right_one, Photo_right_two, All_wishes, Small_main_page, Small_top_p, Small_top_page, Middle_page_top, Middle_top_photo, Middle_top_word, Birthday, Card, Card_title, Card_photo, Loading_big, Loading_blue, Price_div, MobileCalendar, BlurCount } from "./Calendar.styled";
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import {IoChevronUpOutline, IoCalendarOutline } from 'react-icons/io5';
import { GrClose } from 'react-icons/gr';
import { BsCheckCircleFill } from 'react-icons/bs';
import { useState } from "react";
import { useMantineTheme, Modal } from '@mantine/core';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


    function Calendar() {

    const[show, setShow] = useState(true)
    const [opened, setOpened] = useState(false);
    const theme = useMantineTheme();

    return (
        <Mainpage>
           { show ?
            <div>
                <Toppage>
                <Title>Calendar</Title>
                <Datediv>
                    <BsChevronLeft className="left" />
                    <Dateblue>
                        <IoCalendarOutline className="calendar" />
                        <p className="month_year">June 2022</p>
                    </Dateblue>
                    <BsChevronRight className="right" />
                </Datediv>
                <ShowToday>Show today</ShowToday>
            </Toppage>
            <Big_calendar_bigdiv>
                <Calendar_first_empty>{}</Calendar_first_empty>
                <Calendar_item className="calendar_item" onClick={() => setShow(!show)}>
                    <Calendar_item_item>
                        <p className="numberblack">1</p>
                        <Calendar_item_into>
                            <Person_item>
                            </Person_item>

                            <Person_item>
                            </Person_item>
                            
                            <Person_item>
                            </Person_item>
                            
                            <Person_item_second>
                                <Photo_cycle src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
                                <User_name>Larry Deaton</User_name>
                                <Photo_right_one src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                                <Photo_right_two src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                            </Person_item_second>
                        
                        </Calendar_item_into>
                    </Calendar_item_item>
                </Calendar_item>
                <Calendar_item className="calendar_item">
                    <Calendar_item_item>
                        <p className="numberblack">2</p>
                        <Calendar_item_into>
                            <Person_item>
                            </Person_item>

                            <Person_item>
                            </Person_item>
                            
                            <Person_item>
                            </Person_item>
                            
                            <Person_item_second>
                            </Person_item_second>
                        
                        </Calendar_item_into>
                    </Calendar_item_item>
                </Calendar_item>
                <Calendar_item className="calendar_item">
                    <Calendar_item_item>
                        <p className="numberblack">3</p>
                        <Calendar_item_into>
                            <Person_item>
                            </Person_item>

                            <Person_item>
                            </Person_item>
                            
                            <Person_item>
                                <Photo_cycle src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
                                <User_name>Larry Deaton</User_name>
                                <Photo_right_one src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                                <Photo_right_two src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                            </Person_item>
                            
                            <Person_item_second>
                                <Photo_cycle src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
                                <User_name>Sukriye Efil</User_name>
                                <Photo_right_one src="https://media.istockphoto.com/photos/panoramic-sunset-view-of-marrakech-and-old-medina-morocco-picture-id1186702515?k=20&m=1186702515&s=612x612&w=0&h=mGgVMe1dLklCzidF9feCx25f25QLkBY1DIEyZmyL3Dg="/>
                                <Photo_right_two src="https://www.gettyimages.com/gi-resources/images/Embed/new/embed2.jpg"/>
                            </Person_item_second>
                        
                        </Calendar_item_into>
                    </Calendar_item_item>
                </Calendar_item>
                <Calendar_item className="calendar_item">
                    <Calendar_item_item>
                        <p className="numberblack">4</p>
                        <Calendar_item_into>
                            <Person_item>
                            </Person_item>

                            <Person_item>
                            </Person_item>
                            
                            <Person_item>
                            </Person_item>
                            
                            <Person_item_second>
                                <Photo_cycle src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
                                <User_name>Sukriye Efil</User_name>
                                <Photo_right_one src="https://media.istockphoto.com/photos/panoramic-sunset-view-of-marrakech-and-old-medina-morocco-picture-id1186702515?k=20&m=1186702515&s=612x612&w=0&h=mGgVMe1dLklCzidF9feCx25f25QLkBY1DIEyZmyL3Dg="/>
                                <Photo_right_two src="https://www.gettyimages.com/gi-resources/images/Embed/new/embed2.jpg"/>
                            </Person_item_second>
                        
                        </Calendar_item_into>
                    </Calendar_item_item>
                </Calendar_item>
                <Calendar_item className="calendar_item">
                    <Calendar_item_item>
                        <p className="numberblack">5</p>
                        <Calendar_item_into>
                            <Person_item>
                            </Person_item>

                            <Person_item>
                            </Person_item>
                            
                            <Person_item>
                            </Person_item>
                            
                            <Person_item_second>
                                <Photo_cycle src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
                                <User_name>Sukriye Efil</User_name>
                                <Photo_right_one src="https://media.istockphoto.com/photos/panoramic-sunset-view-of-marrakech-and-old-medina-morocco-picture-id1186702515?k=20&m=1186702515&s=612x612&w=0&h=mGgVMe1dLklCzidF9feCx25f25QLkBY1DIEyZmyL3Dg="/>
                                <Photo_right_two src="https://www.gettyimages.com/gi-resources/images/Embed/new/embed2.jpg"/>
                            </Person_item_second>
                        
                        </Calendar_item_into>
                    </Calendar_item_item>
                </Calendar_item>
                <Calendar_item className="calendar_item">
                    <Calendar_item_item>
                        <p className="numberblack">6</p>
                        <Calendar_item_into>
                            <Person_item>
                            </Person_item>

                            <Person_item>
                            </Person_item>
                            
                            <Person_item>
                            </Person_item>
                            
                            <Person_item_second>
                            </Person_item_second>
                        
                        </Calendar_item_into>
                    </Calendar_item_item>
                </Calendar_item>
                <Calendar_item className="calendar_item">
                    <Calendar_item_item>
                        <p className="numberblack">7</p>
                        <Calendar_item_into>
                            <Person_item>
                            </Person_item>

                            <Person_item>
                            </Person_item>
                            
                            <Person_item>
                                <Photo_cycle src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
                                <User_name>Larry Deaton</User_name>
                                <Photo_right_one src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                                <Photo_right_two src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>                         
                            </Person_item>
                            
                            <Person_item_second>
                                <Photo_cycle src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
                                <User_name>Sukriye Efil</User_name>
                                <Photo_right_one src="https://media.istockphoto.com/photos/panoramic-sunset-view-of-marrakech-and-old-medina-morocco-picture-id1186702515?k=20&m=1186702515&s=612x612&w=0&h=mGgVMe1dLklCzidF9feCx25f25QLkBY1DIEyZmyL3Dg="/>
                                <Photo_right_two src="https://www.gettyimages.com/gi-resources/images/Embed/new/embed2.jpg"/>
                            </Person_item_second>
                        
                        </Calendar_item_into>
                    </Calendar_item_item>
                </Calendar_item>

{/* first one week /////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/}

                <Calendar_item className="calendar_item">
                    <Calendar_item_item>
                        <p className="numberblack">8</p>
                        <Calendar_item_into>
                            <Person_item>
                                <Photo_cycle src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
                                <User_name>Larry Deaton</User_name>
                                <Photo_right_one src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                                <Photo_right_two src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>                           
                            </Person_item>

                            <Person_item>
                                <Photo_cycle src="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg" />
                                <User_name>Charlyn Kitchen</User_name>
                                <Photo_right_one src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                                <Photo_right_two src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>                           
                            </Person_item>

                            <Person_item>
                                <Photo_cycle src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
                                <User_name>Sukriye Efil</User_name>
                                <Photo_right_one src="https://media.istockphoto.com/photos/panoramic-sunset-view-of-marrakech-and-old-medina-morocco-picture-id1186702515?k=20&m=1186702515&s=612x612&w=0&h=mGgVMe1dLklCzidF9feCx25f25QLkBY1DIEyZmyL3Dg="/>
                                <Photo_right_two src="https://www.gettyimages.com/gi-resources/images/Embed/new/embed2.jpg"/>                           
                            </Person_item>

                            <Person_item_second>
                                <a href="#" onClick={() => setOpened(true)}><All_wishes>See all 8 wishes</All_wishes></a>
                            </Person_item_second>
                        
                        </Calendar_item_into>
                    </Calendar_item_item>
                </Calendar_item>
                <Calendar_item className="calendar_item">
                    <Calendar_item_item>
                        <p className="numberblack">9</p>
                        <Calendar_item_into>
                            <Person_item>
                            </Person_item>

                            <Person_item>
                            </Person_item>
                            
                            <Person_item>
                                <Photo_cycle src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
                                <User_name>Larry Deaton</User_name>
                                <Photo_right_one src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                                <Photo_right_two src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>                          
                            </Person_item>
                            
                            <Person_item_second>
                                <Photo_cycle src="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg" />
                                <User_name>Charlyn Kitchen</User_name>
                                <Photo_right_one src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                                <Photo_right_two src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                            </Person_item_second>
                        
                        </Calendar_item_into>
                    </Calendar_item_item>
                </Calendar_item>
                <Calendar_item className="calendar_item">
                    <Calendar_item_item>
                        <p className="numberblack">10</p>
                        <Calendar_item_into>
                            <Person_item>
                            </Person_item>

                            <Person_item>
                            </Person_item>
                            
                            <Person_item>
                            </Person_item>
                            
                            <Person_item_second>
                                <Photo_cycle src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
                                <User_name>Sukriye Efil</User_name>
                                <Photo_right_one src="https://media.istockphoto.com/photos/panoramic-sunset-view-of-marrakech-and-old-medina-morocco-picture-id1186702515?k=20&m=1186702515&s=612x612&w=0&h=mGgVMe1dLklCzidF9feCx25f25QLkBY1DIEyZmyL3Dg="/>
                                <Photo_right_two src="https://www.gettyimages.com/gi-resources/images/Embed/new/embed2.jpg"/>
                            </Person_item_second>
                        
                        </Calendar_item_into>
                    </Calendar_item_item>
                </Calendar_item>
                <Calendar_item className="calendar_item">
                    <Calendar_item_item>
                        <p className="numberblack">11</p>
                        <Calendar_item_into>
                            <Person_item>
                            </Person_item>

                            <Person_item>
                            </Person_item>
                            
                            <Person_item>
                                <Photo_cycle src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
                                <User_name>Larry Deaton</User_name>
                                <Photo_right_one src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                                <Photo_right_two src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                            </Person_item>
                            
                            <Person_item_second>
                                <Photo_cycle src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
                                <User_name>Sukriye Efil</User_name>
                                <Photo_right_one src="https://media.istockphoto.com/photos/panoramic-sunset-view-of-marrakech-and-old-medina-morocco-picture-id1186702515?k=20&m=1186702515&s=612x612&w=0&h=mGgVMe1dLklCzidF9feCx25f25QLkBY1DIEyZmyL3Dg="/>
                                <Photo_right_two src="https://www.gettyimages.com/gi-resources/images/Embed/new/embed2.jpg"/>
                            </Person_item_second>
                        
                        </Calendar_item_into>
                    </Calendar_item_item>
                </Calendar_item>
                <Calendar_item className="calendar_item">
                    <Calendar_item_item>
                        <p className="numberblack">12</p>
                        <Calendar_item_into>
                            <Person_item>
                            </Person_item>

                            <Person_item>
                            </Person_item>
                            
                            <Person_item>
                            </Person_item>
                            
                            <Person_item_second>
                                <Photo_cycle src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
                                <User_name>Sukriye Efil</User_name>
                                <Photo_right_one src="https://media.istockphoto.com/photos/panoramic-sunset-view-of-marrakech-and-old-medina-morocco-picture-id1186702515?k=20&m=1186702515&s=612x612&w=0&h=mGgVMe1dLklCzidF9feCx25f25QLkBY1DIEyZmyL3Dg="/>
                                <Photo_right_two src="https://www.gettyimages.com/gi-resources/images/Embed/new/embed2.jpg"/>
                            </Person_item_second>
                        
                        </Calendar_item_into>
                    </Calendar_item_item>
                </Calendar_item>
                <Calendar_item className="calendar_item">
                    <Calendar_item_item>
                        <p className="numberblack">13</p>
                        <Calendar_item_into>
                            <Person_item>
                            </Person_item>

                            <Person_item>
                            </Person_item>
                            
                            <Person_item>
                            </Person_item>
                            
                            <Person_item_second>
                                <Photo_cycle src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
                                <User_name>Sukriye Efil</User_name>
                                <Photo_right_one src="https://media.istockphoto.com/photos/panoramic-sunset-view-of-marrakech-and-old-medina-morocco-picture-id1186702515?k=20&m=1186702515&s=612x612&w=0&h=mGgVMe1dLklCzidF9feCx25f25QLkBY1DIEyZmyL3Dg="/>
                                <Photo_right_two src="https://www.gettyimages.com/gi-resources/images/Embed/new/embed2.jpg"/>
                            </Person_item_second>
                        
                        </Calendar_item_into>
                    </Calendar_item_item>
                </Calendar_item>
                <Calendar_item className="calendar_item">
                    <Calendar_item_item>
                        <p className="numberblack">14</p>
                        <Calendar_item_into>
                            <Person_item>
                            </Person_item>

                            <Person_item>
                            </Person_item>
                            
                            <Person_item>
                            </Person_item>
                            
                            <Person_item_second>
                            </Person_item_second>
                        
                        </Calendar_item_into>
                    </Calendar_item_item>
                </Calendar_item>

{/* second week /////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/}

                <Calendar_item className="calendar_item">
                    <Calendar_item_item>
                        <p className="numberblack">15</p>
                        <Calendar_item_into>
                            <Person_item>
                                <Photo_cycle src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
                                <User_name>Larry Deaton</User_name>
                                <Photo_right_one src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                                <Photo_right_two src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                            </Person_item>

                            <Person_item>
                                <Photo_cycle src="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg" />
                                <User_name>Charlyn Kitchen</User_name>
                                <Photo_right_one src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                                <Photo_right_two src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                            </Person_item>

                            <Person_item>
                                <Photo_cycle src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
                                <User_name>Sukriye Efil</User_name>
                                <Photo_right_one src="https://media.istockphoto.com/photos/panoramic-sunset-view-of-marrakech-and-old-medina-morocco-picture-id1186702515?k=20&m=1186702515&s=612x612&w=0&h=mGgVMe1dLklCzidF9feCx25f25QLkBY1DIEyZmyL3Dg="/>
                                <Photo_right_two src="https://www.gettyimages.com/gi-resources/images/Embed/new/embed2.jpg"/>
                            </Person_item>

                            <Person_item_second>
                                <a href="#" onClick={() => setOpened(true)}><All_wishes>See all 8 wishes</All_wishes></a>
                            </Person_item_second>
                        
                        </Calendar_item_into>
                    </Calendar_item_item>
                </Calendar_item>
                <Calendar_item className="calendar_item">
                    <Calendar_item_item>
                        <p className="numberblack">16</p>
                        <Calendar_item_into>
                            <Person_item>
                            </Person_item>

                            <Person_item>
                            </Person_item>
                            
                            <Person_item>
                                <Photo_cycle src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
                                <User_name>Larry Deaton</User_name>
                                <Photo_right_one src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                                <Photo_right_two src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                            </Person_item>
                            
                            <Person_item_second>
                                <Photo_cycle src="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg" />
                                <User_name>Charlyn Kitchen</User_name>
                                <Photo_right_one src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                                <Photo_right_two src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                            </Person_item_second>
                        
                        </Calendar_item_into>
                    </Calendar_item_item>
                </Calendar_item>
                <Calendar_item className="calendar_item">
                <Calendar_item_item>
                        <p className="numberblack">17</p>
                        <Calendar_item_into>
                            <Person_item>
                                <Photo_cycle src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
                                <User_name>Larry Deaton</User_name>
                                <Photo_right_one src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                                <Photo_right_two src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                            </Person_item>

                            <Person_item>
                                <Photo_cycle src="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg" />
                                <User_name>Charlyn Kitchen</User_name>
                                <Photo_right_one src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                                <Photo_right_two src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                            </Person_item>

                            <Person_item>
                                <Photo_cycle src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
                                <User_name>Sukriye Efil</User_name>
                                <Photo_right_one src="https://media.istockphoto.com/photos/panoramic-sunset-view-of-marrakech-and-old-medina-morocco-picture-id1186702515?k=20&m=1186702515&s=612x612&w=0&h=mGgVMe1dLklCzidF9feCx25f25QLkBY1DIEyZmyL3Dg="/>
                                <Photo_right_two src="https://www.gettyimages.com/gi-resources/images/Embed/new/embed2.jpg"/>
                            </Person_item>

                            <Person_item_second>
                                <a href="#" onClick={() => setOpened(true)}><All_wishes>See all 8 wishes</All_wishes></a>
                            </Person_item_second>
                        
                        </Calendar_item_into>
                    </Calendar_item_item>
                </Calendar_item>
                <Calendar_item className="calendar_item">
                <Calendar_item_item>
                        <p className="numberblack">18</p>
                        <Calendar_item_into>
                            <Person_item>
                                <Photo_cycle src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
                                <User_name>Larry Deaton</User_name>
                                <Photo_right_one src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                                <Photo_right_two src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                            </Person_item>

                            <Person_item>
                                <Photo_cycle src="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg" />
                                <User_name>Charlyn Kitchen</User_name>
                                <Photo_right_one src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                                <Photo_right_two src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                            </Person_item>

                            <Person_item>
                                <Photo_cycle src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
                                <User_name>Sukriye Efil</User_name>
                                <Photo_right_one src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                                <Photo_right_two src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                            </Person_item>

                            <Person_item_second>
                                <a href="#" onClick={() => setOpened(true)}><All_wishes>See all 8 wishes</All_wishes></a>
                            </Person_item_second>
                        
                        </Calendar_item_into>
                    </Calendar_item_item>
                </Calendar_item>
                <Calendar_item className="calendar_item">
                    <Calendar_item_item>
                        <p className="numberblack">19</p>
                        <Calendar_item_into>
                            <Person_item>
                            </Person_item>

                            <Person_item>
                            </Person_item>
                            
                            <Person_item>
                                <Photo_cycle src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
                                <User_name>Larry Deaton</User_name>
                                <Photo_right_one src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                                <Photo_right_two src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                            </Person_item>
                            
                            <Person_item_second>
                                <Photo_cycle src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
                                <User_name>Sukriye Efil</User_name>
                                <Photo_right_one src="https://media.istockphoto.com/photos/panoramic-sunset-view-of-marrakech-and-old-medina-morocco-picture-id1186702515?k=20&m=1186702515&s=612x612&w=0&h=mGgVMe1dLklCzidF9feCx25f25QLkBY1DIEyZmyL3Dg="/>
                                <Photo_right_two src="https://www.gettyimages.com/gi-resources/images/Embed/new/embed2.jpg"/>
                            </Person_item_second>
                        
                        </Calendar_item_into>
                    </Calendar_item_item>
                </Calendar_item>
                <Calendar_item className="calendar_item">
                    <Calendar_item_item>
                        <p className="numberblack">20</p>
                        <Calendar_item_into>
                            <Person_item>
                            </Person_item>

                            <Person_item>
                            </Person_item>
                            
                            <Person_item>
                            </Person_item>
                            
                            <Person_item_second>
                                <Photo_cycle src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
                                <User_name>Sukriye Efil</User_name>
                                <Photo_right_one src="https://media.istockphoto.com/photos/panoramic-sunset-view-of-marrakech-and-old-medina-morocco-picture-id1186702515?k=20&m=1186702515&s=612x612&w=0&h=mGgVMe1dLklCzidF9feCx25f25QLkBY1DIEyZmyL3Dg="/>
                                <Photo_right_two src="https://www.gettyimages.com/gi-resources/images/Embed/new/embed2.jpg"/>
                            </Person_item_second>
                        
                        </Calendar_item_into>
                    </Calendar_item_item>
                </Calendar_item>
                <Calendar_item className="calendar_item">
                    <Calendar_item_item>
                        <p className="numberblack">21</p>
                        <Calendar_item_into>
                            <Person_item>
                            </Person_item>

                            <Person_item>
                            </Person_item>
                            
                            <Person_item>
                            </Person_item>
                            
                            <Person_item_second>
                                <Photo_cycle src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
                                <User_name>Larry Deaton</User_name>
                                <Photo_right_one src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                                <Photo_right_two src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                            </Person_item_second>
                        
                        </Calendar_item_into>
                    </Calendar_item_item>
                </Calendar_item>

{/*|||||||||||||||Third week ////////////////\\\\\\\\\\\\\\\\\\\||||||||||||*/}
              
                <Calendar_item className="calendar_item">
                    <Calendar_item_item>
                        <p className="numberblack">22</p>
                        <Calendar_item_into>
                            <Person_item>
                            </Person_item>

                            <Person_item>
                            </Person_item>
                            
                            <Person_item>
                            </Person_item>
                            
                            <Person_item_second>
                            </Person_item_second>
                        
                        </Calendar_item_into>
                    </Calendar_item_item>
                </Calendar_item>
                <Calendar_item className="calendar_item">
                    <Calendar_item_item>
                        <p className="numberblack">22</p>
                        <Calendar_item_into>
                            <Person_item>
                            </Person_item>

                            <Person_item>
                            </Person_item>
                            
                            <Person_item>
                            </Person_item>
                            
                            <Person_item_second>
                                <Photo_cycle src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
                                <User_name>Sukriye Efil</User_name>
                                <Photo_right_one src="https://media.istockphoto.com/photos/panoramic-sunset-view-of-marrakech-and-old-medina-morocco-picture-id1186702515?k=20&m=1186702515&s=612x612&w=0&h=mGgVMe1dLklCzidF9feCx25f25QLkBY1DIEyZmyL3Dg="/>
                                <Photo_right_two src="https://www.gettyimages.com/gi-resources/images/Embed/new/embed2.jpg"/>
                            </Person_item_second>
                        
                        </Calendar_item_into>
                    </Calendar_item_item>
                </Calendar_item>
                <Calendar_item className="calendar_item">
                    <Calendar_item_item>
                        <p className="numberblack">23</p>
                        <Calendar_item_into>
                            <Person_item>
                            </Person_item>

                            <Person_item>
                            </Person_item>
                            
                            <Person_item>
                                <Photo_cycle src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
                                <User_name>Larry Deaton</User_name>
                                <Photo_right_one src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                                <Photo_right_two src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>                           
                            </Person_item>
                            
                            <Person_item_second>
                                <Photo_cycle src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
                                <User_name>Sukriye Efil</User_name>
                                <Photo_right_one src="https://media.istockphoto.com/photos/panoramic-sunset-view-of-marrakech-and-old-medina-morocco-picture-id1186702515?k=20&m=1186702515&s=612x612&w=0&h=mGgVMe1dLklCzidF9feCx25f25QLkBY1DIEyZmyL3Dg="/>
                                <Photo_right_two src="https://www.gettyimages.com/gi-resources/images/Embed/new/embed2.jpg"/>
                            </Person_item_second>
                        
                        </Calendar_item_into>
                    </Calendar_item_item>
                </Calendar_item>
                <Calendar_item className="calendar_item">
                    <Calendar_item_item>
                        <p className="numberblack">24</p>
                        <Calendar_item_into>
                            <Person_item>
                            </Person_item>

                            <Person_item>
                            </Person_item>
                            
                            <Person_item>
                                <Photo_cycle src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
                                <User_name>Larry Deaton</User_name>
                                <Photo_right_one src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                                <Photo_right_two src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>                           
                            </Person_item>
                            
                            <Person_item_second>
                                <Photo_cycle src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
                                <User_name>Sukriye Efil</User_name>
                                <Photo_right_one src="https://media.istockphoto.com/photos/panoramic-sunset-view-of-marrakech-and-old-medina-morocco-picture-id1186702515?k=20&m=1186702515&s=612x612&w=0&h=mGgVMe1dLklCzidF9feCx25f25QLkBY1DIEyZmyL3Dg="/>
                                <Photo_right_two src="https://www.gettyimages.com/gi-resources/images/Embed/new/embed2.jpg"/>
                            </Person_item_second>
                        
                        </Calendar_item_into>
                    </Calendar_item_item>
                </Calendar_item>
                <Calendar_item className="calendar_item">
                    <Calendar_item_item>
                        <p className="numberblack">25</p>
                        <Calendar_item_into>
                            <Person_item>
                            </Person_item>

                            <Person_item>
                            </Person_item>
                            
                            <Person_item>
                            </Person_item>
                            
                            <Person_item_second>
                                <Photo_cycle src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
                                <User_name>Sukriye Efil</User_name>
                                <Photo_right_one src="https://media.istockphoto.com/photos/panoramic-sunset-view-of-marrakech-and-old-medina-morocco-picture-id1186702515?k=20&m=1186702515&s=612x612&w=0&h=mGgVMe1dLklCzidF9feCx25f25QLkBY1DIEyZmyL3Dg="/>
                                <Photo_right_two src="https://www.gettyimages.com/gi-resources/images/Embed/new/embed2.jpg"/>
                            </Person_item_second>
                        
                        </Calendar_item_into>
                    </Calendar_item_item>
                </Calendar_item>
                <Calendar_item className="calendar_item">
                    <Calendar_item_item>
                        <p className="numberblack">26</p>
                        <Calendar_item_into>
                            <Person_item>
                            </Person_item>

                            <Person_item>
                            </Person_item>
                            
                            <Person_item>
                            </Person_item>
                            
                            <Person_item_second>
                            </Person_item_second>
                        
                        </Calendar_item_into>
                    </Calendar_item_item>
                </Calendar_item>
                <Calendar_item className="calendar_item">
                    <Calendar_item_item>
                        <p className="numberblack">27</p>
                        <Calendar_item_into>
                            <Person_item>
                            </Person_item>

                            <Person_item>
                                <Photo_cycle src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
                                <User_name>Larry Deaton</User_name>
                                <Photo_right_one src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                                <Photo_right_two src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>                           
                            </Person_item>
                            
                            <Person_item>
                                <Photo_cycle src="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg" />
                                <User_name>Charlyn Kitchen</User_name>
                                <Photo_right_one src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                                <Photo_right_two src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>                           
                            </Person_item>
                            
                            <Person_item_second>
                                <Photo_cycle src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
                                <User_name>Sukriye Efil</User_name>
                                <Photo_right_one src="https://media.istockphoto.com/photos/panoramic-sunset-view-of-marrakech-and-old-medina-morocco-picture-id1186702515?k=20&m=1186702515&s=612x612&w=0&h=mGgVMe1dLklCzidF9feCx25f25QLkBY1DIEyZmyL3Dg="/>
                                <Photo_right_two src="https://www.gettyimages.com/gi-resources/images/Embed/new/embed2.jpg"/>
                            </Person_item_second>
                        
                        </Calendar_item_into>
                    </Calendar_item_item>
                </Calendar_item>

{/*|||||||||||||||||||||||||||Fourth  week \\\\\\\\\\\\\\\\\\\ */}

                <Calendar_item className="calendar_item">
                    <Calendar_item_item>
                        <p className="numberblack">28</p>
                        <Calendar_item_into>
                            <Person_item>
                            </Person_item>

                            <Person_item>
                            </Person_item>
                            
                            <Person_item>
                            </Person_item>
                            
                            <Person_item_second>
                            </Person_item_second>
                        
                        </Calendar_item_into>
                    </Calendar_item_item>
                </Calendar_item>
                <Calendar_item className="calendar_item">
                    <Calendar_item_item>
                        <p className="numberblack">29</p>
                        <Calendar_item_into>
                            <Person_item>
                            </Person_item>

                            <Person_item>
                            </Person_item>
                            
                            <Person_item>
                                <Photo_cycle src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
                                <User_name>Larry Deaton</User_name>
                                <Photo_right_one src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                                <Photo_right_two src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>                           
                            </Person_item>
                            
                            <Person_item_second>
                                <Photo_cycle src="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg" />
                                <User_name>Charlyn Kitchen</User_name>
                                <Photo_right_one src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                                <Photo_right_two src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                            </Person_item_second>
                        
                        </Calendar_item_into>
                    </Calendar_item_item>
                </Calendar_item>
                <Calendar_item className="calendar_item">
                    <Calendar_item_item>
                        <p className="numberblack">30</p>
                        <Calendar_item_into>
                            <Person_item>
                            </Person_item>

                            <Person_item>
                            </Person_item>
                            
                            <Person_item>
                            </Person_item>
                            
                            <Person_item_second>
                                <Photo_cycle src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
                                <User_name>Sukriye Efil</User_name>
                                <Photo_right_one src="https://media.istockphoto.com/photos/panoramic-sunset-view-of-marrakech-and-old-medina-morocco-picture-id1186702515?k=20&m=1186702515&s=612x612&w=0&h=mGgVMe1dLklCzidF9feCx25f25QLkBY1DIEyZmyL3Dg="/>
                                <Photo_right_two src="https://www.gettyimages.com/gi-resources/images/Embed/new/embed2.jpg"/>
                            </Person_item_second>
                        
                        </Calendar_item_into>
                    </Calendar_item_item>
                </Calendar_item>
                <Calendar_item className="calendar_item">
                    <Calendar_item_item>
                        <p className="numberblack">31</p>
                        <Calendar_item_into>
                            <Person_item>
                            </Person_item>

                            <Person_item>
                            </Person_item>
                            
                            <Person_item>
                                <Photo_cycle src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
                                <User_name>Larry Deaton</User_name>
                                <Photo_right_one src="https://static.remove.bg/sample-gallery/people/man-wearing-sunglasses-1680317-thumbnail.jpg"/>
                                <Photo_right_two src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>                           
                            </Person_item>
                            
                            <Person_item_second>
                                <Photo_cycle src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
                                <User_name>Sukriye Efil</User_name>
                                <Photo_right_one src="https://media.istockphoto.com/photos/panoramic-sunset-view-of-marrakech-and-old-medina-morocco-picture-id1186702515?k=20&m=1186702515&s=612x612&w=0&h=mGgVMe1dLklCzidF9feCx25f25QLkBY1DIEyZmyL3Dg="/>
                                <Photo_right_two src="https://www.gettyimages.com/gi-resources/images/Embed/new/embed2.jpg"/>
                            </Person_item_second>
                        
                        </Calendar_item_into>
                    </Calendar_item_item>
                </Calendar_item>
               </Big_calendar_bigdiv>
           </div> : 
            <Small_main_page>
                <Small_top_page>
                    <Small_top_p>Subscribe wishes for 8 June 2020</Small_top_p>
                    <GrClose className="close" onClick={() => setShow(!show)}/>
                </Small_top_page>
                <Small_middle_page>
                    <Middle_page_top>
                        <Middle_top_photo src="https://www.gettyimages.com/gi-resources/images/Embed/new/embed2.jpg"/>
                        <Middle_top_word>Cody Fisher</Middle_top_word>
                        <BsCheckCircleFill className="check"/>
                        <IoChevronUpOutline className="up"/>
                    </Middle_page_top>
                    <Birthday>For son's birthday</Birthday>
                    <Card>
                        <Card_photo src="https://img.freepik.com/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-model-sexy-modern-man-dressed-elegant-beige-suit-fashion-male-posing-studio-near-blue-wall_158538-24031.jpg?w=2000"/>
                        <Card_title>
                        Sneakers for boys Adidas GZ0648, blue, mesh, size 35
                        </Card_title>
                        <Loading_big>
                            <Loading_blue></Loading_blue>
                        </Loading_big>
                        <Price_div>
                            <p className="pleft">$2,542 raised</p>
                            <p className="pright">$8.558 left</p>
                        </Price_div>
                    </Card>
                    <Card>
                        <Card_photo src="https://img.freepik.com/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-model-sexy-modern-man-dressed-elegant-beige-suit-fashion-male-posing-studio-near-blue-wall_158538-24031.jpg?w=2000"/>
                        <Card_title>
                        Sneakers for boys Adidas GZ0648, blue, mesh, size 35
                        </Card_title>
                        <Loading_big>
                            <Loading_blue></Loading_blue>
                        </Loading_big>
                        <Price_div>
                            <p className="pleft">$2,542 raised</p>
                            <p className="pright">$8.558 left</p>
                        </Price_div>
                    </Card>
                </Small_middle_page>
                <Small_middle_page>
                    <Middle_page_top>
                        <Middle_top_photo src="https://img.freepik.com/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-model-sexy-modern-man-dressed-elegant-beige-suit-fashion-male-posing-studio-near-blue-wall_158538-24031.jpg?w=2000"/>
                        <Middle_top_word>Cody Fisher</Middle_top_word>
                        <BsCheckCircleFill className="check"/>
                        <IoChevronUpOutline className="up"/>
                    </Middle_page_top>
                    <Birthday>For son's birthday</Birthday>
                    <Card>
                        <Card_photo src="https://img.freepik.com/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-model-sexy-modern-man-dressed-elegant-beige-suit-fashion-male-posing-studio-near-blue-wall_158538-24031.jpg?w=2000"/>
                        <Card_title>
                        Sneakers for boys Adidas GZ0648, blue, mesh, size 35
                        </Card_title>
                        <Loading_big>
                            <Loading_blue></Loading_blue>
                        </Loading_big>
                        <Price_div>
                            <p className="pleft">$2,542 raised</p>
                            <p className="pright">$8.558 left</p>
                        </Price_div>
                    </Card>
                    <Card>
                        <Card_photo src="https://img.freepik.com/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-model-sexy-modern-man-dressed-elegant-beige-suit-fashion-male-posing-studio-near-blue-wall_158538-24031.jpg?w=2000"/>
                        <Card_title>
                        Sneakers for boys Adidas GZ0648, blue, mesh, size 35
                        </Card_title>
                        <Loading_big>
                            <Loading_blue></Loading_blue>
                        </Loading_big>
                        <Price_div>
                            <p className="pleft">$2,542 raised</p>
                            <p className="pright">$8.558 left</p>
                        </Price_div>
                    </Card>

                </Small_middle_page>
            </Small_main_page>
           }
           <div>
    
    </div>

                <MobileCalendar>
                    <Accordion expanded style={{ background: "aliceblue",paddingTop: "20px", position:"inherit", boxShadow: "none", paddingBottom: "15px;" }}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                            <Typography>
                                <Middle_page_top>
                                    <Middle_top_photo src="https://s3-alpha-sig.figma.com/img/b296/2adf/6b1cae8f3518b15bc334f6e50dab65f4?Expires=1665360000&Signature=Zw-ESPSJAp9e1JeamqK~aIfiJpME-~1PYu2ZE4MeNziYq9KtzSQEkE3PaDqRXKpM54Odj-TYEvjDLVw~jcJCtjbq7EYfQjsanYg9WYXfdcE1sD7cQj4O1sN-050QXWTfnyCIzx~PCTguoTLuffRCsJYw84jJ66zJZc5S4eMrg99rXbr1pqzt6PYHYg29N~cFGZYplsRMDmKGbZUUfxaU5phlkTzFTmNShYjggk6xD56x3bgtypi5nfWglzyupdIjXvddvg8ouwEoZkBXsJO3a9Rnk8z207KfNJ9jH5jvvRq-rhDL1ztlQB82XRY630OxBlpjz5Ms6SnO18p0LQOjAA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                                    <Middle_top_word>Cody Fisher</Middle_top_word>
                                    <BsCheckCircleFill className="check"/>
                                </Middle_page_top>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{ background: "aliceblue" }}>
                            <Typography>
                                <Birthday>For son's birthday</Birthday>
                                    <Card>
                                        <Card_photo src="https://s3-alpha-sig.figma.com/img/bab9/ddf9/d36e1495c54bc1a11e4978d73671aea9?Expires=1665360000&Signature=SF12~MS1Ycpv8OnJoAOI1qUL8~DHDlxMIR7l25fkth82SgJbcN-hmLGBLaBRKxSlzWp9hU83u36h1mcLvpkouOZxKsiO2iKhIPwCtP32p94NIE3zLBpAY3aKOgtdyDInrUc4lfkP8q6evqlh4VYig6QyQcej0XVsh-imqdqPDE7p1tbUxA8NW5xxESFSqgH0NC9XuBGQiCbXE~wjX~hln6I5R1r6y7GtYYyy~s6Ka50bolikrz6KLRYhkZP5lQCDlJ8gewUb1KKjwgg1FngxhkE-6-NCIp1gFjr3JCZrsxVxgDCsqEln7-URsnnOoWvvII8BeXVEruzeOU2q0bsEgA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                                        <Card_title>
                                            Sneakers for boys Adidas GZ0648, blue, mesh, size 35
                                        </Card_title>
                                        <Loading_big>
                                        <Loading_blue></Loading_blue>
                                        </Loading_big>
                                        <Price_div>
                                            <p className="pleft">$2,542 raised</p>
                                            <p className="pright">$8.558 left</p>
                                        </Price_div>
                                    </Card>
                                    <Card>
                                        <Card_photo src="https://s3-alpha-sig.figma.com/img/df1e/4947/51e248dfbb00f96b8b62c3d545de820a?Expires=1665360000&Signature=ZnV9DmSWYLFKdda5GPEibN-W4fIHX6aqXGLGbiZKhhcZZyTt~pGWNgJDfqq-Fw0GQlEIO5qQS4RZTkxuRTZsq0ZsYz-eNuVCibFjneCwxQ6v0NnkvZZnUq7Cnj6vS-vMHGESXXvczYhuLvjf-c17FcN2oQ3fk-AN22OHT58zYt6x1gV8J5BKuU6ah7iGQI5HMNX-hN1fe7ioROp~Yl1WPuAAREkrCLv8KzWtcJJQsKKd61IPeJtw-s2scoZwTiv6acvNRhTzehMc2NkPt6~6kVPyyFSqVeYfP2IkzMivAZz5Blr93q4pyQ4yo2-KXuFAGysEamWhSRwe3pAaQpUSVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                                        <Card_title>
                                            Sneakers for boys Adidas GZ0648, blue, mesh, size 35
                                        </Card_title>
                                        <Loading_big>
                                        <Loading_blue></Loading_blue>
                                        </Loading_big>
                                        <Price_div>
                                            <p className="pleft">$2,542 raised</p>
                                            <p className="pright">$8.558 left</p>
                                        </Price_div>
                                    </Card>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded style={{ background: "aliceblue", boxShadow: "none" }}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        
                        >
                            <Typography>
                                <Middle_page_top>
                                    <Middle_top_photo src="https://s3-alpha-sig.figma.com/img/05cf/540e/f9953449a469d519cab6d0aed5e02023?Expires=1665360000&Signature=CxJQa2OQ76JCvy4NkF9bASItXCCHSLJUsmpnSsMDxQbDtqsIimlUA5tDkNtUL6y3QZuRVw9IDbJ3YjpkA2JGP9kVsFs~IG0X5fQd5poYqFJNOLzKDkBEqs-YnkyUiYfT12yt6NHvkYUxO6CFxT4VtT-ARky4IxITkx0Wv3CY6XqQlfwSq9mfuG2HQTEvLyQzdVMOhrD0XBUfcSBWfo1oqekZ00FlTvU78SoolBkgh7exO7HosS4R8ycF8KZveY14NTDqCmlHfFfxj5NzPhBivR0~~1KNqinKN-vh0panGDmyXKVTs6Ai1jIQJOQ3vqH4yciW76KliGdDfULSXI5Rgg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                                    <Middle_top_word>Charlyn Kitchen</Middle_top_word>
                                    <BsCheckCircleFill className="check"/>
                                </Middle_page_top>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{ background: "aliceblue" }}>
                            <Typography>
                                <Birthday>For son's birthday</Birthday>
                                    <Card>
                                        <Card_photo src="https://s3-alpha-sig.figma.com/img/c7d0/94b8/f7a79cec1ce11b80662d8a8d0f1d0c49?Expires=1665360000&Signature=aFiqkqWq6TL0hBee09vOJs-WujxfC3eoa3GlCszilbnL5EY9ofvsY-qP1G1ybZSbvPApjvOoEO7W22LRroN8PDSkVyYHjtWatp30ZX82fJTdLL~nIoqPLBg2tBwiU4dHzBGHnkXWF1mZ2sBy08tFwyVHlGMnOAFv0NgebE~qOZgPudngw-QNmZSpv8Li4WEXCJpnAEIsmJ2-DD98njmkuwGUms2d~p2VDYg76hPADBcmwCF2d8WSHzrO8zypgqphfqzcWWGrte0qUWXpJg84H~NOAeN2Dv-cRB6HkpsTx4bwd5VbRyXWqgDZhkdpVBHW~bjHMdpK4cZHbwK0QsDO6w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                                        <Card_title>
                                            Sneakers for boys Adidas GZ0648, blue, mesh, size 35
                                        </Card_title>
                                        <Loading_big>
                                        <Loading_blue></Loading_blue>
                                        </Loading_big>
                                        <Price_div>
                                            <p className="pleft">$2,542 raised</p>
                                            <p className="pright">$8.558 left</p>
                                        </Price_div>
                                    </Card>
                                    <Card>
                                        <Card_photo src="https://s3-alpha-sig.figma.com/img/7a13/853d/5d0d146ae7a6e4682bc61537b7b633d4?Expires=1665360000&Signature=L8HGJ-bGQZ~0ftE0Y4wVuz~GkSb-a-qvgZKR65wV8CnIvBCMaZOyd4TkQfDePyKk1q6-usYss9-Bmq7L0X1Tu6Qb-4C~F967nZ8VdFwpfyRAddYmIFnK5Zm6Kz4YVgC42pPKKCjcbbgEmODx5WEnrZ1xeL4h42TjYeG-kI2dJ8Vgm3rU0cg3HwQF7M4u-nnGkTbpCyGWIqSw6vv5WvM6gLvIe3l6Vs9hg14mn2-cJUXx7zKO5OZKVjm9GnaUQhma-qDKlVWnXhXYBbkTh-uoDq87evaiON7LVXbf~UEck8VJxZe7lld2SkmHYi4nzPk8QnDcj~KEAp4Th3C75jVW4g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                                        <Card_title>
                                            Sneakers for boys Adidas GZ0648, blue, mesh, size 35
                                        </Card_title>
                                        <Loading_big>
                                        <Loading_blue></Loading_blue>
                                        </Loading_big>
                                        <Price_div>
                                            <p className="pleft">$2,542 raised</p>
                                            <p className="pright">$8.558 left</p>
                                        </Price_div>
                                    </Card>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </MobileCalendar>





           <Modal
                overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
                overlayOpacity={0.55}
                overlayBlur={3}
                opened={opened}
                onClose={() => setOpened(false)}
                >
                    <Small_top_p>Subscribe wishes for 8 June 2020</Small_top_p>
                    <Accordion style={{ background: "aliceblue" , boxShadow: "none", paddingBottom: "15px;" }}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                            <Typography>
                                <Middle_page_top>
                                    <Middle_top_photo src="https://s3-alpha-sig.figma.com/img/b296/2adf/6b1cae8f3518b15bc334f6e50dab65f4?Expires=1666569600&Signature=V9FAFABcI3qaW60lHQCpaddUwWeyds66JOci8VsMJZlM51899mMh~l8g39amRA7ET0uHpbbCdg7YxDLE-aCewwhtzMcns6i-mmdJvQtKgkzLioHXSmJ4SBSlFQq0s9gvlutSDWIedTBPlcsE--9BeQe-SnIqeCKuyGWLIywjYGbVaNYzQfCq1lv0O9hfcZKOrFG3OuTHtfkOYbA43RsU~9O5wfg88kEbruSmHQEA2TNooXcKVCJZz1efKkKblnMdVxhYl6O4iZoVvNGacUhm9Khtzr-vFHL6TMLOvh324lWzhj9gtbMOQOKYAlRP3Kuz-YL6~UPz1ewg1-x~A6nZqA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                                    <Middle_top_word>Cody Fisher</Middle_top_word>
                                    <BsCheckCircleFill className="check"/>
                                </Middle_page_top>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{ background: "aliceblue" }}>
                            <Typography>
                                <Birthday>For son's birthday</Birthday>
                                    <Card>
                                        <Card_photo src="https://s3-alpha-sig.figma.com/img/bab9/ddf9/d36e1495c54bc1a11e4978d73671aea9?Expires=1666569600&Signature=TXPOy6t81~ppVugOR~nrfcrC9~97DYennAv~6uqN7P~b7uDwyZgB6Dsv~NHbJMK10wcZ6pslvFNoW6EvBdIva9qW2qqd~P7WuOco6g6m1axQt0sT~nTdJXP15rXgI8TIIICDcO0YNdHSnUcGOvdKbA4xe0SW96XRgYTO7di11nDsOYUhg8CaGf6q5vnZDdtp5f2uG955bV-c-Z5~Z9p7EiekRJcRdl9Lta9eSU1UA3bmk9c0jfJzKpmkDgYXQuKde5aOgplSTtu0IQ1wVnXuzpmYLqLng3QvRmQpiSUu5NQW9fzqTIH-psB5GZl8LxBRHefsp2R2QzTO5eqpxM0i2w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                                        <Card_title>
                                            Sneakers for boys Adidas GZ0648, blue, mesh, size 35
                                        </Card_title>
                                        <Loading_big>
                                        <Loading_blue></Loading_blue>
                                        </Loading_big>
                                        <Price_div>
                                            <p className="pleft">$2,542 raised</p>
                                            <p className="pright">$8.558 left</p>
                                        </Price_div>
                                    </Card>
                                    <Card>
                                        <Card_photo src="https://s3-alpha-sig.figma.com/img/df1e/4947/51e248dfbb00f96b8b62c3d545de820a?Expires=1666569600&Signature=M06YIaSYrNevSMygLd6LwyZETF1gi1UQb1oaKehnQrSsmcAr1p7D8c8MRV0GXNgSGfvX7KMhb5vpIOCekHjYCsAO7JRNMckuYZVd4Z19fREzEj8V15QknI7O0MHQ184tjoUJ1wfP3-SZIbWmKqRow4flYfUwpeWxQpfhieq3H3NMSNIgr-KPOq3xG7dPn6DCTljFg40dJ6fYz9DyMW8MeZoPT~bLSOnf0xLlx~ZpmSdwFB2-XJDkLzQwq0uNQxLRIUxUvk~qHHgLX7-G6OPTa-HeyvtWAMWwyjKM-CGz1LY-zREwgY1433A5uID1fTdkbbR~4Xfe7mc150gpCsJ0Cw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                                        <Card_title>
                                            Sneakers for boys Adidas GZ0648, blue, mesh, size 35
                                        </Card_title>
                                        <Loading_big>
                                        <Loading_blue></Loading_blue>
                                        </Loading_big>
                                        <Price_div>
                                            <p className="pleft">$2,542 raised</p>
                                            <p className="pright">$8.558 left</p>
                                        </Price_div>
                                    </Card>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion style={{ background: "aliceblue" , boxShadow: "none" }}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        
                        >
                            <Typography>
                                <Middle_page_top>
                                    <Middle_top_photo src="https://s3-alpha-sig.figma.com/img/05cf/540e/f9953449a469d519cab6d0aed5e02023?Expires=1666569600&Signature=OHXxeu78pzT7jnrLU5FjfKzgKQIC6FJKuoVHJKtKjxacqrVS523h0RGxVbVLTc56mbFtx02ryUxODlsT2JUX7YEoU~nU9DB2WPAUTL~QIg4IlRAnmkfvi38vVjgrXJWALYMAeEHdDj1udXGndL1ks7HZb4OuUJQ86GPJSk2QcJWCFDofMpI2JEgA35jVV7lQ8AoiWU4gLRe-M1iKWTd8HJikAOI6hi55FJcDT5bsuXQFJnYuGqh6hPDALfLPT7kd5WL91GjftxXNyyK62w8M0Kkv~P54FzKs1tYbpZW8TJNVJDAhZ-aXm8Zs3tqlhz18RKvBOfsYI0EbrQArAfu27g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                                    <Middle_top_word>Charlyn Kitchen</Middle_top_word>
                                    <BsCheckCircleFill className="check"/>
                                </Middle_page_top>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{ background: "aliceblue" }}>
                            <Typography>
                                <Birthday>For son's birthday</Birthday>
                                    <Card>
                                        <Card_photo src="https://s3-alpha-sig.figma.com/img/c7d0/94b8/f7a79cec1ce11b80662d8a8d0f1d0c49?Expires=1666569600&Signature=eWYXzXl2Tc18kmt2gZZYdKAHa3QNtEnXhmIHOJVXTkz1q91KPRueARh0IQF~Ts1F~8vpydWu40hcFWwDr0BUcccyVMStD1-T3DkulutsbbPD6AEsGpP9CbxTFlr5MRfbCJXhVS-guG9gP0vr3OoEmn~Iwm3U3JGRjW3D~RPjEP6hA0UW2qwDM8LE~JvgAHdxKwnMUI7mmvowVKDP0sD-kC9x2n3aeCSSaFEtXayDlWbVU850jr0I6XHxqxTg~EXeksEBug-cMiKqFLFFC1RiKmSsb7sGM7lLvcw7Y1j6E9jsWxqEFc8DT4ESSodjdeC~J61lOqyIxheEhJ7g8Mmc-g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                                        <Card_title>
                                            Sneakers for boys Adidas GZ0648, blue, mesh, size 35
                                        </Card_title>
                                        <Loading_big>
                                        <Loading_blue></Loading_blue>
                                        </Loading_big>
                                        <Price_div>
                                            <p className="pleft">$2,542 raised</p>
                                            <p className="pright">$8.558 left</p>
                                        </Price_div>
                                    </Card>
                                    <Card>
                                        <Card_photo src="https://s3-alpha-sig.figma.com/img/7a13/853d/5d0d146ae7a6e4682bc61537b7b633d4?Expires=1666569600&Signature=Pby9HfuPPskSHn7q2NFSpko4SN8R0pcrCdSHUwuP9M7rzOSdTBs9zVb-YyFyyAHQDKcPldaURIxMRjuW4Y-i1eggXiJxuBCWLqJ68UM7n-wlLqcfZBcim4k2YZeP7Z7hXhotOHQMTlu8PtF0ne7ijW9jJgvJnlwc~rOuPcwrOeYlygR-ajcKeWE6-DrbmV-Dt7WFQQCeRxNSDIRHfslWTDX6qTfeNOkpNKlUk3JcCMt7l0Lfgz-QZYI1wU~Yk5bCt98Bj~uIbg5f9c0ZTKhVBjNTesnvEB72yz-Na-MeqhegMv23eGpudyIORiZQW4Om0V2ml2G0dMKpiBnrv6Rzfw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                                        <Card_title>
                                            Sneakers for boys Adidas GZ0648, blue, mesh, size 35
                                        </Card_title>
                                        <Loading_big>
                                        <Loading_blue></Loading_blue>
                                        </Loading_big>
                                        <Price_div>
                                            <p className="pleft">$2,542 raised</p>
                                            <p className="pright">$8.558 left</p>
                                        </Price_div>
                                    </Card>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
               
            </Modal>
        </Mainpage>
 )
}

export default Calendar;