import React from 'react';
import Logo from '../img/logo.png';
const Header=()=>{
    return(
        <header>
        <nav>
            <div id="logoheader">
                <a href="/"><img id="imglogo" src={Logo} alt="scroll"/></a>
            </div>

            <ul>
            
                <li>CATEGORIES</li>
                <li><a href="products">PRODUCTS</a></li>
                <li>ACCOUNT</li>
                <li><a href="contact">CONTACT</a></li>
                <li><a href="checkout">CHECKOUT</a></li>
            </ul>
        </nav>
    </header>
    );
};

export default Header;