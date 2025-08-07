import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

      <div className="navbar navbar-expand">
        <div className="container">
          <a className="navbar-brand" href="#">Shop</a>
          <ul className="navbar-nav">
            <li className="nav-link">Products</li>
            <li className="nav-link">Categories</li>
            <li className="nav-link">About us</li>
          </ul>
          <div className="navbar-text">
            d
          </div>
        </div>
      </div>

      <div className="container">

        <div className="row justify-content-center">
          <div className="col-6">
            <div className="d-flex flex-column p-5 text-center">
              <h1>Products</h1>
              <p className="text-muted">We display products based on the latest products we have, if you want
              to see our old products please enter the name of the item</p>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-10">
            <input style={{width: '100%', height: '100%'}}></input>
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-lg btn-primary rounded-0" style={{width: '100%', height: '100%'}}>Find now</button>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-2">
            <select className='form-select-lg' style={{width: '100%', height: '100%'}} name="Filter">
              <option value="Filter">Dog</option>
              <option value="cat">Cat</option>
              <option value="hamster">Hamster</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-2 flex-row">
            <h3>Total products</h3>
          </div>
          
        </div>
      </div>

    </div>
  );
}

export default App;
