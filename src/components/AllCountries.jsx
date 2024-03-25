/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

const AllCountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getAllcountries = async () => {
      try {
        setIsLoading(true);
        const rs = await fetch("https://restcountries.com/v3.1/all");
        const data = await rs.json();
        console.log(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    getAllcountries();
  }, []);

  return (
    <>
      <div className="all_country_wrapper">
        <div className="country_top"></div>

        <div className="country_bottom">
          {isLoading && !error && <h2>Loading....</h2>}
          {/* {error && !isLoading && <h4>{error}</h4>} */}

          {countries?.map((country) => {
            <div className="country_card">
              <div className="country_img">
                <img src={country.flags.png} />
              </div>
              <div className="country_data">
                <h3>{country.name.common}</h3>
                <h6>Population : {country.population}</h6>
                <h6>Region :{country.region} </h6>
                <h6>Capital : {country.capital}</h6>
              </div>
            </div>;
          })}
        </div>
      </div>
    </>
  );
};

export default AllCountries;
