import ReactPixel from 'react-facebook-pixel';

const initFacebookPixel = () => {
  const options = {
    autoConfig: true,
    debug: false,
  };
  
  ReactPixel.init('8318805964849399', undefined, options);
  ReactPixel.pageView();
  
  return ReactPixel;
};

export const FacebookPixel = initFacebookPixel();