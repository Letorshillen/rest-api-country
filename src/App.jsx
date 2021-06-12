import React, { useEffect, useState } from "react";
import "./App.css";
import CountryFile from "./components/CountryFile";

import CountriesList from "./components/CountriesList";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  const [countries, setCountries] = useState({
    loading: false,
    repos: null,
  });

  const [showFile, setShowFile] = useState(false);

  const [file, setFile] = useState();

  useEffect(() => {
    setCountries({ loading: true });
    const apiUrl = "https://restcountries.eu/rest/v2/all";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCountries({ loading: false, repos: data });
      });
  }, [setCountries]);

  const openFileHandler = (index) => {
    const fileNew = countries.repos[index];
    setFile(fileNew);
    setShowFile(true);
  };

  const closeFileHandler = () => {
    setShowFile(false);
  };

  if (!countries.repos || countries.repos.length === 0) return <p>no repos</p>;
  return (
    <React.Fragment>
      <Header />
      <div className="wrapper">
        {showFile ? (
          <CountryFile
            flag={file.flag}
            name={file.name}
            nativeName={file.nativeName}
            population={file.population}
            region={file.region}
            subregion={file.subregion}
            capital={file.capital}
            topLevelDomain={file.topLevelDomain}
            currencies={file.currencies}
            languages={file.languages}
            borders={file.borders}
            closeFile={closeFileHandler}
          />
        ) : (
          <React.Fragment>
            <SearchBar />
            <CountriesList repos={countries.repos} openFile={openFileHandler} />
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
}

export default App;
