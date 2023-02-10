import * as React from 'react';
import styled from 'styled-components';
import { popularProducts } from '../../data/data';
import Product from './Product';

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products: React.FunctionComponent = () => {
  return (
    <Container>
        {popularProducts.map((item) => (
            <Product id={item.id} img={item.img} key={item.id}/>
        ))}
    </Container>
  );
};

export default Products;
