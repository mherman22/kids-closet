import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import * as React from 'react';
import styled from 'styled-components';

export interface ArrowProps {
  direction: string
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: coral;
    position: relative;
`
const Arrow = styled.div<ArrowProps>`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
`
const Wrapper = styled.div`
    height: 100%;
`
const Slide = styled.div`
    width: 100vh;
    height: 100vh;
    display: flex;
    align-items: center;
`
const ImageContainer = styled.div`
    flex: 1;
    height:100%;
`
const Image = styled.img`
    height:80%;
`
const InformationContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const ImageSlider: React.FunctionComponent = () => {
  return (
        <Container>
            <Arrow direction='left'>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper>
                <Slide>
                    <ImageContainer>
                        <Image src='https://unsplash.com/photos/164_6wVEHfI' />
                    </ImageContainer>
                    <InformationContainer></InformationContainer>
                </Slide>
            </Wrapper>
            <Arrow direction='right'>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
  );
};

export default ImageSlider;
