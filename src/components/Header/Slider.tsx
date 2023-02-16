import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import * as React from 'react';
import styled from 'styled-components';
import mobile from '../../responsive';
import { sliderItems } from '../../data/data';
import { useTranslation } from 'react-i18next';

export interface ArrowProps {
  direction: string
}

export interface SliderProps {
  bg: string
}

export interface WrapperProps {
  slideIndex: number
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: 'none' })}
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
  opacity: 0.5;
  z-index: 2;
`
const Wrapper = styled.div<WrapperProps>`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`
const Slide = styled.div<SliderProps>`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`
const Image = styled.img`
  height:80%;
`
const InformationContainer = styled.div`
  flex: 1;
  padding: 50px;
`
const Title = styled.h1`
  font-size: 70px;
`
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`
const Button = styled.button`
  /* border: none; */
  background-color: #fff;
  color: orange;
  padding: 10px;
  cursor: pointer;
`;

const ImageSlider: React.FunctionComponent = () => {
  const { t } = useTranslation();
  const [sliderIndex, setSlideIndex] = React.useState(0);
  const handleClick = (direction: string): void => {
    if (direction === 'left') {
      setSlideIndex(sliderIndex > 0 ? sliderIndex - 1 : 2);
    } else {
      setSlideIndex(sliderIndex < 2 ? sliderIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction='left' onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={sliderIndex}>
        {sliderItems.map((sliderItem) => (
          <Slide bg={sliderItem.bg} key={sliderItem.id}>
            <ImageContainer>
              <Image src={sliderItem.img}/>
            </ImageContainer>
            <InformationContainer>
              <Title>{sliderItem.title}</Title>
              <Desc>{sliderItem.desc}</Desc>
              <Button>{t('SHOW NOW')}</Button>
            </InformationContainer>
          </Slide>
        ))}

      </Wrapper>
      <Arrow direction='right' onClick={() => handleClick('right')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default ImageSlider;
