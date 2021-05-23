import React, { useState } from "react";
import Particles from "../../components/Particles";
import { AiOutlineUser, AiOutlineEye, AiTwotoneEyeInvisible } from 'react-icons/ai';
import { BounceInDown, BounceInLeft } from 'animate-css-styled-components';
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
} from "./styles";
import { TextField } from "@material-ui/core";
import firebase, { firestore } from "../../api/firebaseConfig";
import CryptoJS from 'crypto-js'
import dotenvJSON from '../../utils/dotenv.json'
import Animate from "animate-css-styled-components/lib/Animate";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);
  const [seePassword, setSeePassword] = useState(false)
  const [seeConfirmPassword, setConfirmSeePassword] = useState(false)

  const verifyFields = () => {

    if (!name) return setNameError("*Este campo não pode ser vazio");
    setNameError(null);
    if (!email) return setEmailError("*Este campo não pode ser vazio");
    setEmailError(null);
    if (!password) return setPasswordError("*Este campo não pode ser vazio");
    setPasswordError(null);
    if (password.length < 8) {
      return setPasswordError("*Digite mais de 8 carácteres");
    }
    setPasswordError(null);

    if (!confirmPassword) {
      return setConfirmPasswordError("*Este campo não pode ser vazio");
    }
    setConfirmPasswordError(null);
    if (name < 3) {
      return setNameError("*Este campo não pode ter menos de 3 carácteres");
    }
    setNameError(null);

    if (password !== confirmPassword) {
      return setConfirmPasswordError("*Senhas diferentes");
    }

    setConfirmPasswordError(null);

    return true;
  };

  const createUser = async () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (response) => {
        setEmailError(null);
        setPasswordError(null);
        const userCollection = firestore.collection("users");
        const hash = CryptoJS.AES.encrypt(password, dotenvJSON.CRYPTO_KEY).toString();
        console.log(hash)
        userCollection.doc(response.user.uid).set({
          name: name,
          email: response.user.email,
          password: hash
        });
        localStorage.setItem('auth-token', generateToken({id: response.user.uid}))
        window.location.href = '/dashboard'
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
            return setEmailError("*Email não disponivel");
            break;
          case "auth/invalid-email":
            return setEmailError("*Email inválido");
            break;
          case "auth/weak-password":
            return setPasswordError("*Senha muito fraca");
            break;
        }
      });
  };

  return (
    <Particles>
      <Container>
        <Animate Animation={[BounceInDown]}  duration="0.8s" delay="0s" className='Wobble'>
          <Modal>
            <Center>
              <Title>Registrar</Title>
            </Center>

            <Animate Animation={[BounceInLeft]}  duration="0.8s" delay="0.5s" className='Wobble'>
              <Form>
                <Center>
                  <Name>
                    <p className="error-message">{nameError}</p>
                  <div className='container-input'>
                    <span className="container-icon">
                      <AiOutlineUser />
                    </span>
                  <TextField
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      label="Nome"
                    />
                  </div>
                  </Name>
                </Center>
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
                  <ConfirmPassword>
                    <p className="error-message">{confirmPasswordError}</p>
                    <div className='container-input'>
                    <span className="container-icon">
                      <FiKey/>
                    </span>
                    <TextField
                      value={confirmPassword}
                      label="Repita sua Senha"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      type={seeConfirmPassword ? "text": "password"}
                    />
                    </div>
                  </ConfirmPassword>
                </Center>
                <Center>
                  <ButtonSend
                    onClick={() => {
                      if (verifyFields() !== true) return;
                      createUser();
                    }}
                  >
                    Registrar
                  </ButtonSend>
                </Center>
                <Center>
                  <a href='/login'>Já possui uma conta ? </a>
                </Center>
              </Form>
            </Animate>
          </Modal>
        </Animate>
      </Container>
    </Particles>
  );
}

export default Register;
