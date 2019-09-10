import React, { Component } from 'react'

export default class Results extends Component {
    render(props) {
        return (
            <div className="results">
                <h2>Rebalancing Steps</h2>

                <form className="displayOptions">
                    <label>Display Options</label><br/>
                    <input type="checkbox" name="wholeUnits" id="wholeUnits" value="wholeUnits" />
                    <label for="wholeUnits">Whole Units</label><br/>

                    <input type="checkbox" name="partialUnits" id="partialUnits" value="partialUnits" />
                    <label for="partialUnits">Partial Units</label><br/>

                    <input type="checkbox" name="cashAmounts" id="cashAmounts" value="cashAmounts" />
                    <label for="cashAmounts">Cash Amounts</label><br/>
                </form>

            <section>
                <div>
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

                <div>
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


                <div>
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
            </section>

            <section className="disclaimer">
                <h2>Disclaimer</h2>
                <p>The NetBalance Portfolio Rebalancer tool makes calculations based on the user submitted data and the current stock 
                    price data obtained from <a href="https://iextrading.com/apps/stocks/" target="_blank">IEX</a>. The prices of this data can be delayed up to 20 minutes. This tool is presented as an educational
                    resource and should not be construed as individualized investment advice, nor as a recommendation to buy or sell specific 
                    securities. All investments carry the risk of loss. It is the responsibility of individuals to do their own due diligence before 
                    investing in any index fund or ETF mentioned on this site.</p>
            </section>

            </div>
        )
    }
}
