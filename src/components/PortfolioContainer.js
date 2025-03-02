import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ onAdd, clicked }) {
  return (
    <div>
      <h2>My Portfolio</h2>

      {clicked &&
        clicked.map((stock) => (
          <Stock key={stock.id} {...stock} onAdd={onAdd} />
        ))}
      {
        //render your portfolio stocks here
      }
    </div>
  );
}

export default PortfolioContainer;
