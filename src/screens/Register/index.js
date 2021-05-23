import React from "react";
import Particles from "../../components/Particles";
import {
  Container,
  Modal,
  Center,
  Title,
  Input,
  Form,
  Name,
  Email,
} from "./styles";
import { TextField } from "@material-ui/core";

function Register() {
  return (
    <Particles>
      <Container>
        <Modal>
          <Center>
            <Title>Register</Title>
          </Center>

          <Form>
            <Center>
              <Name>
                <TextField label="Name" />
              </Name>
            </Center>
            <Center>
              <Email>
                <TextField label="Email" />
              </Email>
            </Center>
          </Form>
        </Modal>
      </Container>
    </Particles>
  );
}

export default Register;
