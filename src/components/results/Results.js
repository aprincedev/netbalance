import React, { Component } from 'react'
import './results.scss'

export default class Results extends Component {

    state = {
        wholeUnits: true,
        partialUnits: false,
        cashAmounts: false
    }

    //Functions

    //Handle Checkbox
    
    checkboxChange = (e) => {
        console.log(e.target.name);
        this.setState({
            [e.target.name]: !this.state[e.target.name],
        });
    } 

    render(props) {
        return (
            <section className="results">
                <h2>Rebalancing Steps</h2>
                <form className="displayOptions">
                    <h3>Display Options</h3>
                    <input type="checkbox" defaultChecked name="wholeUnits" id="wholeUnits" value="wholeUnits" onClick={e => this.checkboxChange(e)} />
                    <label htmlFor="wholeUnits">Whole Units</label><br/>

                    <input type="checkbox" name="partialUnits" id="partialUnits" value="partialUnits" onClick={e => this.checkboxChange(e)} />
                    <label htmlFor="partialUnits">Partial Units</label><br/>

                    <input type="checkbox" name="cashAmounts" id="cashAmounts" value="cashAmounts" onClick={e => this.checkboxChange(e)} />
                    <label htmlFor="cashAmounts">Cash Amounts</label><br/>
                </form>


            {this.props.formData.fundGroups.map((fundGroup, index) => {
                
                return (    
                    <div className="fundResult" key={fundGroup.id}>
                    <h2>{fundGroup.stockTicker}</h2>
                    {console.log(this.props.formData.fundGroups[0])}

                    <ul>
                        <li>Buying Power: {this.props.formData.buyingPower}</li>
                        <li>Market Value: {this.props.formData.marketValue}</li>
                        <li>Total Value: {this.props.formData.totalValue}</li>
                        <li>Allocation Name: {fundGroup.allocationName}</li>
                        <li>Target Percentage: {fundGroup.targetPercentage}</li>
                        <li>Stock Ticker: {fundGroup.stockTicker}</li>
                        <li>Stock Price: {fundGroup.stockPrice}</li>
                        <li>Shares: {fundGroup.shares}</li>
                        <br/><br/><br/><br/><br/><br/>
                        <li>Market value of this stock: {(fundGroup.shares*fundGroup.stockPrice).toFixed(2)}</li>
                        <br/><br/><br/><br/><br/><br/>
                    </ul>


                    <ul>
                        <li><b>Current portfolio percentage:</b>  {parseFloat(fundGroup.stockPrice) * parseFloat(fundGroup.shares)}</li>
                        <li><b>Current Market Value:</b> <span className="moneyGain">${(parseFloat(fundGroup.stockPrice) * parseFloat(fundGroup.shares))+parseFloat(this.props.formData.totalValue)}</span></li>
                    </ul>

                    { this.state.wholeUnits || this.state.partialUnits ? <h3>Action:</h3> : null }
                    <ul>
                        { this.state.wholeUnits ? <li><b><span className="moneyLoss">Buy 22</span></b> units { this.state.cashAmounts ? <span className="moneyLoss">(-$356.00)</span> : null }</li> : null }
                        { this.state.partialUnits ? <li><b><span className="moneyLoss">Buy 22.45</span></b> partial units { this.state.cashAmounts ? <span className="moneyLoss">(-$356.34)</span> : null }</li> : null }
                    </ul>
                </div>
                )
            })}









{/*
            <section>
                <div className="fundResult">
                    <h2>VCN</h2>
                    <ul>
                        <li><b>Current portfolio percentage:</b>  26.33%</li>
                        <li><b>Current Market Value:</b> <span className="moneyGain">$11,470.02</span></li>
                    </ul>

                    <h3>Action:</h3>
                    <ul>
                        <li><b><span className="moneyLoss">Buy 22</span></b> units: <span className="moneyLoss">(-$356.00)</span></li>
                        <li><b><span className="moneyLoss">Buy 22.45</span></b> partial units: <span className="moneyLoss">(-$356.34)</span></li>
                    </ul>
                </div>

                <div className="fundResult">
                    <h2>XAW</h2>
                    <ul>
                        <li><b>Current portfolio percentage:</b>  26.33%</li>
                        <li><b>Current Market Value:</b> <span className="moneyGain">$11,470.02</span></li>
                    </ul>

                    <h3>Action:</h3>
                    <ul>
                        <li><b><span className="moneyLoss">Buy 22</span></b> units: <span className="moneyLoss">(-$356.00)</span></li>
                        <li><b><span className="moneyLoss">Buy 22.45</span></b> partial units: <span className="moneyLoss">(-$356.34)</span></li>
                    </ul>
                </div>


                <div className="fundResult">
                    <h2>ZAG</h2>
                    <ul>
                        <li><b>Current portfolio percentage:</b>  26.33%</li>
                        <li><b>Current Market Value:</b> <span className="moneyGain">$11,470.02</span></li>
                    </ul>

                    <h3>Action:</h3>
                    <ul>
                        <li><b><span className="moneyLoss">Buy 22</span></b> units: <span className="moneyLoss">(-$356.00)</span></li>
                        <li><b><span className="moneyLoss">Buy 22.45</span></b> partial units: <span className="moneyLoss">(-$356.34)</span></li>
                    </ul>
                </div>
            </section>*/}

            <section className="disclaimer">
                <h2>Disclaimer</h2>
                <p>The NetBalance Portfolio Rebalancer tool makes calculations based on the user submitted data and the current stock 
                    price data obtained from <a href="https://iextrading.com/apps/stocks/" target="_blank">IEX</a>. The prices of this data can be delayed up to 20 minutes. This tool is presented as an educational
                    resource and should not be construed as individualized investment advice, nor as a recommendation to buy or sell specific 
                    securities. All investments carry the risk of loss. It is the responsibility of individuals to do their own due diligence before 
                    investing in any index fund or ETF mentioned on this site.</p>
            </section>
        </section>
        )
    }
}




/* Calculations for results

First need to calculate the current allocation
do this by dividing X group's total value by the entire total value of stocks

if money to invest is not 0 {
($D$27+$D$5)*C10-D10;
} else {
null / = 0
}


$D$27 = 22,666 (total value of stocks)
$D$5 = 1,360 (how much to invest)
C10 = 10% (target allocation of stock)
D10 = 2162 (price of stock, stock price x num of shares)

(22666+1360)x.10-2162

*/