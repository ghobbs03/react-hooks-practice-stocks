import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import { useState, useEffect } from "react";

const API = "http://localhost:3001/stocks"

function App() {
  const [stocks, setStocks] = useState([]);
  const [initalStockState, setInitialState] = useState([]);
  const [myStocks, setMyStocks] = useState([]);
  const [filteredStocks, setFilteredStocks] = useState([]);
  const [isAlphabetChecked, setIsAlphabetChecked] = useState(false);
  const [isPriceChecked, setPriceChecked] = useState(false);

  useEffect(() => {
    fetch(API)
    .then((resp) => resp.json())
    .then((stocksArray) => {
      
      setStocks(stocksArray);
      setInitialState(stocksArray);
      setFilteredStocks(stocksArray);
     
    })

  }, [])

  function handlePortfolioAddition(stock) {
    if (myStocks.find((aStock) => (aStock.id === stock.id))) { // check if stock is in portfolio
      setMyStocks(myStocks.filter((aStock) => (aStock.id !== stock.id))); // if it is, remove it from myStocks

    } else {
      setMyStocks([...myStocks, stock]); // otherwise add the stock
    }
  }



  function sortByAlphabet() {
  
    if (isAlphabetChecked === false) { // if sort by alphabet is checked
      setStocks([...filteredStocks].sort((stock1, stock2) => (stock1.name).localeCompare(stock2.name)))
    } else {
      setStocks([...filteredStocks]);
    }

    setIsAlphabetChecked(!isAlphabetChecked);

  }


  function sortByPrice() {
    
    if (isPriceChecked === false) { // if sort by alphabet is checked
      setStocks([...filteredStocks].sort((stock1, stock2) => (stock1.price - stock2.price)))
    } else {
      setStocks([...filteredStocks]);
    }

    setPriceChecked(!isPriceChecked);
  }


  function handleFilter(event) {
    const category = event.target.value;
    const thisArray = initalStockState.filter((stock) => (stock.type === category))
    setFilteredStocks(thisArray);

    if (isAlphabetChecked) {
      thisArray.sort((stock1, stock2) => (stock1.name).localeCompare(stock2.name));
    }

    if (isPriceChecked) {
      thisArray.sort((stock1, stock2) => (stock1.price - stock2.price));
    }

    setStocks(thisArray);


  }



  return (
    <div>
      <Header />
      <MainContainer stocks={stocks} handlePortfolioAddition={handlePortfolioAddition} myStocks={myStocks} isAlphabetChecked={isAlphabetChecked} isPriceChecked={isPriceChecked} sortByAlphabet={sortByAlphabet} sortByPrice={sortByPrice} handleFilter={handleFilter}/>
    </div>
  );
}

export default App;
