import React from 'react'

const defaultCurrencies = ['ILS', 'USD', 'EUR', 'GBP'];

const Block = ({value, currency, onChangeValue, onChangeCurrency}) =>  (
    <div className="block">
      <ul className="currencies">
        {
            defaultCurrencies.map((cur)=>(
                <li
                  key={cur}
                  className={currency===cur ? 'active' : ''}
                  onClick={()=>onChangeCurrency(cur)}
                  >
                  {cur}
                </li>
            ))
        }
        <li>
            <svg height="50px" viewBox="0 0 50 50" width="50px">
                <rect fill="none" height="50" width="50" />
                <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
            </svg>
        </li>
      </ul>
      <input 
        type="number" 
        value={value}
        onChange={(e)=>onChangeValue(e.target.value)}     
      />
    </div>
  )


export default Block

