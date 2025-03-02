import React from "react";

function Stock({ name, ticker, price, onAdd, id }) {
  function handleClick() {
    console.log("I have been clicked");
    onAdd(id);
  }
  return (
    <div onClick={handleClick}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {ticker}: {price}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
