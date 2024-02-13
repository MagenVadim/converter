import Block from "./Block";
import { useState, useEffect } from "react";


const url="https://api.currencyfreaks.com/v2.0/rates/latest?apikey=3b4e1571709d4beca3e93361d006931c"

function App() {
  const [fromCurrency, setFromCurrency] = useState("ILS");
  const [toCurrency, setToCurrency] = useState("USD");

  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);

  const [rates, setRates] = useState({});

  useEffect (()=>{
    fetch(url)
    .then((res)=>res.json())
    .then((json)=>{
      setRates(json.rates)
    })
    .catch((err)=>{
      console.warn(err);
      alert("failed to get info")
    })
  },[])
  
  const onChangeFromPrice = (value) =>{
    const price = value / rates[fromCurrency];
    const result = price * rates[toCurrency];
    console.log(price)
    setFromPrice(value);
    setToPrice(result);
  }

  const onChangeToPrice = (value) =>{
    const result = (rates[fromCurrency] / rates[toCurrency]) * value;
    setFromPrice(result);
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
