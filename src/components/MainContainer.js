import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({stocks, handlePortfolioAddition, myStocks, isAlphabetChecked, isPriceChecked, sortByAlphabet, sortByPrice, handleFilter}) {
  return (
    <div>
      <SearchBar isAlphabetChecked={isAlphabetChecked} isPriceChecked={isPriceChecked} sortByAlphabet={sortByAlphabet} sortByPrice={sortByPrice} handleFilter={handleFilter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} handlePortfolioAddition={handlePortfolioAddition}/>
        </div>
        <div className="col-4">
          <PortfolioContainer myStocks={myStocks} handlePortfolioAddition={handlePortfolioAddition}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
