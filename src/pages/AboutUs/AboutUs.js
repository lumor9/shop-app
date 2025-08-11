import { Navbar } from '../../components/Navbar/Navbar.js';
import './AboutUs.css';

export const AboutUs = () => (
    <div>
        <Navbar/>

        <div className="container py-5 my-3">
            <div className="row">
                <div className="col d-flex justify-content-center align-items-center">
                    <h1>Shop</h1>
                </div>
            </div>

            <div className="row AboutUs-description mt-3">
                <div className="col-8 offset-2 d-flex flex-column text-left justify-content-center align-items-center gap-5">
                    <h5>We believe that great furniture transforms spaces into homes. Since our founding, we’ve been dedicated to offering <span>stylish, high-quality</span> pieces that combine functionality with timeless design.</h5>

                    <h5>From modern sofas to elegant dining sets, each item in our collection is carefully selected to bring <span>comfort and sophistication</span> to your everyday life. Whether you're furnishing a cozy apartment or a spacious house, we have something to suit every taste and budget.</h5>
                
                    <h5>Our mission is simple: to help you create a home that reflects your <span>personality</span>, one beautiful piece at a time.</h5>         

                    <h5><span>Welcome to our shop – where style meets comfort.</span></h5>       
                </div>
            </div>
        </div>
    </div>
);