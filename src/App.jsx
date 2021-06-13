import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";

import CountryFile from "./components/CountryFile";
import CountriesList from "./components/CountriesList";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  const [countries, setCountries] = useState({ repos: null });
  const [file, setFile] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [showFile, setShowFile] = useState(false);

  const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => {
  //   const apiUrl = "https://restcountries.eu/rest/v2/all";
  //   fetch(apiUrl)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setCountries({ repos: data });
  //     });
  // }, [setCountries]);

  useEffect(() => {
    const apiUrl = "https://restcountries.eu/rest/v2/all";
    axios.get(apiUrl).then((response) => {
      console.log(response);
      setCountries({ repos: response.data });
    });
  }, [setCountries]);

  const openFileHandler = async (name) => {
    try {
      setShowFile(true);
      setFile("");
      const response = await axios.get(
        `https://restcountries.eu/rest/v2/name/${name}`
      );
      setFile(response.data[0]);
      console.log(file);
    } catch (error) {
      console.error(error);
    }
  };

  const closeFileHandler = () => {
    setShowFile(false);
  };

  const searchInputHandler = (e) => {
    const searchInput = e.target.value;
    setSearchValue(searchInput);
  };

  const filterHandler = (region) => {
    const filter = region;
    setFilterValue(filter);
    if (filter === filterValue) {
      setFilterValue("");
    }
  };

  const searchHandler = (data) => {
    if (searchValue === "" && filterValue === "") {
      return data;
    } else if (filterValue != "") {
      return data.filter((data) =>
        data.region.toLowerCase().includes(filterValue)
      );
    } else if (searchValue != "") {
      return data.filter(
        (data) =>
          data.name.toLowerCase().includes(searchValue) ||
          data.nativeName.toLowerCase().includes(searchValue)
      );
    }
    // else if (filterValue != "" && searchValue != "") {
    //   return;
    // }
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
            file={file}
          />
        ) : (
          <React.Fragment>
            <SearchBar
              searchValue={searchValue}
              search={searchInputHandler}
              filter={filterHandler}
              filterValue={filterValue}
            />
            <CountriesList
              repos={searchHandler(countries.repos)}
              openFile={openFileHandler}
            />
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default App;
