import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllCountries from "./components/AllCountries";
import Countryinfo from "./components/Countryinfo";

const App = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <h5>Hello World</h5>
        </div>
      </header>

      <div className="container">
        {/* <AllCountries /> */}
        <Routes>
          <Route path="/" element={<AllCountries />} />
          <Route path="/country/:countryName" element={<Countryinfo />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
