import { Birthday, Blue_div, Blue_top_div, Blue_loading_div,Vashed,Last_title, Left_buttons, Left_div, Left_image, Left_report, Main_page, Main_page_top, Middle_title, Photo, Right_div, Right_top_div, Top_title, Blue_button_div, Congratulate, Congratulate_button, Product, Product_part, Product_other, All_congrulation, Hbd, Hbd_title, Hbd_name, Hbd_footer, Photos, Hbday, Mcdonalds, Picture, Mcago, Freecofe, Bottom_div, Bottom_div_title, Bottom_div_show, HbdFooterYou } from "./Wish-pages.styled";
import watch from "../../style/icons/handwatch.png"
import { BsFacebook, BsTwitter, BsTelegram, BsWhatsapp } from 'react-icons/bs';
import { IoMailOutline, IoImageOutline, IoWarningOutline} from 'react-icons/io5';
import { RiLinksFill} from 'react-icons/ri';
import { HiOutlineFilter, HiBadgeCheck} from 'react-icons/hi';
import { BiLike} from 'react-icons/bi';
import { AiTwotoneLike} from 'react-icons/ai';
import { CgTrash} from 'react-icons/cg';
import { TbBrandTelegram, TbPencil, TbDotsCircleHorizontal} from 'react-icons/tb';
import { Carddata } from "../search/CardData"
import {
    Wrapper,
    ImgWrapper,
    ContentWrapper,
    Titles,
    UserWrapper,
    UserAbout,
    UserName,
    UserDesc,
    UserPhoto,
    PriceWrapper,
    Prices,
    LeftPrice,
    RightPrice,
    ProgressWrapper,
    GridBody,
  } from "../search/SearchCard.styled";
  import {
    Grid,
    Progress,
  
  } from "@mantine/core";
import { Right_three_div, Time_div, Time_div_p, Blue_left_div, Blue_right_div, Paragraph,Photoone,Phototwo,Right_blue_bottom,Right_blue_four,  Right_blue_div_fourRight_blue_div_four, Send_div, Send_div_photo, Button_send } from "./Add.styled";

