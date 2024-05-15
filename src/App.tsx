import "./App.css";
import AppRoutes from "./AppRoutes";
import "./Index.css";
import "./assets/styles/Home.css";
import "./assets/styles/Swiper.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
