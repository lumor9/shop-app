import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from "react-router-dom";

import ProductCardBox from '../../components/ProductCardBox/ProductCardBox.js';
import { Navbar } from '../../components/Navbar/Navbar.js';

function Home () {
    const {productsList, types} = useSelector(store => store.products);
    const { pathname } = useLocation();

    const [state, setState] = useState({search: '', type: ''});
    const handleInputChange = (e) => {
        setState({...state, search: e.target.value});
    };
    const handleTypeChange = (e) => {
        setState({...state, tupe: e.target.value});
    };
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
                    <input className="form-control form-control-lg rounded-1" onChange={handleInputChange} id="search" type="search" placeholder="Search" aria-label="Search"/>
                    <Link to={`/Search/${state.search}`}><button className="btn btn-primary px-4 py-2 rounded-1">Search</button></Link>
                    </form>
                </div>
                </div>
                <div className="row mt-4">
                <div className="col-2">
                    <select onChange={handleTypeChange} className='form-select form-select-lg' style={{width: '100%', height: '100%'}} name="Filter">
                    <option value="Chair">Dog</option>
                    <option value="Cupboard">Cat</option>
                    <option value="hamster">Hamster</option>
                    </select>
                </div>
                </div>

                <div className="row mt-5 mb-3">
                <div className="col d-flex flex-row gap-4 justify-content-start align-items-center">
                    <h3 className='m-0'>Total products</h3>
                    <h5 className='products-count m-0'>{productsList.length}</h5>
                </div>
                </div>
                
                <ProductCardBox products={pathname.slice(1) === '' || pathname.slice(8) === '' ? productsList : productsList.filter(product => product.name.includes(pathname.slice(8)))}/>
            </div>

        </div>
    );
}

export { Home };