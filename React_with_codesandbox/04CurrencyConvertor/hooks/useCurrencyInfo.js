import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      // `api.frankfurter.app/currencies//latest?amount=1&from=USD&to=INR `
      //   `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`,
      `https://api.frankfurter.app/latest?amount=1&from=USD&to=INR`,
    )
      // `fca_live_gXlyjyVvjlGsOobhMFiZj4yr8e9gc5sW2tpMSSkz`
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    console.log(data);
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;
