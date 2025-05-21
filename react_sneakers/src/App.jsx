import React from 'react'
import 'macro-css'
import Card from "./components/Card"
import Header from "./components/Header"
import Overlay from './components/Overlay'

function App() {
  const [items, setItems] = React.useState([]);
  const [isCartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
      fetch('https://682d81614fae188947563ea7.mockapi.io/items')
      .then(res => {
        return res.json();
      }).then(json => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj) => {
      setCartItems([...cartItems,obj]);
  }

  return (
    <>
      <div className='wrapper clear'>

        
        {isCartOpened == true && <Overlay items={cartItems} onClickClose={() => setCartOpened(false)} /> }

        <Header onClickCart={() => setCartOpened(true)} />

        <div className="content p-40 ">
          <div className='mb-40 d-flex justify-between'>
            <h1 className> Все кроссовки</h1>
            
            <div className='searchBlock d-flex align-center'>
              <img src="/icons/search.png" alt="Search" height={20} width={20} />
              <input placeholder='Найти тапки...' /> 
            </div>
                       
          </div>
          

          <div className="sneakers d-flex flex-wrap">

          

          {items.map((item) => (
              <Card onClickAddToCart={(obj) => {onAddToCart(obj)}} title={item.name} price={item.price} img={item.img} />
          ))}

          </div>

          

        </div>

      </div>    
    </>
  )
}

export default App
