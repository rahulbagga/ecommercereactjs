import React from 'react';

const CheckoutComp = ()=>{
    return(
        <div id="checkoutcontainer">
                <div id="checkoutleftcontainer">
                    <div class="checkoutproductsbox">
                        <img src="img/products/products1.jpg" alt ='img'/>
                        <div id="checkoutleft">
                            <p>product title</p>
                            <p class="checkoutsingleprice">556 Rs</p>
                        </div>
                    </div>
                    
                    <div class="checkoutproductsbox">
                        <img src="img/products/products2.jpg" alt ='img'/>
                        <div id="checkoutleft">
                            <p>product title</p>
                            <p class="checkoutsingleprice">556 Rs</p>
                        </div>
                    </div>
                    <div class="checkoutproductsbox">
                        <img src="img/products/products3.jpg" alt ='img'/>
                        <div id="checkoutleft">
                            <p>product title</p>
                            <p class="checkoutsingleprice">556 Rs</p>
                        </div>
                    </div>

                </div>
                <div id="checkoutfinalbox">
                    <h4>Your Final Price: </h4>
                    <h5>Rs 876</h5>
                    <button>Buy Now</button>
                </div>
            
       </div>
    );
};
export default CheckoutComp;
