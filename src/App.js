import Block from "./Block";
import { useState, useEffect } from "react";

const url="https://exchange-rates.abstractapi.com/v1/live/?api_key=570d2f8900ca444ab35aeef24ce932e2&base=USD"

function App() {
  const [fromCurrency, setFromCurrency] = useState("NIS");

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
  

  return (
    <div className="App">
      <Block key={"b-01"} value={0} currency={fromCurrency} onChange={setFromCurrency}/>
      <Block key={"b-02"} value={0} currency={'USD'}/>
    </div>
  );
}

export default App;
