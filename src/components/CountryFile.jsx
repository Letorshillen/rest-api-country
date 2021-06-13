import React from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import FileLoader from "./FileLoader";

const CountryFile = (props) => {
  const { repos, file } = props;
  if (file === undefined || file.length === 0) return <FileLoader />;
  return (
    <React.Fragment>
      <button className="backBtn" onClick={props.closeFile}>
        <HiArrowNarrowLeft className="icon" />
        Back
      </button>
      <div className="flexFile">
        <img src={props.flag} alt={props.name} className="flag" />
        <div className="infoWrapper">
          <h2>{props.name}</h2>
          <div className="infoInner">
            <ul>
              <li>
                <span>Native Name: </span>
                {props.nativeName}
              </li>
              <li>
                <span>Population: </span>
                {props.population}
              </li>
              <li>
                <span>Region: </span>
                {props.region}
              </li>
              <li>
                <span>Sub Region: </span>
                {props.subregion}
              </li>
              <li>
                <span>Capital: </span>
                {props.capital}
              </li>
              <li>
                <span>Top Level Domain: </span>
                {props.topLevelDomain}
              </li>
              <li>
                <span>Currencies: </span>
                {props.currencies.map((cur, index) => {
                  if (props.currencies.length > 1) {
                    return (
                      <React.Fragment key={index}>{cur.name}, </React.Fragment>
                    );
                  } else {
                    return (
                      <React.Fragment key={index}>{cur.name} </React.Fragment>
                    );
                  }
                })}
              </li>
              <li>
                <span>Languages: </span>
                {props.languages.map((lang, index) => {
                  if (props.languages.length > 1) {
                    return (
                      <React.Fragment key={index}>{lang.name}, </React.Fragment>
                    );
                  } else {
                    return (
                      <React.Fragment key={index}>{lang.name} </React.Fragment>
                    );
                  }
                })}
              </li>
            </ul>
            <div className="borderWrapper">
              <span>Border Countries:</span>
              <div>
                {props.borders.length === 0 ? (
                  <span>none</span>
                ) : (
                  props.borders.map((borders, index) => {
                    for (let i = 0; i < repos.length; i++) {
                      if (borders === repos[i].alpha3Code) {
                        return <span key={index}>{repos[i].name}</span>;
                      }
                    }
                    return null;
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CountryFile;
