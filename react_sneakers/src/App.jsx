import { useState } from 'react'
import 'macro-css'
import Card from "./components/Card"
import Header from "./components/Header"
import Overlay from './components/Overlay'

function App() {
  
  return (
    <>
      <div className='wrapper clear'>

        <Overlay />

        <Header/>

        <div className="content p-40 ">
          <div className='mb-40 d-flex justify-between'>
            <h1 className> Все кроссовки</h1>
            
            <div className='searchBlock d-flex align-center'>
              <img src="/icons/search.png" alt="Search" height={20} width={20} />
              <input placeholder='Найти тапки...' /> 
            </div>
                       
          </div>
          

          <div className="sneakers d-flex">

            <Card/>

          </div>

          

        </div>

      </div>    
    </>
  )
}

export default App
