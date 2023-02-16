import * as React from 'react';
import Announcement from '../components/Header/Announcement';
import Categories from '../components/Categories/Categories';
import Navbar from '../components/Header/Navbar';
import ImageSlider from '../components/Header/Slider';
import Products from '../components/Products/Products';
import NewsLetter from '../components/Footer/NewsLetter';
import Footer from '../components/Footer/Footer';
import { useTranslation } from 'react-i18next';

const LandingPage: React.FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Announcement>{t('Huge deals! Buy one and receive one for free!')}</Announcement>
      <Navbar language={'EN'} logoName={'Kids Korner'} signUpString={'REGISTER'} signInString={'LOGIN'}/>
      <ImageSlider/>
      <Categories/>
      <Products/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
};

// tsrsfc - for generating snippets

export default LandingPage;
