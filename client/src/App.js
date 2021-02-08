import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import DetailProducts from './components/body/detailProducts/DetailProducts';
import Products from './components/body/products/Products';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Route path='/' component={Products} />
        <Route path='/products/:id' component={DetailProducts} />
      </div>
    </Router>
  );
};

export default App;
