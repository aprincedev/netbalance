import React from 'react'
import './header.scss'
import headerLogo from '../../images/netbalance_logo_primary.svg'

export default function Footer() {
    return (
        <React.Fragment>        
        <header className="mainHeader container">
            <div className="mainHeader__logo">
                <a href="#"><img src={headerLogo} alt="NetBalance Logo"/></a>
            </div>
            <nav className="mainHeader__navigation">
                <ul>
                   <li><a href="#">Home</a></li> 
                   <li><a href="#">What is this?</a></li>
                </ul>
            </nav>
        </header>
        <div className="mainHeader__decoration"></div>
        </React.Fragment>
    )
}
