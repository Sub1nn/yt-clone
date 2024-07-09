"use client";

import { FetchDataFromApi } from "../utils/api";
import { useState, useEffect, createContext } from "react";

const Context = createContext();

const AppContext = ({ children }) => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("new");

  useEffect(() => {
    const fetchData = async () => {
      const response = await FetchDataFromApi(
        `search/?q=${query}&maxResults=10`
      );
      setData(response?.contents || []);
    };
    fetchData();
  }, [query]);

  const value = {
    data,
    setData,
    query,
    setQuery,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default AppContext;
