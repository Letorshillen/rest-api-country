import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { DropdownButton, Dropdown } from "react-bootstrap";

const SearchBar = () => {
  return (
    <nav>
      <div className="searchbar">
        <AiOutlineSearch />
        <input type="text" placeholder="Search for a country..." />
      </div>
      <DropdownButton id="dropdown-basic-button" title="Filter by Region">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>
    </nav>
  );
};

export default SearchBar;
