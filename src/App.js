import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/screens/home';
import Contact from './components/screens/contact';
import '../src/components/css/main.css';
import ProductsScreen from './components/screens/products';
import CheckoutScreen from './components/screens/checkout';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/'>
        <Home />        
      </Route>
      
      <Route path='/contact'>
        <Contact />        
      </Route>
      <Route path='/products'>
        <ProductsScreen />        
      </Route>
      <Route path='/checkout'>
        <CheckoutScreen />        
      </Route>
      
    </BrowserRouter>
    
  );
}

export default App;
