import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [clicked, setClicked] = useState([]);
  const [stk, setStk] = useState([]);

  function fetchData() {
    fetch(`http://localhost:3000/stocks`)
      .then((r) => r.json())
      .then((data) => setStk(data));
  }
  // console.log(clicked);

  useEffect(() => {
    fetchData();
  }, []);

  function handleStockClick(id) {
    const clickedStock = stk.find((stock) => stock.id === id);
    setClicked((prevClicked) => [...prevClicked, clickedStock]);
  }
  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer onAdd={handleStockClick} stk={stk} />
        </div>
        <div className="col-4">
          <PortfolioContainer onAdd={handleStockClick} clicked={clicked} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
