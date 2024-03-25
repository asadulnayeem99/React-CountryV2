/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import SearchInput from "./Search/SearchInput";

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
        setCountries(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    getAllcountries();
  }, []);

  const getCountryByName = async (name) => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      if (!res.ok) throw new Error("Not Found Country");
      const data = await res.json();
      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  const getCountryByMatch = (name) => {
    const filterdCountry = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(name);
    });
    setCountries(filterdCountry);
  };

  return (
    <>
      <div className="all_country_wrapper">
        <div className="country_top">
          <div className="search">
            <SearchInput onSearch={getCountryByMatch} />
          </div>
        </div>

        <div className="country_bottom">
          {isLoading && !error && <h2>Loading....</h2>}
          {error && !isLoading && <h4>{error}</h4>}

          {countries?.map((country, index) => (
            <div className="country_card" key={index}>
              <div className="country_img">
                <img src={country.flags.png} />
              </div>
              <div className="country_data">
                <h3>{country.name.common}</h3>
                <h6>Population : {country.population}</h6>
                <h6>Region :{country.region} </h6>
                <h6>Capital : {country.capital}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllCountries;
