import * as React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Header/Navbar';
import Announcement from '../components/Header/Announcement';
import Products from '../components/Products/Products';
import NewsLetter from '../components/Footer/NewsLetter';
import Footer from '../components/Footer/Footer';

const Container = styled.div`
    
`
const Title = styled.h1`
    margin: 20px;
`
const FilterCOntainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`
const OPtion = styled.option`
    
`

const ProductList: React.FunctionComponent = () => {
  return (
    <Container>
      <Navbar language={'EN'} logoName={'Kids Korner'} signUpString={'REGISTER'} signInString={'LOGIN'}/>
      <Announcement>Huge deals! Buy one and receive one for free!</Announcement>
      <Title>Dresses</Title>
      <FilterCOntainer>
        <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select>
                <OPtion disabled selected>Color</OPtion>
                <OPtion>Red</OPtion>
                <OPtion>Green</OPtion>
                <OPtion>Yellow</OPtion>
                <OPtion>Orange</OPtion>
                <OPtion>Black</OPtion>
                <OPtion>Teal</OPtion>
                <OPtion>Blue</OPtion>
                <OPtion>Green</OPtion>
            </Select>
            <Select>
                <OPtion disabled selected>Size</OPtion>
                <OPtion>XS</OPtion>
                <OPtion>S</OPtion>
                <OPtion>M</OPtion>
                <OPtion>L</OPtion>
                <OPtion>XL</OPtion>
                <OPtion>XXL</OPtion>
            </Select>
        </Filter>
        <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select>
                <OPtion selected>Newest</OPtion>
                <OPtion>Price (ascending)</OPtion>
                <OPtion>Price (descending)</OPtion>
            </Select>
        </Filter>
      </FilterCOntainer>
      <Products/>
      <NewsLetter/>
      <Footer/>
    </Container>
  );
};

export default ProductList;
