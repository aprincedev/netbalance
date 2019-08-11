import React from 'react';

function App() {
  return (
    <div>
      <form>
        <h2>Portfolio Balances</h2>
        <label for="buyingPower">Buying Power</label>
        <input id="buyingPower" type="number" name="buyingPower" placeholder="0.00" />

        <label for="marketValue">Market Value</label>
        <input id="marketValue" type="number" name="marketValue" disabled />

        <label for="totalValue">Total Value</label>
        <input id="totalValue" type="number" name="totalValue" disabled />
        
        <h2>Group 1</h2>
        <label for="allocationName">Allocation Name</label>
        <input id="allocationName" type="text" name="allocationName" placeholder="Canadian Stocks" />

        <label for="targetPercentage">Target Percentage</label>
        <input id="targetPercentage" type="number" name="targetPercentage" placeholder="30"/>
        
        <br/>
        <hr/>
        
        <label for="stockTicker">Stock Ticker</label>
        <input id="stockTicker" type="text" name="stockTicker" placeholder="VCN"/>

        <label for="stockPrice">Stock Price</label>
        <input id="stockPrice" type="number" name="stockPrice" placeholder="33.04"/>

        <label for="shares">Number of Shares</label>
        <input id="shares" type="number" name="shares" placeholder="117"/>
      
        <label for="subTarget">Sub-Target %</label>
        <input id="subTarget" type="number" name="subTarget" placeholder="25" disabled/>

      </form>
    </div>
  );
}

export default App;
