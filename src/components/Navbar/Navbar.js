import './Navbar.css';
import { useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

export const Navbar = () => {
    const cart = useSelector(store => store.cart);

    const {pathname} = useLocation();
    return (
        <div className="navbar navbar-expand border p-0">
            <div className="container" style={{height: '100%'}}>
                <div className="navbar-brand-div"><Link className="navbar-brand" to='/'>Shop</Link></div>
                <ul className="navbar-nav gap-4 align-items-center">
                    <li className={(pathname === '/') || (pathname === '/Products') ? "nav-link-container active" : "nav-link-container"} ><span className='nav-link'><Link className='nav-link' to='/'>Products</Link></span></li>
                    <li className={(pathname === '/AboutUs') ? "nav-link-container active" : "nav-link-container"}><span className='nav-link'><Link className='nav-link' to='/AboutUs'>About us</Link></span></li>
                </ul>
                <div className="navbar-text d-flex gap-4 justify-content-end">
                    <Link to='/Cart'><img src={cart.length === 0 ? '/assets/cart.png' : '/assets/cartActive.png'} alt='cart'/></Link>
                </div>
            </div>
        </div>
    )
};