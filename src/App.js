import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addToCart, deleteFromCart } from './actions/index.js';
import { useSelector, useDispatch} from 'react-redux';
import ProductCardBox from './components/ProductCardBox/ProductCardBox.js'

function App() {
  const cart = useSelector(store => store.cart);
  const products = useSelector(store => store.products);

  return (
    <div className="App">

      <div className="navbar navbar-expand border p-0">
        <div className="container" style={{height: '100%'}}>
          <div className="navbar-brand-div"><a className="navbar-brand" href="#">Shop</a></div>
          <ul className="navbar-nav gap-4 align-items-center">
            <li className="nav-link-container"><span className='nav-link'>Products</span></li>
            <li className="nav-link-container"><span className='nav-link'>Categories</span></li>
            <li className="nav-link-container"><span className='nav-link'>About us</span></li>
          </ul>
          <div className="navbar-text d-flex gap-4 justify-content-end">
            <a href="#"><img src='/assets/cart.png'/></a>
            <a href="#"><img src='/assets/user.png'/></a>
          </div>
        </div>
      </div>

      <div className="container">

        <div className="row justify-content-center">
          <div className="col-6">
            <div className="d-flex flex-column p-5 text-center m-3">
              <h1>Products</h1>
              <p className="text-muted">We display products based on the latest products we have, if you want
              to see our old products please enter the name of the item</p>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12">
            <form className="d-flex gap-4">
              <input className="form-control form-control-lg rounded-1" id="search" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-primary px-4 rounded-1" type="submit">Search</button>
            </form>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-2">
            <select className='form-select form-select-lg' style={{width: '100%', height: '100%'}} name="Filter">
              <option value="Filter">Dog</option>
              <option value="cat">Cat</option>
              <option value="hamster">Hamster</option>
            </select>
          </div>
        </div>

        <div className="row mt-5 mb-3">
          <div className="col d-flex flex-row gap-4 justify-content-start align-items-center">
            <h3 className='m-0'>Total products</h3>
            <p className='products-count m-0'>{products.length}</p>
          </div>
        </div>
        <ProductCardBox products={products}/>
      </div>

    </div>
  );
}

export default App;
