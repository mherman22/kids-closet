import * as React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import ImageSlider from '../components/Slider';

const LandingPage: React.FunctionComponent = () => {
  return (
    <div>
      <Announcement>Huge deals! Buy one and receive one for free!</Announcement>
      <Navbar language={'EN'} logoName={'Kids Korner, Nansana'} signUpString={'Sign Up'} signInString={'Sign In'}/>
      <ImageSlider/>
    </div>
  );
};

// tsrsfc - for generating snippets

export default LandingPage;
