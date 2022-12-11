import './App.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import { SalesBoxList } from './SalesBoxList';



function App() {
  const [like, setLike] = useState(0);
  return (
    <div className="App">
      <div className='cart-button-box'>
        <button>
          <ShoppingCartIcon /> Cart {like}
        </button>
      </div>

      <div className='container'>
        <div className='head-container'>
          <h1>Shop in style</h1>
        </div>
        <p className='heading-slogan-text'><h3>with this shop homepage template</h3></p>
      </div>
      <SalesBoxList like={like} setLike={setLike} />
    </div>
  );
}

export default App;
//"https://dummyimage.com/450x300/dee2e6/6c757d.jpg"