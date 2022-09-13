import { Button1, Container, Title, ButtonSignUp ,Paragraph, Button2, ParagraphChek,Facebook, Goapp, Google, Apple, FacebookP, GoogleP,AppleP, ButtonOR, Dispno, Email, Password, InputChek } from './Autho.style'
import { BiX } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { FaApple, FaGoogle } from "react-icons/fa";
import { useState } from 'react';



function First({setShow, nextstep, nextsteplog}) {

    const[shower, setShower]= useState(false)

    const clickEmail = () =>{
        setShower(!shower)
    }
    
    const[password, setPassword] = useState('password')

    return (
        <Container style={{zIndex: '10', overflow: "hidden"}}>
            <Button1 onClick={() => { 
               let body = document.querySelector('body');
               body.setAttribute('style', 'overflow-y: scroll; overflow-x: hidden');
                setShow(false) }}><BiX style={{ fontSize: "20px" }} /></Button1>
            <Title>Sign Up</Title>
            <Paragraph>Already have account?<Button2 onClick={nextsteplog}>Log in</Button2></Paragraph>
            <Facebook>
                <BsFacebook style={{marginRight: '10px', fontSize:"22px", color:"white"}}/>
                <FacebookP>Facebook</FacebookP>
            </Facebook>
            <Goapp>
                <Google>
                    <FaGoogle style={{fontSize:"22px", color:"#3800B0", marginRight: '10px'}}/>
                    <GoogleP>Google</GoogleP>  
                </Google>
                <Apple>
                    <FaApple style={{color:"white", fontSize:"25px", marginRight: '10px'}}/>
                    <AppleP>Apple</AppleP>
                </Apple>
            </Goapp>
            <ButtonOR  onClick={clickEmail}>
                Or via email
            </ButtonOR>
            
             {
                shower ? (<Dispno>
                   <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                      <Email 
                       placeholder='Email' style={{width: '400px'}}/>
                   </div>
                   <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                      <Password
                       placeholder='Password' 
                       type={password ? 'password' : 'text'} style={{width: '400px'}}/>
                   </div>
                 <AiOutlineEye className='eye_button' onClick={() =>{setPassword(!password)}}
                 style={{float: 'right'}}/>
                 <div style={{width: '100%', display: 'flex', paddingLeft: '40px', paddingBottom: '12px'}}>
                   <InputChek type="checkbox" style={{ margin: '0'}}/>
                   <ParagraphChek style={{marginLeft: '10px'}}>I agree to the terms of use</ParagraphChek>
                 </div>
                <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                  <ButtonSignUp  onClick={nextstep}>Sign Up</ButtonSignUp>
                </div>

            </Dispno>) : ""
             }
        </Container>
    )
}

export default First;