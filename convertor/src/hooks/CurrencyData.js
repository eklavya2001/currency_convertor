import { useState, useEffect } from "react";

export function CurrencyData(currencyType) {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      const rawData = await fetch(
        `https://v6.exchangerate-api.com/v6/711aa4a099ca719bb7ef8666/latest/${currencyType}`
      );
      const useData = await rawData.json();
      console.log(useData.conversion_rates);

      setData(useData.conversion_rates);
    })();
  }, [currencyType]);
  console.log(data);
  return data;
}
