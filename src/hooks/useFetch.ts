import { useState, useEffect } from 'react';

export const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T | null>(null); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const abortController = new AbortController();
    setLoading(true);
    fetch(url, { signal: abortController.signal })
      .then(response => response.json())
      .then((data: T) => setData(data)) 
      .catch(error => setError(error))
      .finally(() => setLoading(false));

    return () => abortController.abort();
  }, [url]);

  return { data, loading, error };
};
