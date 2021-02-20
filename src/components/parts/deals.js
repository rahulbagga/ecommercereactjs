import React from 'react';

const Deals =()=>{
    return(
        <div>
    <div className="scrollbar">
        <h3>
            DEALS OF THE DAY
        </h3>
        <div className="scrollproducts">
            <a href='/productview.html'>
                <img className="scrollimages" src="img/products/1.jpg" alt="scroll" />
            </a>
            <img className="scrollimages" src="img/products/2.jpg" alt="scroll" />
            <img className="scrollimages" src="img/products/3.jpg" alt="scroll"/>
            <img className="scrollimages" src="img/products/4.jpg" alt="scroll"/>
            <img className="scrollimages" src="img/products/5.jpg" alt="scroll"/>
        </div>
    </div>
    <div className="scrollbar">
        <h3>
            BIGGEST DEALS ON TOP BRANDS
        </h3>
        <div className="scrollproducts">
            <img className="scrollimages" src="img/products/p6.jpg" alt="scroll" />
            <img className="scrollimages" src="img/products/p7.jpg" alt="scroll" />
            <img className="scrollimages" src="img/products/p8.jpeg" alt="scroll"/>
            <img className="scrollimages" src="img/products/p9.jpg" alt="scroll" />
            <img className="scrollimages" src="img/products/p10.jpeg" alt="scroll" />
        </div>
    </div>
    </div>
    );
};
export default Deals;