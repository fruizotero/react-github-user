/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

export function useFetch(url) {
  let [data, setData] = useState(null);
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (url) => {
      try {
        let res = await fetch(url);


        if (!res.ok)
          throw {
            status: res.status,
            statusText: res.statusText || "Ocurrió un error",
            err: true,
          };

        let json = await res.json();

        setData(json);
        setIsLoading(false);
        setError({ err: false });
      } catch (error) {
        setIsLoading(false);
        setError(error);
      }
    };

    getData(url);
  }, [url]);

  return { data, isLoading, error };
}
