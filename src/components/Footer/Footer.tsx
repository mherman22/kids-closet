import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material';
import * as React from 'react';
import styled from 'styled-components';
import mobile from '../../responsive';
import { useTranslation } from 'react-i18next';

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: 'column' })}
  background-color: orange;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Image = styled.img`
  /* height: 75%;
  z-index: 2; */
`
const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: 'none' })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: '#fff8f8' })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer: React.FunctionComponent = () => {
  const { t } = useTranslation();
  return (
   <Container>
      <Left>
        <Image src='https://app.logo.com/view/logo_f5e5e9d6-d4c6-489f-ac7e-d02742bfaafa' alt=''/>
        <Desc>
          {t('There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.')}
        </Desc>
        <SocialContainer>
          <SocialIcon color='3B5999'>
            <Facebook />
          </SocialIcon>
          <SocialIcon color='E4405F'>
            <Instagram />
          </SocialIcon>
          <SocialIcon color='55ACEE'>
            <Twitter />
          </SocialIcon>
          <SocialIcon color='E60023'>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>{t('Useful Links')}</Title>
        <List>
          <ListItem>{t('Home')}</ListItem>
          <ListItem>{t('Cart')}</ListItem>
          <ListItem>{t('Man Fashion')}</ListItem>
          <ListItem>{t('Woman Fashion')}</ListItem>
          <ListItem>{t('Accessories')}</ListItem>
          <ListItem>{t('My Account')}</ListItem>
          <ListItem>{t('Order Tracking')}</ListItem>
          <ListItem>{t('Wishlist')}</ListItem>
          <ListItem>{t('Wishlist')}</ListItem>
          <ListItem>{t('Terms')}</ListItem>
        </List>
      </Center>
      <Right>
        <Title>{t('Contact')}</Title>
        <ContactItem>
          <Room style={{ marginRight: '10px' }}/> {t('622 Dixie Path , South Tobinchester 98336')}
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '10px' }}/> {t('+1 234 56 78')}
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: '10px' }} /> {t('contact@lama.dev')}
        </ContactItem>
        <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
      </Right>
    </Container>
  ); ;
};

export default Footer;
