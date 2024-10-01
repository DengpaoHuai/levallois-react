import { useEffect, useState } from "react";
import crudcrud from "../services/crudcrud.instance";

const useFetch = (callback) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    callback()
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [refresh]);

  return {
    data,
    isLoading,
    error,
    refetch: () => setRefresh(!refresh),
  };
};

export default useFetch;
