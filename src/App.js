import Block from "./Block";
import { useState, useEffect } from "react";

const url="https://exchange-rates.abstractapi.com/v1/live/?api_key=570d2f8900ca444ab35aeef24ce932e2&base=USD"

function App() {
  const [fromCurrency, setFromCurrency] = useState("NIS");
  const [toCurrency, setToCurrency] = useState("USD");

  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);

  const [rates, seRates] = useState({});

  useEffect (()=>{
    fetch(url)
    .then((res)=>res.json())
    .then((json)=>seRates(json.exchange_rates))
    .catch((err)=>{
      console.warn(err);
      alert("failed to get info")
    })
  })
  
  const onChangeFromPrice = (value) =>{
    setFromPrice(value)
  }

  const onChangeToPrice = (value) =>{
    setToPrice(value)
  }


  return (
    <div className="App">
      <Block key={"b-01"} value={fromPrice} currency={fromCurrency} onChangeCurrency={setFromCurrency} onChangeValue={onChangeFromPrice}/>
      <Block key={"b-02"} value={toPrice} currency={toCurrency} onChangeCurrency={setToCurrency} onChangeValue={onChangeToPrice}/>
    </div>
  );
}

export default App;
