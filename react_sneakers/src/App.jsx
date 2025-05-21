import React from 'react'
import 'macro-css'
import Card from "./components/Card"
import Header from "./components/Header"
import Overlay from './components/Overlay'

const arr = [{name: "Реактивные кроссовки: Nike Her Znaet 1", price: 12999, img: "s1.png"},
        {name: "Кроссовки: Nike Air Govnodav-2002", price: 15250, img: "s2.png"},
        {name: "Кроссовки: Air Jopa Black&Red", price: 22110, img: "s3.png"},
        {name: "Кеды: Super Lapti White Line", price: 5250, img: "s4.png"},
        {name: "Реактивные кроссовки: Jordan Red Pick-Me", price: 30000, img: "s5.png"}
];

function App() {
  
  const [isCartOpened, setCartOpened] = React.useState(false);

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
          

          <div className="sneakers d-flex">

          

          {arr.map((obj) => (
              <Card title={obj.name} price={obj.price} img={obj.img} />
          ))}

          </div>

          

        </div>

      </div>    
    </>
  )
}

export default App
