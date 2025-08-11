import { Navbar } from '../../components/Navbar/Navbar.js';
import { ProductCardCart } from '../../components/ProductCardCart/ProductCardCart.js';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, clearCart } from '../../actions';
import { v4 } from 'uuid';

export const Cart = () => {
    const cart = useSelector(store => store.cart);
    const cartIds = cart.map(obj => obj.id);
    const {productsList} = useSelector(store => store.products);
    const sumAll = cart.reduce((currentSum, productInCart) => ( currentSum + (productsList.find(obj => obj.id === productInCart.id).cost * productInCart.count )), 0);
    const dispatch = useDispatch();
    return (
        <div>
            <Navbar/>

            <div className="container">
                <div className="row mt-5">
                    <div className="col">
                        <h2>Корзина</h2>
                    </div>
                </div>

                <div className="row mt-5 d-flex align-items-start">
                    <div className="col-md-8 col-12 d-flex flex-column gap-5 mb-5">
                        {productsList.filter(product => cartIds.includes(product.id)).map(productInCart => <ProductCardCart product={productInCart} count={cart.find(obj => obj.id === productInCart.id).count}key={v4()}/>)}
                    </div>
                    <div className="col offset-md-1 mb-5 d-flex flex-column gap-5">
                        <div>
                            <h3>Общая сумма:</h3>
                            <h3>$ {sumAll.toFixed(2)}</h3>
                        </div>
                        <div className='d-flex flex-column gap-3'>
                            <button className='btn btn-primary btn-lg rounded-1 px-4 py-2'>Купить</button>
                            <button className='btn btn-outline-primary btn-lg rounded-1 px-4 py-2' onClick = {() => dispatch(clearCart())}>Очистить корзину</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};