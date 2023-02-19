import * as React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Header/Navbar';
import Announcement from '../components/Header/Announcement';
import NewsLetter from '../components/Footer/NewsLetter';
import Footer from '../components/Footer/Footer';
import mobile from '../responsive';
import { Add, RemoveCircle } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

export interface ColorProps {
  color: string
}

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: '10px', flexDirection: 'column' })}
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: '40vh' })}
`;

const InformationContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: '10px' })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Description = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: '100%' })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div<ColorProps>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 800;
`
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid orange;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`
const Button = styled.button`
  padding: 15px;
  border: 2px solid orange;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: orange;
  }
`

const SingleProductInformation: React.FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Navbar language={'EN'} logoName={'Kids Korner'} signUpString={'REGISTER'} signInString={'LOGIN'}/>
      <Announcement>{t('hugeDeals')}</Announcement>
      <Wrapper>
        <ImageContainer>
          <Image src='https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=1600'/>
        </ImageContainer>
        <InformationContainer>
          <Title>Jump Suit</Title>
          <Description>{t('productDescription')}</Description>
          <Price>$ 20.</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color:</FilterTitle>
              <FilterColor color='black'/>
              <FilterColor color='darkblue'/>
              <FilterColor color='gray'/>
            </Filter>
            <Filter>
              <FilterTitle>Size:</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveCircle/>
              <Amount>1</Amount>
              <Add/>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InformationContainer>
      </Wrapper>
      <NewsLetter/>
      <Footer/>
    </Container>
  );
};

export default SingleProductInformation;
