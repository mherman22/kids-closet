import * as React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Header/Navbar';
import Announcement from '../components/Header/Announcement';
import Footer from '../components/Footer/Footer';
import { Add, Remove } from '@mui/icons-material';
import mobile from '../responsive';

export interface IProps {
  type1: string
}

export interface IColorProps {
  color: string
}

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: '10px' })}
`
const Title = styled.div`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopTexts = styled.div`
    ${mobile({ display: 'none' })}
`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`
const TopButton = styled.button<IProps>`
    padding: 10px;
    font-weight: 600;
    margin: ${(props) => props.type1 === 'filled' && 'none'};
    background-color: ${(props) => props.type1 === 'filled' ? 'black' : 'transparent'};
    color: ${(props) => props.type1 === 'filled' && 'white'};
    cursor: pointer;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: 'column' })}
`
const Info = styled.div`
    flex: 3;
`
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div<IProps>`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type1 === 'total' && '500'};
  font-size: ${(props) => props.type1 === 'total' && '24px'};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`
const ProductDetails = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
`
const Detail = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span`
    
`
const ProductID = styled.span`

`
const ProductColor = styled.div<IColorProps>`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
`
const ProductSize = styled.span`
    
`
const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: '5px 15px' })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: '20px' })}
`;

const ShoppingCart: React.FunctionComponent = () => {
  return (
    <Container>
      <Navbar language={'EN'} logoName={'Kids Korner'} signUpString={'REGISTER'} signInString={'LOGIN'}/>
      <Announcement>Huge deals! Buy one and receive one for free!</Announcement>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
            <TopButton type1='none'>CONTINUE SHOPPING</TopButton>
            <TopTexts>
                <TopText>Shopping List (0)</TopText>
                <TopText>WishList (0)</TopText>
            </TopTexts>
            <TopButton type1='filled'>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
            <Info>
                <Product>
                    <ProductDetails>
                        <Image src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60'/>
                        <Detail>
                            <ProductName><b>Name: </b>JACKET-LINEN</ProductName>
                            <ProductID><b>ID: </b>0937642556276</ProductID>
                            <ProductColor color='red'/>
                            <ProductSize><b>Size: </b>42</ProductSize>
                        </Detail>
                    </ProductDetails>
                    <PriceDetails>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>$ 30</ProductPrice>
                    </PriceDetails>
                </Product>
                <Hr/>
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem type1=''>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ 80</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type1=''>
                <SummaryItemText>Estimated Discount</SummaryItemText>
                <SummaryItemPrice>$ 5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type1=''>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>$ 5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type1='total'>
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>$ 80</SummaryItemPrice>
              </SummaryItem>
              <Button>CheckOut</Button>
            </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  );
};

export default ShoppingCart;
