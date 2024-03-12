
import Navbar from './components/Navbar.js';
import Cart from './components/Cart.js';
import { useState } from 'react';

function App() {

  const [totalItems, setTotalItems] = useState(4);

  const updateTotalItems = (add) => {
    
    add === 0 ? setTotalItems(0) : setTotalItems(totalItems + add);
  }

  return (
    <>
      <Navbar totalItems={totalItems}/>
      <Cart updateTotalItems={updateTotalItems}/>
    </>
  );
}

export default App;
