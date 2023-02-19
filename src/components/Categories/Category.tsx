import * as React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

interface ICategory {
  id: number
  img: string
  title: string
  cat: string
}

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const ImageContainer = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const InfoContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    color: orange;
    margin-bottom: 20px;
`
const Button = styled.button`
    border: none;
    background-color: #fff;
    color: orange;
    padding: 10px;
    cursor: pointer;
    font-weight: 600;
`
const Category: React.FunctionComponent<ICategory> = (props) => {
  const { t } = useTranslation();
  return (
    <Container>
        <ImageContainer src = {props.img}/>
        <InfoContainer>
            <Title>{props.title}</Title>
            <Button>{t('shopNow')}</Button>
        </InfoContainer>
    </Container>
  );
};

export default Category;
