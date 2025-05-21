import React from 'react'
import 'macro-css'
import Card from "./components/Card"
import Header from "./components/Header"
import Overlay from './components/Overlay'

function App() {
  const [items, setItems] = React.useState([]);
  const [isCartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
      fetch('https://682d81614fae188947563ea7.mockapi.io/items')
      .then(res => {
        return res.json();
      }).then(json => {
        setItems(json);
      });
  }, []);


  
  



  return (
    <>
      <div className='wrapper clear'>

        
        {isCartOpened == true && <Overlay onClickClose={() => setCartOpened(false)} /> }

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

          

          {items.map((obj) => (
              <Card title={obj.name} price={obj.price} img={obj.img} />
          ))}

          </div>

          

        </div>

      </div>    
    </>
  )
}

export default App
