import React, { Component, useState } from "react";
import styled from "styled-components";
import Pending from "components/base/pending";
import { produce } from "immer";

const ListTemplate = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const inputValue = e => {
    setSearchValue(e.target.value);
  };

  const searchFun = e => {
    e.preventDefault();
    props.searchF(searchValue);
    setSearchValue("");
  };

  const prevent = e => {
    e.preventDefault();
  };

  const {keyF} = props;
  console.log("key", keyF);
  const {data, pending} = keyF;

  return (
    <>
        <div>
          <form onClick={prevent}>
            <input
              type="text"
              placeholder="input search query"
              onChange={inputValue}
              value={searchValue}
            />
            <button type="submit" onClick={searchFun}>
              search
            </button>
          </form>
        </div>
        <ul>
          {!pending ? (
            data.length !== 0 &&
            data.map((item, index) => (
              <li key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                />
              </li>
            ))
          ) : (
            <Pending />
          )}
        </ul>
      </>
  );
};

export default ListTemplate;