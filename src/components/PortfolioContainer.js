import React from "react";
import Stock from "./Stock";

function PortfolioContainer({myStocks, handlePortfolioAddition}) {
  const portfolioList = myStocks.map((stock) => {
    return <Stock key={stock.id} stock={stock} handlePortfolioAddition={handlePortfolioAddition}/>
  })

  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioList}
    </div>
  );
}

export default PortfolioContainer;
