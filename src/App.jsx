import React, { useEffect, useState } from "react";
import "./App.css";

import CountriesList from "./components/CountriesList";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  const [countries, setCountries] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setCountries({ loading: true });
    const apiUrl = "https://restcountries.eu/rest/v2/all";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setCountries({ loading: false, repos: data });
      });
  }, [setCountries]);

  return (
    <React.Fragment>
      <Header />
      <div className="wrapper">
        <SearchBar />
        <CountriesList repos={countries.repos} />
      </div>
    </React.Fragment>
  );
}

export default App;
