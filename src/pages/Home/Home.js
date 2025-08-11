import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";

import { ProductCardBox } from '../../components/ProductCardBox/ProductCardBox.js';
import { Navbar } from '../../components/Navbar/Navbar.js';
import { PageButtons } from '../../components/PageButtons/PageButtons.js';

function Home () {
    const {productsList, types} = useSelector(store => store.products);
    const params = useParams();
    const navigate = useNavigate();
    
    const [state, setState] = useState({
        search: params.text || '',
        type: '',
        productsCurrent: [...productsList]
    });

    useEffect(() => {
        filterProducts(params.text || '', state.type);
        // eslint-disable-next-line
    }, [productsList, params.text, state.type]);

    const filterProducts = (searchText, filterType) => {
        const filtered = productsList.filter(product => {
            const matchesSearch = searchText 
                ? product.name.toLowerCase().includes(searchText.toLowerCase())
                : true;
            
            const matchesType = (filterType === '' || filterType === 'None') 
                ? true 
                : product.type === filterType;
            
            return matchesSearch && matchesType;
        });

        setState(prev => ({
            ...prev,
            productsCurrent: filtered,
        }));
    };

    const handleInputChange = (e) => {
        setState(prev => ({
            ...prev,
            search: e.target.value
        }));
    };

    const handleTypeChange = (e) => {
        setState(prev => ({
            ...prev,
            type: e.target.value
        }));
        navigate(`/Search/1/${state.search}`);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        navigate(`/Search/1/${state.search}`);
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
                    <form className="d-flex gap-4" onSubmit={handleSearchSubmit}>
                        <input 
                            value={state.search}
                            onChange={handleInputChange}
                            className="form-control form-control-lg rounded-1" 
                            id="search" 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search"
                        />
                        <button type="submit" className="btn btn-primary px-4 py-2 rounded-1">
                            Search
                        </button>
                    </form>
                </div>
                </div>
                <div className="row mt-4">
                <div className="col-2">
                    <select onChange={handleTypeChange} className='form-select form-select-lg' style={{width: '100%', height: '100%'}} name="Filter" defaultValue={''}>
                        <option value="" disabled hidden>Filter</option>
                        <option value="None">None</option>
                        {types.map(type => <option value={type} key={type}>{type}</option>)}
                    </select>
                </div>
                </div>

                <div className="row mt-5 mb-3">
                <div className="col d-flex flex-row gap-4 justify-content-start align-items-center">
                    <h3 className='m-0'>Total products</h3>
                    <h5 className='products-count m-0'>{state.productsCurrent.length}</h5>
                </div>
                </div>
                
                <ProductCardBox products={ !params.pageNum ? state.productsCurrent.slice(0, 9) :  state.productsCurrent.slice( (Number(params.pageNum)*9)-9 , (Number(params.pageNum)*9))}/>
            
                <div className="row" style={state.productsCurrent.length > 6 ? {display: 'block'} : {display: 'none'}}>
                    <div className="col-12 d-flex justify-content-center mb-5">
                       <PageButtons count={ Math.ceil(state.productsCurrent.length * 1.0 / 6) } active={Number(params.pageNum)}/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export { Home };