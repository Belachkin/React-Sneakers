import { useState } from 'react'
import 'macro-css'

function App() {
  
  return (
    <>
      <div className='wrapper clear'>

        <div className="overlay">

          <div className="drawer">
              <h2 className='mb-20'>Корзина</h2>

              <div className="cartItem d-flex align-center">
                <img src="/sneakers/s1.png" alt="" height={60} width={102} className='mr-20' />

                <div>
                  <p className='mb-5'>Реактивные кроссовки: Nike Her Znaet 1</p>
                  <b>12 999 руб.</b>
                </div>
                <button className='mr-5'>
                  <img src="/icons/RemoveButton.svg" alt="" height={50} width={50} />
                </button>
              </div>
          </div>

        </div>

        <header className='d-flex justify-between align-center p-40'>
          

              <div className='headerLeft d-flex align-center'>
                <img src="/logo.png" alt="" />
                <div className='headerInfo'>
                  <h3 className='text-uppercase'>React Sneakers</h3>
                  <p className='opacity-5'>Магазин реактивных кроссовок</p>
                </div>
              </div>

            <div className='headerRight mr-30 d-flex'>

              <ul className='d-flex'>
                <li className='mr-30'>
                  <img src="/shopping-bag.png" alt="" />
                  <span>1205 руб.</span>
                </li>
                <li>
                  <img src="/user.png" alt="" />
                </li>
              </ul>

            </div>
          
          
          
        </header>

        <div className="content p-40 ">
          <div className='mb-40 d-flex justify-between'>
            <h1 className> Все кроссовки</h1>
            
            <div className='searchBlock d-flex align-center'>
              <img src="/icons/search.png" alt="Search" height={20} width={20} />
              <input placeholder='Найти тапки...' /> 
            </div>
            
            
          </div>
          

          <div className="sneakers d-flex">

            <div className="card">
              <button className='unlikedButton'>
                <img src="/icons/UnlikeButton.svg" alt="Unliked" height={25} width={25} />
              </button>
              
              <img src='/sneakers/s1.png' height={100} width={170} />
              <h5>Реактивные кроссовки: Nike Her Znaet 1</h5>
              <div className='cardBottom d-flex justify-between align-center'>

                <div className='d-flex flex-column'>
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>

                <button className='addButton'>
                  <img src="/icons/AddButton.svg" height={25} width={25} />
                </button>
              </div>
            </div>

          </div>

          

        </div>

      </div>    
    </>
  )
}

export default App
