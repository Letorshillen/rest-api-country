import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { Dropdown } from "react-bootstrap";

const SearchBar = (props) => {
  return (
    <nav>
      <div className="searchbar">
        <AiOutlineSearch />
        <input
          value={props.searchValue}
          type=""
          onChange={(e) => props.search(e)}
          placeholder="Search for a country..."
        />
      </div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <p>Filter by Region</p>
          <IoIosArrowDown />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            style={{
              color: props.filterValue === "africa" ? "#e82c2c" : null,
            }}
            onClick={() => props.filter("africa")}
          >
            Africa
          </Dropdown.Item>
          <Dropdown.Item
            style={{
              color: props.filterValue === "americas" ? "#e82c2c" : null,
            }}
            onClick={() => props.filter("americas")}
          >
            America
          </Dropdown.Item>
          <Dropdown.Item
            style={{
              color: props.filterValue === "asia" ? "#e82c2c" : null,
            }}
            onClick={() => props.filter("asia")}
          >
            Asia
          </Dropdown.Item>
          <Dropdown.Item
            style={{
              color: props.filterValue === "europe" ? "#e82c2c" : null,
            }}
            onClick={() => props.filter("europe")}
          >
            Europe
          </Dropdown.Item>
          <Dropdown.Item
            style={{
              color: props.filterValue === "oceania" ? "#e82c2c" : null,
            }}
            onClick={() => props.filter("oceania")}
          >
            Oceania
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </nav>
  );
};

export default SearchBar;
