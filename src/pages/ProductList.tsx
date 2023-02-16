import * as React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Header/Navbar';
import Announcement from '../components/Header/Announcement';
import Products from '../components/Products/Products';
import NewsLetter from '../components/Footer/NewsLetter';
import Footer from '../components/Footer/Footer';
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation();
  return (
    <Container>
      <Navbar language={'EN'} logoName={'Kids Korner'} signUpString={'REGISTER'} signInString={'LOGIN'}/>
      <Announcement>{t('Huge deals! Buy one and receive one for free!')}</Announcement>
      <Title>{t('Dresses')}</Title>
      <FilterCOntainer>
        <Filter>
            <FilterText>{t('Filter Products:')}</FilterText>
            <Select>
                <OPtion disabled selected>{t('Color')}</OPtion>
                <OPtion>{t('Red')}</OPtion>
                <OPtion>{t('Green')}</OPtion>
                <OPtion>{t('Yellow')}</OPtion>
                <OPtion>{t('Orange')}</OPtion>
                <OPtion>{t('Black')}</OPtion>
                <OPtion>{t('Teal')}</OPtion>
                <OPtion>{t('Blue')}</OPtion>
                <OPtion>{t('Green')}</OPtion>
            </Select>
            <Select>
                <OPtion disabled selected>{t('Size')}</OPtion>
                <OPtion>{t('XS')}</OPtion>
                <OPtion>{t('S')}</OPtion>
                <OPtion>{t('M')}</OPtion>
                <OPtion>{t('L')}</OPtion>
                <OPtion>{t('XL')}</OPtion>
                <OPtion>{t('XXL')}</OPtion>
            </Select>
        </Filter>
        <Filter>
            <FilterText>{t('Sort Products:')}</FilterText>
            <Select>
                <OPtion selected>{t('Newest')}</OPtion>
                <OPtion>{t('Price (ascending)')}</OPtion>
                <OPtion>{t('Price (descending)')}</OPtion>
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
