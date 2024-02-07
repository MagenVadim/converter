import Block from "./Block";
import { useState, useEffect } from "react";

const url="https://exchange-rates.abstractapi.com/v1/live/?api_key=570d2f8900ca444ab35aeef24ce932e2&base=USD"

function App() {

  const [rates, seRates] = useState({});

  console.log(rates)

  useEffect (()=>{
    fetch(url)
    .then((res)=>res.json())
    .then((json)=>seRates(json.exchange_rates))
    .catch((err)=>{
      console.warn(err);
    })
  })
  

  return (
    <div className="App">
      <Block value={0} currency={'NIS'}/>
      <Block value={0} currency={'USD'}/>
    </div>
  );
}

export default App;
