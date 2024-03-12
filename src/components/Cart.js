
import './Cart.css';
import cartData from '../cartData.json';
import CartItem from './CartItem';
import { useState } from 'react';

const Cart = ( { updateTotalItems } ) => {

    const [itemsArr, setItemsArr] = useState([...cartData]);
    const [totalAmount, setTotalAmount] = useState(2196);
    const [isEmpty, setIsEmpty] = useState(true);

    const handleIncrement = (id) => {
        updateTotalItems(1);
        updateTotalAmount(id,'+');

        const arr = [...itemsArr];

        for (let idx = 0; idx < arr.length; idx++) {
            const itemObj = arr[idx];
            const itemId = itemObj.id;

            if (itemId === id) {
                itemObj.quantity += 1;
                setItemsArr(arr);
            }

        }
        
    }

    const handleDecrement = (id) => {
        updateTotalItems(-1);
        updateTotalAmount(id,'-');

        const arr = [...itemsArr];

        for (let idx = 0; idx < arr.length; idx++) {
            const itemObj = arr[idx];
            const itemId = itemObj.id;

            if (itemId === id) {

                if (itemObj.quantity === 1) {
                    arr.splice(idx,1);

                    if (arr.length === 0) {
                        setIsEmpty(false);
                    }

                    setItemsArr(arr);
                } 

                itemObj.quantity -= 1;
                setItemsArr(arr);
            }

        }
        
    }

    const updateTotalAmount = (id,operator) => {

        for (let idx = 0; idx < itemsArr.length; idx++) {
            const itemId = itemsArr[idx].id;
            const itemPrice = itemsArr[idx].price;

            if (id === itemId) {
                operator === '+' ? setTotalAmount(totalAmount + parseInt(itemPrice)) : setTotalAmount(totalAmount - parseInt(itemPrice));
            }
        }

    }



    return (

        <section className='cart-section'>
            <h2>YOUR BAG</h2>
            <div className='cart-container'>
                <p className='message'>{!isEmpty ? "is currently empty" : ""}</p>
                {
                    itemsArr.map((itemObj) => {
                        return <CartItem itemObj={itemObj} quantity={itemObj.quantity} key={itemObj.id} id={itemObj.id} handleIncrement={handleIncrement} handleDecrement={handleDecrement}/>
                    })
                }
            </div>
            
            <hr style={{borderBottom:"0.1px solid gray", width:"100%", maxWidth:"900px"}}/>

            <div style={{display:"flex", flexDirection:"column", width:"100%", maxWidth:"900px"}}>
                <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                    <p style={{fontSize:"x-large"}}>Total</p>
                    <span style={{background:"blue", color:"white", fontSize:"x-large", padding:"0.1rem 0.3rem", borderRadius:"5px"}}>{'$' + totalAmount}</span>
                </div>
                <button onClick={()=>{
                    setIsEmpty(false);
                    setItemsArr([]);
                    setTotalAmount(0);
                    updateTotalItems(0);
                }} style={{alignSelf:"center", padding:"0.3rem 0.6rem", background:"#C1BEFF", border:"none", color:"blue", borderRadius:"5px"}}>Clear Cart</button>
            </div>
        </section>
    )

}

export default Cart;
