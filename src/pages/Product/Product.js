import './Product.css';
import { Navbar } from '../../components/Navbar/Navbar.js';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProductCardBox from '../../components/ProductCardBox/ProductCardBox.js';
import { addToCart } from '../../actions';

export const Product = () => {
    const {productName} = useParams();
    
    const product = useSelector(store => store.products.find(obj => obj.name === (productName.replaceAll('_', ' '))));
    const productsSameType = useSelector(store => store.products.filter(obj => (product.type === obj.type) && (product.id !== obj.id)));

    const imgSrc = `/assets/${product.name.replaceAll(' ', '')}.png`;

    const dispatch = useDispatch();
    return (
    <div>
        <Navbar/>

        <div className="container mt-5">
            <div className="row">
                <Link to='/' className='backBtn'>
                    <div className="d-flex flex-row gap-4 align-content-center">
                        <img src='/assets/arrowLeft.png' alt='arrowLeft'/>
                        <p className='m-0'>Назад</p>
                    </div>
                </Link>
            </div>
            <div className="row g-5 mt-0">
                <div className="col-md-6 col-12">
                    <img src={imgSrc} alt={product.name} style={{width: '100%'}}/>
                </div>
                <div className="col-md-6 col-12 d-flex flex-column gap-5">
                    <div className="d-flex flex-column gap-3">
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                    </div>
                    
                    <div className="d-flex flex-column gap-4">
                        <h1>$ {product.cost}</h1>
                        <div className='d-flex flex-row gap-4'>
                            <button className='btn btn-primary btn-lg rounded-1 px-4 py-2'>Buy Now</button>
                            <button className='btn btn-outline-primary btn-lg rounded-1 px-4 py-2' onClick={() => dispatch(addToCart(product.id))}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-5 mt-0">
                <h3>Related Items</h3>
            </div>
            <div className="row g-5 mb-5">
                <ProductCardBox products={productsSameType.slice(0, 3)}/>
            </div>
        </div>
    </div>
    );
}