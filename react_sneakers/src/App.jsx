import { useState } from 'react'
import 'macro-css'

function App() {
  
  return (
    <>
      <div className='wrapper clear'>
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

        <div className="content p-40">
          <h1 className='mb-40'> Все кроссовки</h1>

          <div className="sneakers d-flex">

            <div className="card">
              <img src='/sneakers/s1.png' height={100} width={170} />
              <h5>Реактивные кроссовки: Nike Her Znaet 1</h5>
              <div className='cardBottom d-flex justify-between align-center'>

                <div className='d-flex flex-column'>
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>

                <button className='addButton'>
                  <img src="/plus.png" height={11} width={11} />
                </button>
              </div>
            </div>

            <div className="card">
              <img src='/sneakers/s2.png' height={100} width={170} />
              <h5>Реактивные кроссовки: Nike Her Znaet 2</h5>
              <div className='cardBottom d-flex justify-between align-center'>

                <div className='d-flex flex-column'>
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>

                <button className='addButton'>
                  <img src="/plus.png" height={11} width={11} />
                </button>
              </div>
            </div>

            <div className="card">
              <img src='/sneakers/s3.png' height={100} width={170} />
              <h5>Реактивные кроссовки: Air Jordan 115 </h5>
              <div className='cardBottom d-flex justify-between align-center'>

                <div className='d-flex flex-column'>
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>

                <button className='addButton'>
                  <img src="/plus.png" height={11} width={11} />
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
