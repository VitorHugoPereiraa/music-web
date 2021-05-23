import styled from "styled-components";



export const Container = styled.div`
  background-image: linear-gradient(#ed8aae, #7bbfc8);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .Wobble{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
}
.animate{
  z-index: 2;

}
  .error-message {
    font-size: 15px;
    color: red;
  }
  a{
    text-decoration: none;
    color: #7bbfc8;
  }
  .container-input{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .container-icon{
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ed8aae;
    border-radius: 10px 0px 0px 10px;
    color: #fff;
    cursor: pointer;
  }
  
`;

export const Modal = styled.div`
  width: 42%;
  height: 70vh;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  font-family: "Roboto";
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media(max-width: 360px) {
    width: 90%;
    height: 90%;
  }
  @media(max-width: 480px) {
    width: 90%;
    height: 90%;
  }
  @media(max-width: 768px) {
    width: 80%;
    height: 90%;
  }
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h2`
  margin: 10px;
  font-size: 50px;
  color: #7bbfc8;
`;
export const Input = styled.input``;
export const Form = styled.div``;
export const Name = styled.div`
  margin: 10px;
  input {
    width: 220px;
    
  }
`;
export const Email = styled.div`
  margin: 10px;
  input {
    width: 220px;
  }
`;
export const Password = styled.div`
  margin: 10px;
  input {
    width: 220px;
    
  }
`;
export const ConfirmPassword = styled.div`
  margin: 10px;
  input {
    width: 220px;
    
  }
`;
export const ButtonSend = styled.button`
  border: 1.5px solid #ed8aae;
  background-color: transparent;
  padding: 10px 15px;
  width: 180px;
  border-radius: 10px;
  margin: 20px;
  cursor: pointer;
  font-size: 18px;
  color: #ed8aae;
  :hover {
    background-color: #ed8aae;
    color: #fff;
  }
`;
export const NavBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  justify-self: flex-start;
  z-index: 2;
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px;
  width: 100%;
  a{
    margin: 0 3%;
    font-size: 20px;
    cursor: pointer;
    color: white;
    font-family: "Roboto";
    :hover{
      border-bottom: 3px solid #7bbfc8;
    }
  }
`