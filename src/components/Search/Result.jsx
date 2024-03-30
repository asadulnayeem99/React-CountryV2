const Result = ({ data }) => {
  return (
    <div className="country_bottom">
      {data?.map((country, index) => (
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
  );
};

export default Result;
