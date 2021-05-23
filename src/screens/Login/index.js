import React, { useState } from "react";
import Particles from "../../components/Particles";
import { AiOutlineUser, AiOutlineEye, AiTwotoneEyeInvisible } from 'react-icons/ai';
import { BounceInDown, BounceInLeft, FadeIn } from 'animate-css-styled-components';
import { HiOutlineMail } from 'react-icons/hi';
import { FiKey } from 'react-icons/fi';
import generateToken from '../../utils/generateToken'
import {
  Container,
  Modal,
  Center,
  Title,
  Input,
  Form,
  Name,
  Email,
  Password,
  ConfirmPassword,
  ButtonSend,
  NavBar
} from "./styles";
import { TextField } from "@material-ui/core";
import firebase, { firestore } from "../../api/firebaseConfig";
import CryptoJS from 'crypto-js'
import dotenvJSON from '../../utils/dotenv.json'
import Animate from "animate-css-styled-components/lib/Animate";
function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);
  const [seePassword, setSeePassword] = useState(false)

  const login = async () => {
      console.log('oi')
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        setEmailError(null)
        setPasswordError(null)
        localStorage.setItem('auth-token', generateToken({id: response.user.uid}))
        window.location.href = '/dashboard'
      })
      .catch(err => {
        switch (err.code) {
          case 'auth/invalid-email':
          case 'auth/user-disable':
          case 'auth/user-not-found':
            setEmailError('*Email não encontrado')
            break
          case 'auth/wrong-password':
            setPasswordError('*Senha errada')
            break
        }
      })
  };

  return (
    <Particles>
      <Container>
      <Animate Animation={[FadeIn]}  duration="1s" delay="0.5s" className="animate" >
        <NavBar>
               <a href="/">Home</a>
               <a href="/login">Login</a>
               <a href="/register">Cadastro</a>
          </NavBar>
        </Animate>
        <Animate Animation={[BounceInDown]}  duration="0.8s" delay="0s" className='Wobble'>
          <Modal>
            <Center>
              <Title>Login</Title>
            </Center>

            <Animate Animation={[BounceInLeft]}  duration="0.8s" delay="0.5s" className='Wobble'>
              <Form>
               
                <Center>
                  <Email>
                    <p className="error-message">{emailError}</p>
                    <div className='container-input'>
                    <span className="container-icon">
                      <HiOutlineMail />
                    </span>
                    <TextField
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      label="Email"
                      type="email"
                    />
                    </div>
                  </Email>
                </Center>
                <Center>
                  <Password>
                    <p className="error-message">{passwordError}</p>
                    <div className='container-input'>
                    <span className="container-icon">
                      <FiKey/>
                    </span>
                    <TextField
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      label="Senha"
                      type={seePassword ? "text": "password"}
                    />
                    </div>
                  </Password>
                </Center>
                <Center>
                  <ButtonSend
                    onClick={() => {
                      login();
                    }}
                  >
                    Login
                  </ButtonSend>
                </Center>
                <Center>
                  <a href='/register'>Não possui uma conta ? </a>
                </Center>
              </Form>
            </Animate>
          </Modal>
        </Animate>
      </Container>
    </Particles>
  );
}

export default Login;