function MyWishCompleted() {
    return(
        <Main_page>
            <Main_page_top>
             <Left_div>
                <Left_image src={watch}/>
                <Left_buttons>Share
                    <BsFacebook className="facebook"/>
                    <BsTwitter className="twitter"/>
                    <BsTelegram className="telegram"/>
                    <BsWhatsapp className="whatsapp"/>
                    <IoMailOutline className="mail"/>
                    <RiLinksFill className="link"/>
                </Left_buttons>
                <Left_report><IoWarningOutline className="warning"/>Report</Left_report>
             </Left_div>
             <Right_div>
                <Right_top_div>
                    <Top_title>
                        <Photo src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1"/>
                        <Birthday>
                        Bradley Cooper <span style={{color:"#8E93AF"}}>for</span> birthday <span style={{color:"#8E93AF"}}>on</span> 25.10.2022
                        </Birthday>
                        <TbDotsCircleHorizontal className="notification"/>
                    </Top_title>
                    <Middle_title>Apple Watch Graphite Stainless Steel Case with Milanese Loop</Middle_title>
                    <Last_title>
                        The stainless steel case is durable and polished to a shiny, mirror-like finish.
                        The Milanese Loop is made from a smooth stainless steel mesh that’s fully magnetic,
                        so it’s infinitely adjustable for a perfect fit.
                    </Last_title>
                </Right_top_div>
                <Right_blue_four>
                    <Blue_div>
                       <Blue_right_div>
                            <p className="praise">$2 542 total raised</p>
                            <p className="hundred">120%</p>
                            <p className="bradley">Bradley Cooper reached his goal (10000$) <br/>and now he can get the gift he dreamed of.</p>
                       </Blue_right_div>
                       <Blue_left_div>✨</Blue_left_div>
                    </Blue_div>
                    <Top_title>
                        <Photo src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1"/>
                        <Vashed>Thank your friends and show the report</Vashed>
                    </Top_title>
                    <Send_div>
                        <Send_div_photo>
                            <IoImageOutline className="imgicon"/>
                            <p className="attach">Attach a photo</p>
                            <img className="imgtag" src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1"/>
                            <img className="imgtag" src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1"/>
                            <CgTrash className="trashone"/>
                            <CgTrash id="trashone"/>
                        </Send_div_photo>
                        <Button_send>Send</Button_send>
                    </Send_div>
                </Right_blue_four>
                <All_congrulation>
                    All congratulations <span className="eight">8</span>
                    <HiOutlineFilter className="filterclass"/>
                </All_congrulation>
                <Hbd>
                    <Hbd_title>
                        <Photo src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1"/>
                        <p className="title">You <span className="give">give</span> ☕ <span className="give">$10</span></p>
                        <p className="minago">2 min ago •••</p>
                    </Hbd_title>
                    <Hbd_name>Happy birthday bro! 
                        <span className="twofive">258 <BiLike className="like"/></span>
                    </Hbd_name>
                    <HbdFooterYou>
                    <Photos src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1"/>
                    <p className="thank">Thank you, brother from another mother</p>
                    <p className="twominag">2 min ago</p>
                    </HbdFooterYou>
                </Hbd>
                <Hbd>
                    <Hbd_title>
                        <Photo src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1"/>
                        <p className="title">Eleanor Pena <span className="give">gave</span> ☕ <span className="give">$10</span></p>
                        <p className="minago">2 min ago •••</p>
                    </Hbd_title>
                    <Hbd_name>Happy bday! 
                        <span className="twofive">257 <AiTwotoneLike className="like"/></span>
                    </Hbd_name>
                    <Hbd_footer>
                    <Photos src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1"/>
                    <p className="thanks">Write an answer</p>
                    <TbBrandTelegram className="twominago"/>
                    </Hbd_footer>
                </Hbd>
                <Hbd>
                    <Hbd_title>
                        <Photo src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1"/>
                        <p className="title">Eleanor Pena <span className="give">gave</span> ☕ <span className="give">$10</span></p>
                        <p className="minago">2 min ago •••</p>
                    </Hbd_title>
                    <Hbd_name>Happy bday! 
                        <span className="twofive">257 <BiLike className="like"/></span>
                    </Hbd_name>
                    <Hbd_footer>
                    <Photos src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1"/>
                    <p className="thanks">Write an answer</p>
                    <TbBrandTelegram className="twominago"/>
                    </Hbd_footer>
                </Hbd>
                <Hbd>
                    <Hbd_title>
                        <Photo src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1"/>
                        <p className="title">Eleanor Pena <span className="give">gave</span> ☕ <span className="give">$10</span></p>
                        <p className="minago">2 min ago •••</p>
                    </Hbd_title>
                    <Hbd_name>Happy bday! 
                        <span className="twofive">257 <BiLike className="like"/></span>
                    </Hbd_name>
                    <Hbd_footer>
                    <Photos src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1"/>
                    <p className="thanks">Write an answer</p>
                    <TbBrandTelegram className="twominago"/>
                    </Hbd_footer>
                </Hbd>
                <Hbd>
                    <Hbd_title>
                        <Photo src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1"/>
                        <p className="title">Eleanor Pena <span className="give">gave</span> ☕ <span className="give">$10</span></p>
                        <p className="minago">2 min ago •••</p>
                    </Hbd_title>
                    <Hbd_name>Happy bday! 
                        <span className="twofive">257 <BiLike className="like"/></span>
                    </Hbd_name>
                    <Hbd_footer>
                    <Photos src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1"/>
                    <p className="thanks">Write an answer</p>
                    <TbBrandTelegram className="twominago"/>
                    </Hbd_footer>
                </Hbd>
                <Hbd>
                    <Hbd_title>
                        <Photo src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1"/>
                        <p className="title">Eleanor Pena <span className="give">gave</span> ☕ <span className="give">$10</span></p>
                        <p className="minago">2 min ago •••</p>
                    </Hbd_title>
                    <Hbd_name>Happy bday! 
                        <span className="twofive">257 <BiLike className="like"/></span>
                    </Hbd_name>
                    <Hbd_footer>
                    <Photos src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1"/>
                    <p className="thanks">Write an answer</p>
                    <TbBrandTelegram className="twominago"/>
                    </Hbd_footer>
                </Hbd>
                <Hbd>
                    <Hbd_title>
                        <Photo src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1"/>
                        <p className="title">Eleanor Pena <span className="give">gave</span> ☕ <span className="give">$10</span></p>
                        <p className="minago">2 min ago •••</p>
                    </Hbd_title>
                    <Hbd_name>Happy bday! 
                        <span className="twofive">257 <BiLike className="like"/></span>
                    </Hbd_name>
                    <Hbd_footer>
                    <Photos src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1"/>
                    <p className="thanks">Write an answer</p>
                    <TbBrandTelegram className="twominago"/>
                    </Hbd_footer>
                </Hbd>
                <Hbd>
                    <Hbd_title>
                        <Photo src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1"/>
                        <p className="title">Eleanor Pena <span className="give">gave</span> ☕ <span className="give">$10</span></p>
                        <p className="minago">2 min ago •••</p>
                    </Hbd_title>
                    <Hbd_name>Happy bday! 
                        <span className="twofive">257 <BiLike className="like"/></span>
                    </Hbd_name>
                    <Hbd_footer>
                    <Photos src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1"/>
                    <p className="thanks">Write an answer</p>
                    <TbBrandTelegram className="twominago"/>
                    </Hbd_footer>
                </Hbd>
             </Right_div>
            </Main_page_top>
            
        </Main_page>
    )
}
 
export default MyWishCompleted;