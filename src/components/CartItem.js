
import './CartItem.css';

const CartItem = ( props ) => {
  
    const {itemObj, quantity, id, handleIncrement, handleDecrement} = props;
    const {item, price, imgUrl} = itemObj;

    return (
        <div className='cart-item'>
            <figure><img alt='item-img' src={imgUrl} /></figure>
            <div className='cart-item-details'>
                <div className='cart-item-details-left'>
                    <h5 className='cart-item-name'>{item}</h5>
                    <p className='cart-item-price' style={{color:"gray"}}>{'$' + price}</p>
                    <button style={{color:"#645CFF", border:"none", background:"transparent"}}>remove</button>
                </div>
                <div className='cart-item-quantity'>
                    <button className='increase-quantity' onClick={()=>handleIncrement(id)}><i class="fa-solid fa-angle-up"></i></button>
                    <span>{quantity}</span>
                    <button className='decrease-quantity' onClick={()=>handleDecrement(id)}><i class="fa-solid fa-angle-down"></i></button>
                </div>
            </div>
        </div>
    )
}

export default CartItem;
