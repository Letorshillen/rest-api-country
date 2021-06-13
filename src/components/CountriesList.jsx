import React from "react";

const CountriesList = (props) => {
  const { repos } = props;
  return (
    <div className="grid">
      {repos.map((repo, index) => {
        return (
          <div
            className="country-box"
            key={index}
            onClick={() => {
              props.openFile(repo.name);
            }}
          >
            <img loading="lazy" src={repo.flag} alt={repo.name} />
            <ul>
              <li>
                <h2>{repo.name}</h2>
              </li>
              <li>
                <span>Population:</span> {repo.population}
              </li>
              <li>
                <span>Region:</span> {repo.region}
              </li>
              <li>
                <span>Capital:</span> {repo.capital}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default CountriesList;
