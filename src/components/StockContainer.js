import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, handlePortfolioAddition}) {
  const stockList = stocks.map((stock) => {
    return <Stock key={stock.id} stock={stock} handlePortfolioAddition={handlePortfolioAddition}/>
  })

  return (
    <div>
      <h2>Stocks</h2>
      {stockList}
    </div>
  );
}

export default StockContainer;
