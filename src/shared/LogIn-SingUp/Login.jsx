import { Button1, Container, Title, ButtonSignUp, Paragraph, Button2, Facebook, Goapp, Google, Apple, FacebookP, GoogleP, AppleP, ButtonOR, Dispno, Email, Password, ForgotPassword } from './Autho.style'
import { BiX } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { FaApple, FaGoogle } from "react-icons/fa";
import { useState } from 'react';



function Login({ setShow, nextsteplog, backSign, setShowes }) {

    const [shower, setShower] = useState(false)

    const clickEmail = () => {
        setShower(!shower)
    }


    const [password, setPassword] = useState('password')

    return (
        <Container style={{ zIndex: '10' }}>
            <Button1 onClick={() => {
                let body = document.querySelector('body');
                body.setAttribute('style', 'overflow-y: scroll; overflow-x: hidden');
                setShow(false) || setShowes(false)
            }}><BiX style={{ fontSize: "20px" }} /></Button1>
            <Title>Log in</Title>
            <Paragraph>Not a user?<Button2 onClick={backSign}>Sign up</Button2></Paragraph>
            <Facebook>
                <BsFacebook style={{ fontSize: "22px", color: "white", marginRight: '10px' }} />
                <FacebookP>Facebook</FacebookP>
            </Facebook>
            <Goapp>
                <Google>
                    <FaGoogle style={{ fontSize: "22px", marginRight: '10px', color: "#3800B0" }} />
                    <GoogleP>Google</GoogleP>
                </Google>
                <Apple>
                    <FaApple style={{ color: "white", fontSize: "25px", marginRight: '10px' }} />
                    <AppleP>Apple</AppleP>
                </Apple>
            </Goapp>
            <ButtonOR onClick={clickEmail}>
                Or via email
            </ButtonOR>

            {
                shower ? (<Dispno>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <Email
                            placeholder='Email' />
                    </div>
                    <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <Password
                            placeholder='Password'
                            type={password ? 'password' : 'text'} />
                        <AiOutlineEye className='eye_button' onClick={() => { setPassword(!password) }}
                            style={{position: 'absolute'}} />

                    </div>

                    <ForgotPassword onClick={nextsteplog}>Forgot password</ForgotPassword>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <ButtonSignUp>Log in</ButtonSignUp>
                    </div>

                </Dispno>) : ""
            }
        </Container>
    )
}

export default Login;