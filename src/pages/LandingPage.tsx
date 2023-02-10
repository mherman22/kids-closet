import * as React from 'react';
import Announcement from '../components/Header/Announcement';
import Categories from '../components/Categories/Categories';
import Navbar from '../components/Header/Navbar';
import ImageSlider from '../components/Header/Slider';
import Products from '../components/Products/Products';

const LandingPage: React.FunctionComponent = () => {
  return (
    <div>
      <Announcement>Huge deals! Buy one and receive one for free!</Announcement>
      <Navbar language={'EN'} logoName={'Kids Korner, Nansana...'} signUpString={'Create New Account'} signInString={'Sign In'}/>
      <ImageSlider/>
      <Categories/>
      <Products/>
    </div>
  );
};

// tsrsfc - for generating snippets

export default LandingPage;
