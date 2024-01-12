/* eslint-disable no-unused-vars */

import React, { useEffect, useReducer, useState } from "react";

import { useFetch } from "./hooks/useFetch";

import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { UserInfo } from "./components/UserInfo";

import { dataInitialState, dataReducer } from "./reducer/reducers/Data";
import { TYPES } from "./reducer/actions/dataActions";

function App() {
  let [theme, setTheme] = useState(true);
  const [state, dispatch] = useReducer(dataReducer, dataInitialState);
  let { user, error, url } = state;

  let { data, isLoading, error: errorFetch } = useFetch(url);

  const setNameToSearch = (name) => {
    dispatch({
      type: TYPES.SET_URL,
      payload: { name },
    });
  };

  useEffect(() => {
    dispatch({ type: TYPES.GET_DATA, payload: data });
  }, [data]);

  useEffect(() => {
    dispatch({ type: TYPES.GET_ERROR, payload: errorFetch });
  }, [errorFetch]);

  return (
    <main className={`main ${theme ? "" : "dark"}`}>
      <article className="main_container">
        <Header setTheme={setTheme} theme={theme} />
        <section className="content">
          <Search setNameToSearch={setNameToSearch} />
          {error.err && <p>{error.statusText}</p>}
          <UserInfo theme={theme} data={user} />
        </section>
      </article>
    </main>
  );
}

export default App;
