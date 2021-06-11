import React from "react";

const CountryFile = (props) => {
  return (
    <div>
      <button className="back">Back</button>
      <div className="flex">
        <img src={props.flag} alt={props.name} />
        <div className="CountryInfos">
          <h2>{props.name}</h2>
          <ul>
            <li>
              <span>Native Name:</span>
              {props.nativeName}
            </li>
            <li>
              <span>Population:</span>
              {props.population}
            </li>
            <li>
              <span>Region:</span>
              {props.region}
            </li>
            <li>
              <span>Sub Region:</span>
              {props.subregion}
            </li>
            <li>
              <span>Capital:</span>
              {props.capital}
            </li>
            <li>
              <span>Top Level Domain:</span>
              {props.topLevelDomain}
            </li>
            <li>
              <span>Currencies</span>
              {props.currencies}
            </li>
            <li>
              <span>Languages</span>
              {props.lanugages}
            </li>
          </ul>
          <div className="borders">
            <span>Border Countries</span>
            <p>{props.borders}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryFile;
