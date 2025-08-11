import { ProductCard } from '../ProductCard/ProductCard.js';

export const ProductCardBox = ({products}) => {
    return (
        <div className='row g-5 align-items-stretch mb-5'>
            {products.map(product => <ProductCard product={product} key={product.name.replaceAll(' ','_')}/>)}
        </div>
    )
};