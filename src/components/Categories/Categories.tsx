import * as React from 'react';
import styled from 'styled-components';
import { categories } from '../../data/data';
import Category from './Category';

const Container = styled.div`
    display: flex;
    padding: 20px;
`

const Categories: React.FunctionComponent = () => {
  return (
    <Container>
        {categories.map((item) => (
            <Category key={item.id} id={item.id} img={item.img} title={item.title} cat={item.cat}/>
        ))}
    </Container>
  );
};

export default Categories;
