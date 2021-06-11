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
        console.log(data[1]);
        setCountries({ loading: false, repos: data });
      });
  }, [setCountries]);

  const openFileHandler = (index) => {
    const fileNew = countries.repos[index];
    setFile(fileNew);
    setShowFile(true);
  };

  if (!countries.repos || countries.repos.length === 0) return <p>no repos</p>;
  return (
    <React.Fragment>
      <Header />
      <div className="wrapper">
        {showFile ? (
          <CountryFile
            name={file.name}
            nativeName={file.nativeName}
            population={file.population}
            region={file.region}
            subregion={file.subregion}
            capital={file.capital}
            topLevelDomain={file.topLevelDomain}
            topLevelDomain={file.topLevelDomain}
            // currencies={file.currencies}
            // lanugages={file.lanugages}
            // borders={file.borders}
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
