import { useEffect, useState } from "react";

export const useShop = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getFetch = async () => {
      const call = await fetch("https://fruits-develhope.herokuapp.com/api");
      const response = await call.json();

      setData(() => response.fruits);
    };
    getFetch();
  }, []);

  return [data];
};
