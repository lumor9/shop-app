import './ProductCard.css'
import { useDispatch} from 'react-redux';
import { addToCart } from '../../actions';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
  const {id, name: nameProduct, description, type, cost} = product;
  const imgSrc = `/assets/${nameProduct.replaceAll(' ', '')}.png`;
  const dispatch = useDispatch();
  
  return (
    <div className='col-lg-4 col-sm-6 col-12'>
      <div className="card d-flex flex-column gap-3 justify-content-around">
        <div className="card-img-top">
          <img src={imgSrc} alt={nameProduct} style={{width: '100%'}}/>
        </div>
        <div className="card-body d-flex flex-column gap-2 justify-content-around">
          <div>
            <p className='gray mb-1'>{type}</p>
            <Link to={`/Products/${nameProduct.replaceAll(' ', '_')}`}><h5>{nameProduct}</h5></Link>
            <p className='gray'>{description}</p>
          </div>
          
          <div className="d-flex flex-row justify-content-between align-items-center">
            <h5 style={{margin: 0}}>$ {cost}</h5>
            <button className='btn btn-primary px-4 py-2 rounded-1' onClick={() => dispatch(addToCart(id))}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>  
  );
}

export default ProductCard;