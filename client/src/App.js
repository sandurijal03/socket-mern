import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import DetailProducts from './components/body/detailProducts/DetailProducts';

import Products from './components/body/products/Products';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Route exact path='/' component={Products} />
        <Route exact path='/product/:id' component={DetailProducts} />
      </div>
    </Router>
  );
};

export default App;
