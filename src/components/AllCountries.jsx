/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Result from "./Search/Result";

const AllCountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [data1, setData1] = useState();

  useEffect(() => {
    const getAllcountries = async () => {
      try {
        setIsLoading(true);
        const rs = await fetch("https://restcountries.com/v3.1/all");
        const data = await rs.json();
        setCountries(data);
        setData1(data);
      } catch (err) {
        console.error(err);
        setError("No connection ! Please connect your pc to internet");
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
      setData1(countries);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  const SearchCountry = (e) => {
    const svalue = e.target.value;
    // console.log(svalue);
    if (svalue === "") {
      setData1(null);
    }
    const filterData = countries?.filter((country) =>
      country.name.common.toLowerCase().includes(svalue.toLowerCase())
    );
    setData1(filterData);
    // setCountries(filterData);
    // console.log(filterData);
  };

  {
    isLoading && !error && (
      <h2 className="text-5xl width-[100%] text-white bg-gray-900 text-center">
        Loading....
      </h2>
    );
  }
  {
    error && !isLoading && <h4>{error}</h4>;
  }

  return (
    <>
      <div className="all_country_wrapper">
        <div className="country_top">
          <div className="search">
            <input
              type="text"
              name=""
              placeholder="Search Country..."
              onChange={SearchCountry}
            />
          </div>
        </div>

        <Result data={data1} />
      </div>
    </>
  );
};

export default AllCountries;
