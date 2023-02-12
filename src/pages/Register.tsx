import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: #d4ccbc;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const AgreeToTerms = styled.span`
    font-size: 14px;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 40%;
    border: 1px solid orange;
    padding: 15px 20px;
    cursor: pointer;
    color: white;
    background-color: #375dda;

    &:hover {
    background-color: orange;
  }
`

const Register: React.FunctionComponent = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE NEW ACCOUNT</Title>
            <Form>
                <Input placeholder='first name'/>
                <Input placeholder='last name'/>
                <Input placeholder='email'/>
                <Input placeholder='phonenumber'/>
                <Input placeholder='address'/>
                <Input placeholder='password'/>
                <Input placeholder='confirm password'/>
                <AgreeToTerms>
                    I consent to processing of my personnal data in accordance to the <b>PRIVACY POLICY.</b>
                </AgreeToTerms>
                <Button>REGISTER</Button>
            </Form>
        </Wrapper>
    </Container>
  );
};

export default Register;
