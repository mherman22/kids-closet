import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import Badge from '@mui/material/Badge/Badge';
import React from 'react';
import styled from 'styled-components';

export interface NavbarProps {
  language: string
  logoName: string
  signUpString: string
  signInString: string
}

const Container = styled.div`
    height:60px;
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`
const SearchItems = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`
const Input = styled.input`
  border:none;
`
const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Logo = styled.h1`
  font-weight: bold;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`

const Navbar: React.FunctionComponent<NavbarProps> = ({ language, logoName, signInString, signUpString }) => {
  return (
    <Container>
      <Wrapper>
        <Left><Language>{language}</Language>
          <SearchItems>
            <Input />
            <Search style={{ color: 'gray', fontSize: 16 }}/>
          </SearchItems>
        </Left>
        <Center><Logo>{logoName}</Logo></Center>
        <Right>
          <MenuItem>{signUpString}</MenuItem>
          <MenuItem>{signInString}</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
