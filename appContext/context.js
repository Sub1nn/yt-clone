"use client";

import { FetchDataFromApi } from "../utils/api";
import { useState, useEffect, createContext, useContext } from "react";

export const Context = createContext();

export const AppContext = ({ children }) => {
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
  }, []);

  const value = {
    data,
    setData,
    query,
    setQuery,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
