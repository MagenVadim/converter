import Block from "./Block";
import { useState, useEffect, useRef } from "react";


const url="https://api.currencyfreaks.com/v2.0/rates/latest?apikey=3b4e1571709d4beca3e93361d006931c"

function App() {
  const [fromCurrency, setFromCurrency] = useState("ILS");
  const [toCurrency, setToCurrency] = useState("USD");

  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(1);

  const ratesRef = useRef({})

  useEffect (()=>{
    fetch(url)
    .then((res)=>res.json())
    .then((json)=>{
      ratesRef.current = json.rates;
      onChangeToPrice(1)
    })
    .catch((err)=>{
      console.warn(err);
      alert("failed to get info")
    })
  },[])
  

  useEffect(()=>{
    onChangeFromPrice(fromPrice)
  },[fromCurrency])

  useEffect(()=>{
    onChangeToPrice(toPrice)
  }, [toCurrency])


  const onChangeFromPrice = (value) =>{
    const price = value / ratesRef.current[fromCurrency];
    const result = price * ratesRef.current[toCurrency];
    console.log(price)
    setFromPrice(value);
    setToPrice(result.toFixed(3));
  }

  const onChangeToPrice = (value) =>{
    const result = (ratesRef.current[fromCurrency] / ratesRef.current[toCurrency]) * value;
    setFromPrice(result.toFixed(3));
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
