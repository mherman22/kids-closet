import * as React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1676030789370-5298ab95ecab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1400&q=60")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: #d4ccbc;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
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
const Link = styled.a`
    margin: 10px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login: React.FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <Container>
        <Wrapper>
            <Title>{t('LOGIN')}</Title>
            <Form>
                <Input placeholder='email address'/>
                <Input placeholder='password'/>
                <Button>{t('LOGIN')}</Button>
                <Link>{t('Forgot Password?')}</Link>
                <Link>{t('Wanna create a new account?')}</Link>
            </Form>
        </Wrapper>
    </Container>
  );
};

export default Login;
