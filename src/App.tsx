import "./App.css";
import AppRoutes from "./AppRoutes";
import "./Index.css";
import "./assets/styles/Home.css";
import "./assets/styles/Swiper.css";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from 'react';
import { FacebookPixel } from './utils/facebookPixel';

function App() {
  useEffect(() => {
    FacebookPixel.pageView();
  }, []);

  return (
    <>
      <Router>
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
