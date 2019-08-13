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
        <input id="totalValue" type="number" name="totalValue" value="22342.03" disabled />
        
        <br/><br/><br/><br/>

        <h2>Group 1</h2>
        <label for="allocationName">Allocation Name</label>
        <input id="allocationName" type="text" name="allocationName" placeholder="Canadian Stocks" />

        <label for="targetPercentage">Target Percentage</label>
        <input id="targetPercentage" type="number" name="targetPercentage" placeholder="30"/>
        
        <br/><br/><br/><br/>
        <hr/>
        
        <label for="stockTicker">Stock Ticker</label>
        <input id="stockTicker" type="text" name="stockTicker" placeholder="VCN"/>

        <label for="stockPrice">Stock Price</label>
        <input id="stockPrice" type="number" name="stockPrice" placeholder="33.04"/>

        <label for="shares">Number of Shares</label>
        <input id="shares" type="number" name="shares" placeholder="117"/>
      
        <label for="subTarget">Sub-Target %</label>
        <input id="subTarget" type="number" name="subTarget" placeholder="25" disabled/>

        <button>+ Add Another Group 1 Fund</button>

        <br/><br/><br/><br/>

        <h2>Group 2</h2> <button>- Remove Group</button>
        <label for="allocationName2">Allocation Name</label>
        <input id="allocationName2" type="text" name="allocationName2" placeholder="Canadian Stocks" />

        <label for="targetPercentage2">Target Percentage</label>
        <input id="targetPercentage2" type="number" name="targetPercentage2" placeholder="30"/>
        
        <br/><br/><br/><br/>
        <hr/>
        
        <label for="stockTicker2">Stock Ticker</label>
        <input id="stockTicker2" type="text" name="stockTicker2" placeholder="VCN"/>

        <label for="stockPrice2">Stock Price</label>
        <input id="stockPrice2" type="number" name="stockPrice2" placeholder="33.04"/>

        <label for="shares 2">Number of Shares</label>
        <input id="shares2" type="number" name="shares2" placeholder="117"/>
      
        <label for="subTarget2">Sub-Target %</label>
        <input id="subTarget2" type="number" name="subTarget2" placeholder="25"/>

        <br/><br/><br/>

        <label for="stockTicker2">Stock Ticker</label>
        <input id="stockTicker4" type="text" name="stockTicker4" placeholder="VCN"/>

        <label for="stockPrice2">Stock Price</label>
        <input id="stockPrice4" type="number" name="stockPrice4" placeholder="33.04"/>

        <label for="shares4">Number of Shares</label>
        <input id="shares4" type="number" name="shares4" placeholder="117"/>
      
        <label for="subTarget4">Sub-Target %</label>
        <input id="subTarget4" type="number" name="subTarget4" placeholder="25"/>
        <button>- Remove Fund</button>

        <button>+ Add Another Group 2 Fund</button>

        <br/><br/><br/><br/>

        <h2>Group 3</h2> <button>- Remove Group</button>
        <label for="allocationName3">Allocation Name</label>
        <input id="allocationName3" type="text" name="allocationName3" placeholder="Canadian Stocks" />

        <label for="targetPercentage3">Target Percentage</label>
        <input id="targetPercentage3" type="number" name="targetPercentage3" placeholder="30"/>
        
        <br/><br/><br/><br/>
        <hr/>
        
        <label for="stockTicker3">Stock Ticker</label>
        <input id="stockTicker3" type="text" name="stockTicker3" placeholder="VCN"/>

        <label for="stockPrice3">Stock Price</label>
        <input id="stockPrice3" type="number" name="stockPrice3" placeholder="33.04"/>

        <label for="shares3">Number of Shares</label>
        <input id="shares3" type="number" name="shares3" placeholder="117"/>
      
        <label for="subTarget3">Sub-Target %</label>
        <input id="subTarget3" type="number" name="subTarget3" placeholder="25" disabled/>

        <button>+ Add Another Group 3 Fund</button>

        <br/> <br/> <br/> <br/>

        <button class="button--large">+ Add New Group</button>

        <hr/>

        <br/> <br/> <br/> <br/>

        <button class="button--primary">Calculate Rebalance</button>
        <button class="button--secondary">Refresh Prices</button>

      </form>
    </div>
  );
}

export default App;
