import './ProductCard.css'
import { useDispatch} from 'react-redux';
import { addToCart } from '../../actions';


const ProductCard = ({product}) => {
  const {id, name: nameProduct, description, type, cost} = product;
  const imgSrc = `./assets/${nameProduct.replaceAll(' ', '')}.png`;
  const dispatch = useDispatch();
  
  return (
    <div className='col-4'>
      <div className="card d-flex flex-column gap-3">
        <div className="card-img-top">
          <img src={imgSrc} alt={nameProduct} style={{width: '100%'}}/>
        </div>
        <div className="card-body">
          <p>{type}</p>
          <p>{nameProduct}</p>
          <p>{description}</p>
          <div className="d-flex flex-row justify-content-between align-items-center">
            <p style={{margin: 0}}>{cost}</p>
            <button className='btn btn-primary' onClick={() => dispatch(addToCart(id))}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>  
  );
}

export default ProductCard;