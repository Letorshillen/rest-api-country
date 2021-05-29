import React from "react";

const CountriesList = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>no repos</p>;
  return (
    <div className="grid">
      {repos.map((repo, index) => {
        return (
          <div className="country-box" key={index}>
            <img src={repo.flag} alt={repo.name} />
            <ul>
              <li>
                <h2>{repo.name}</h2>
              </li>
              <li>
                <strong>Population:</strong> {repo.population}
              </li>
              <li>
                <strong>Region:</strong> {repo.region}
              </li>
              <li>
                <strong>Capital:</strong> {repo.capital}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default CountriesList;
