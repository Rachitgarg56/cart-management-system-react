
import './Navbar.css';

const Navbar = ({totalItems}) => {
    return (
        <nav>
            <div className='nav-container'>
                <span>Shopping Cart</span>
                <figure>
                    <i class="fa-solid fa-cart-plus"></i>
                    <div className='no-of-items'>{totalItems}</div>
                </figure>
            </div>
        </nav>
    )
}

export default Navbar;
