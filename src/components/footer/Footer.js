import React from 'react'
import './footer.scss'
import footerLogo from '../../images/netbalance_logo_secondary.svg'

export default function Footer() {
    return (
        <footer className="container mainFooter">
           <div className="mainFooter__logo">
               <a href="#"><img src={footerLogo} alt="NetBalance Footer Logo"/></a>
           </div>
           <nav className="mainFooter__navigation">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">What is this?</a></li>
                    <li><a href="#">Policies</a></li>
                    <li><a href="https://github.com/aprincedev/netbalance" target="_blank">Source</a></li>
                </ul>
           </nav>
           <section className="mainFooter__info">
                <p>Created by <a href="#">Andrew Prince</a></p>
           </section>
        </footer>
    )
}
