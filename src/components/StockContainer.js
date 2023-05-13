import React from "react";
import Stock from "./Stock";

function StockContainer({ onAdd, stk }) {
  return (
    <div>
      <h2>Stocks</h2>
      {stk.map((stockItem) => {
        return (
          <Stock
            key={stockItem.id}
            id={stockItem.id}
            name={stockItem.name}
            ticker={stockItem.ticker}
            price={stockItem.price}
            onAdd={onAdd}
          />
        );
      })}
    </div>
  );
}

export default StockContainer;
