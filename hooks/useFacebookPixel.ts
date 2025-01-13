import { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';

export const useFacebookPixel = (pageName: string) => {
  useEffect(() => {
    const options = {
      autoConfig: true,
      debug: false,
    };
    
    ReactPixel.init('8318805964849399', undefined, options);
    ReactPixel.pageView();
    
    // Track specific beta page view
    ReactPixel.trackCustom(`${pageName}View`, {
      page: pageName,
      timestamp: new Date().toISOString()
    });
  }, [pageName]);
};
