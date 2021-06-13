import React, { useEffect, useState } from "react";

import "./App.scss";

import CountryFile from "./components/CountryFile";
import CountriesList from "./components/CountriesList";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  const [apiUrl, setApiUrl] = useState("https://restcountries.eu/rest/v2/all");
  const [countries, setCountries] = useState({
    repos: null,
  });
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [showFile, setShowFile] = useState(false);
  const [file, setFile] = useState();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (response.status === 404) {
          console.log("Country doesnt exist");
          return response.json();
        } else {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
        setCountries({ repos: data });
      });
  }, [apiUrl]);

  const openFileHandler = (index) => {
    const fileNew = countries.repos[index];
    setFile(fileNew);
    setShowFile(true);
  };

  const closeFileHandler = () => {
    setShowFile(false);
  };

  const searchInputHandler = (e) => {
    const searchInput = e.target.value;
    setSearchValue(searchInput);

    const searchUrl = `https://restcountries.eu/rest/v2/name/${searchInput}`;
    setApiUrl(searchUrl);

    if (searchInput === "") {
      setApiUrl("https://restcountries.eu/rest/v2/all");
    }
  };

  const filterHandler = (region) => {
    const filter = region;
    setFilterValue(filter);

    const searchUrl = `https://restcountries.eu/rest/v2/region/${filter}`;
    setApiUrl(searchUrl);

    if (filter === filterValue) {
      setFilterValue("");
      setApiUrl("https://restcountries.eu/rest/v2/all");
    }
  };

  const changeColorHandler = () => {
    setDarkMode(!darkMode);
  };

  if (!countries.repos || countries.repos.length === 0)
    return <p>Loading...</p>;
  return (
    <div className={`App ${darkMode ? `light` : ``}`}>
      <Header changeColor={changeColorHandler} />
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
            repos={countries.repos}
          />
        ) : (
          <React.Fragment>
            <SearchBar
              searchValue={searchValue}
              search={searchInputHandler}
              filter={filterHandler}
              filterValue={filterValue}
            />
            <CountriesList repos={countries.repos} openFile={openFileHandler} />
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default App;
