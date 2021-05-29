import { useEffect, useState } from "react";
import "./App.css";

import CountriesList from "./components/CountriesList";

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
    <div className="App">
      <CountriesList repos={countries.repos} />
    </div>
  );
}

export default App;
