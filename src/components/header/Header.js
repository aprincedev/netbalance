import React from 'react'
import './header.scss'
import headerLogo from '../../images/netbalance_logo_primary.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <React.Fragment>        
        <header className="mainHeader container">
            <div className="mainHeader__logo">
                <Link to="/"><img src={headerLogo} alt="NetBalance Logo"/></Link>
            </div>
            <nav className="mainHeader__navigation">
                <ul>
                   <li><Link to="/">Home</Link></li> 
                   <li><Link to="/about">What is this?</Link></li>
                </ul>
            </nav>
        </header>
        <div className="mainHeader__decoration"></div>
        </React.Fragment>
    )
}
