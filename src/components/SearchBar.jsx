import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { Dropdown } from "react-bootstrap";

const SearchBar = () => {
  return (
    <nav>
      <div className="searchbar">
        <AiOutlineSearch />
        <input type="text" placeholder="Search for a country..." />
      </div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <p>Filter by Region</p>
          <IoIosArrowDown />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Africa</Dropdown.Item>
          <Dropdown.Item href="#/action-2">America</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Asia</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Europe</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Oceania</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </nav>
  );
};

export default SearchBar;
