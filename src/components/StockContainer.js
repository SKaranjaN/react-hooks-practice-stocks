import React, { useState, useEffect } from "react";
import Stock from "./Stock";

function StockContainer() {
  const [stk, setStk] = useState([]);

  function fetchData() {
    fetch("http://localhost:3000/stocks")
      .then((r) => r.json())
      .then((data) => setStk(data));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Stocks</h2>
      {stk.map((stockItem) => {
        return (
          <Stock
            name={stockItem.name}
            ticker={stockItem.ticker}
            price={stockItem.price}
          />
        );
      })}
    </div>
  );
}

export default StockContainer;
