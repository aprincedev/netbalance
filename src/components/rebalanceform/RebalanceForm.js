import React, { Component } from 'react'

export default class RebalanceForm extends Component {
    state = {
        /*Portfolio Balances - One Occurance*/
        buyingPower: '',
        marketValue: '',
        totalValue: '',

        /*Groups - Array of Objects*/
        fundGroups: [
            {
                id: 1,
                allocationName: "",
                allocationPercentage: 30,
                subTargets: [
                    {
                        stockTicker: "VCN",
                        stockPrice: 33.12,
                        stockShares: 118,
                        subTargetPercentage: 100
                    }
                ]
            }
        ]
    }

    formChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            totalValue: this.state.buyingPower + this.state.marketValue
        });
    } 

    christ = (e, index) => {
        let fundGroups = [...this.state.fundGroups];
        console.log(fundGroups[index].allocationName);
        //fundGroups[index] = e.target.value;
        this.setState({ fundGroups });
    } 

    
    
    render() {
        return (
        <div>
            <form>
            <h2>Portfolio Balances</h2>
            <label htmlFor="buyingPower">Buying Power</label>
            <input value={this.state.buyingPower} id="buyingPower" type="number" name="buyingPower" placeholder="0.00" onChange={e => this.formChange(e)}/>

            <label htmlFor="marketValue">Market Value</label>
            <input value={this.state.marketValue} id="marketValue" type="number" name="marketValue" placeholder="0.00" disabled onChange={e => this.formChange(e)} />

            <label htmlFor="totalValue">Total Value</label>
            <input value={this.state.totalValue} id="totalValue" type="number" name="totalValue" placeholder="0.00" disabled />
        
            {this.state.fundGroups.map((fundGroup, index) => {
                return (
                <div key={fundGroup.id}>
                    <h2>Group {index + 1}</h2>
                    <label htmlFor="allocationName">Allocation Name</label>
                    <input value={fundGroup.allocationName} id="allocationName" type="text" name="allocationName" placeholder="Canadian Stocks" onChange={e => this.christ(e, index)} />
                </div>
                )
            })}
       
       
       
        {/*   
            <br/><br/><br/><br/>



            <h2>Group 1</h2>
            <label htmlFor="allocationName">Allocation Name</label>
            <input id="allocationName" type="text" name="allocationName" placeholder="Canadian Stocks" />

            <label htmlFor="targetPercentage">Target Percentage</label>
            <input id="targetPercentage" type="number" name="targetPercentage" placeholder="30"/>
            
            <br/><br/>
            
            <label htmlFor="stockTicker">Stock Ticker</label>
            <input id="stockTicker" type="text" name="stockTicker" placeholder="VCN"/>

            <label htmlFor="stockPrice">Stock Price</label>
            <input id="stockPrice" type="number" name="stockPrice" placeholder="33.04"/>

            <label htmlFor="shares">Number of Shares</label>
            <input id="shares" type="number" name="shares" placeholder="117"/>
        
            <label htmlFor="subTarget">Sub-Target %</label>
            <input id="subTarget" type="number" name="subTarget" placeholder="25" disabled/>

            <button>+ Add Another Group 1 Fund</button>

            <br/><br/><br/><br/>

            <h2>Group 2</h2> <button>- Remove Group</button>
            <label htmlFor="allocationName2">Allocation Name</label>
            <input id="allocationName2" type="text" name="allocationName2" placeholder="Canadian Stocks" />

            <label htmlFor="targetPercentage2">Target Percentage</label>
            <input id="targetPercentage2" type="number" name="targetPercentage2" placeholder="30"/>
            
            <br/><br/><br/><br/>
            <hr/>
            
            <label htmlFor="stockTicker2">Stock Ticker</label>
            <input id="stockTicker2" type="text" name="stockTicker2" placeholder="VCN"/>

            <label htmlFor="stockPrice2">Stock Price</label>
            <input id="stockPrice2" type="number" name="stockPrice2" placeholder="33.04"/>

            <label htmlFor="shares 2">Number of Shares</label>
            <input id="shares2" type="number" name="shares2" placeholder="117"/>
        
            <label htmlFor="subTarget2">Sub-Target %</label>
            <input id="subTarget2" type="number" name="subTarget2" placeholder="25"/>

            <br/><br/><br/>

            <label htmlFor="stockTicker2">Stock Ticker</label>
            <input id="stockTicker4" type="text" name="stockTicker4" placeholder="VCN"/>

            <label htmlFor="stockPrice2">Stock Price</label>
            <input id="stockPrice4" type="number" name="stockPrice4" placeholder="33.04"/>

            <label htmlFor="shares4">Number of Shares</label>
            <input id="shares4" type="number" name="shares4" placeholder="117"/>
        
            <label htmlFor="subTarget4">Sub-Target %</label>
            <input id="subTarget4" type="number" name="subTarget4" placeholder="25"/>
            <button>- Remove Fund</button>

            <button>+ Add Another Group 2 Fund</button>

            <br/><br/><br/><br/>

            <h2>Group 3</h2> <button>- Remove Group</button>
            <label htmlFor="allocationName3">Allocation Name</label>
            <input id="allocationName3" type="text" name="allocationName3" placeholder="Canadian Stocks" />

            <label htmlFor="targetPercentage3">Target Percentage</label>
            <input id="targetPercentage3" type="number" name="targetPercentage3" placeholder="30"/>
            
            <br/><br/><br/><br/>
            <hr/>
            
            <label htmlFor="stockTicker3">Stock Ticker</label>
            <input id="stockTicker3" type="text" name="stockTicker3" placeholder="VCN"/>

            <label htmlFor="stockPrice3">Stock Price</label>
            <input id="stockPrice3" type="number" name="stockPrice3" placeholder="33.04"/>

            <label htmlFor="shares3">Number of Shares</label>
            <input id="shares3" type="number" name="shares3" placeholder="117"/>
        
            <label for="subTarget3">Sub-Target %</label>
            <input id="subTarget3" type="number" name="subTarget3" placeholder="25" disabled/>

            <button>+ Add Another Group 3 Fund</button>

            <br/> <br/> <br/> <br/>

            <button className="button--large">+ Add New Group</button>

            <hr/>

        */}<br/> <br/> <br/> <br/>

            <button className="button--primary">Calculate Rebalance</button>
            <button className="button--secondary">Refresh Prices</button>

        </form>
    </div>
        )
    }
}
