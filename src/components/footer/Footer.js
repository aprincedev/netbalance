import React from 'react'
import './footer.scss'

export default function Footer() {
    return (
        <footer className="mainFooter">
           <div className="mainFooter__logo">
               NetBalance
           </div>
           <nav className="mainFooter__navigation">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">What Is This?</a></li>
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
