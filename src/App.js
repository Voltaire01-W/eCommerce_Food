import {Switch, Route} from 'react-router-dom';
import './App.scss';
import HomePage from './components/Home-page'
import NotFound from './components/Not-found'
import Shop from './components/Pages/shop/Shop'
import SingleProduct from './components/Single-product/Single-product';
import CartPage from './components/Pages/Cart-page/Cart-page';
function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path='/eCommerce_Food' component={HomePage} />
        <Route path='/shop' component={Shop} />
        <Route path='/product/:id' component={SingleProduct} />
        <Route path='/cart' component={CartPage} />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
