import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

import ProductCardBox from '../../components/ProductCardBox/ProductCardBox.js';
import { Navbar } from '../../components/Navbar/Navbar.js';

export const Home = () => {
    const products = useSelector(store => store.products);

    return (
        <div className="Home">

            <Navbar/>

            <div className="container">

                <div className="row justify-content-center">
                <div className="col-6">
                    <div className="d-flex flex-column py-5 text-center my-3">
                    <h1>Products</h1>
                    <p className="gray">We display products based on the latest products we have, if you want
                    to see our old products please enter the name of the item</p>
                    </div>
                </div>
                </div>
                
                <div className="row">
                <div className="col-12">
                    <form className="d-flex gap-4">
                    <input className="form-control form-control-lg rounded-1" id="search" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-primary px-4 py-2 rounded-1" type="submit">Search</button>
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
                    <h5 className='products-count m-0'>{products.length}</h5>
                </div>
                </div>
                
                <ProductCardBox products={products}/>
            </div>

        </div>
    );
}