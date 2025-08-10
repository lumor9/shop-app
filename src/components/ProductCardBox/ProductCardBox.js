import './ProductCardBox.css'
import ProductCard from '../ProductCard/ProductCard.js';
import { v4 } from 'uuid';

const ProductCardBox = ({products}) => {

    return (
        <div className='row g-5 align-items-stretch mb-5'>
            {products.map(product => <ProductCard product={product} key={v4()}/>)}
        </div>
    )
};

export default ProductCardBox;