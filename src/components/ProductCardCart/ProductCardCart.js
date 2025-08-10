import './ProductCardCart.css';
import { Link } from 'react-router-dom';
import { deleteFromCart } from '../../actions';
import { useDispatch } from 'react-redux';
import { toast } from 'sonner';

export const ProductCardCart = ({product, count}) => {
    const {id, name: nameProduct, description, type, cost} = product;
    const imgSrc = `/assets/${nameProduct.replaceAll(' ', '')}.png`;

    const dispatch = useDispatch();

    return (
        <div className="row card flex-row">
            <div className="col-lg-3 col-12 p-0">
                <img src={imgSrc} alt={nameProduct}/>
            </div>

            <div className="col-lg-5 col-12 ms-md-3 p-4 d-flex flex-column justify-content-between">
                <h4><Link to={`/products/${nameProduct.replaceAll(' ', '_')}`}>{nameProduct}</Link></h4>
                <div className='d-flex flex-row gap-3 align-items-end'><h4 className='m-0'>$ {cost} </h4> <p className='m-0 count'>{count === 1 ? '' : `x ${count}`}</p></div>
            </div>
            <div className="col pe-4 py-4 d-flex flex-row justify-content-end align-items-start">
                <button className='btn btn-primary px-4 py-2 rounded-1' onClick={() => {
                dispatch(deleteFromCart(id));
                toast('Delete from Cart');
                }}>Delete from Cart</button>
            </div>
        </div>
    );
}