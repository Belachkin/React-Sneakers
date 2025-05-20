function Overlay() {
    return(
        <div style={{display: 'none'}} className="overlay">

          <div className="drawer">

            <div className="cartTopBlock d-flex align-center justify-between mb-20">
                <h2 className=''>Корзина</h2>
                
                <img src="/icons/RemoveButton.svg" alt="" className='closeButton' height={60}  width={60}/>
                
            </div>

              <div className="items">
                <div className="cartItem d-flex align-center mb-20">
                    <img src="/sneakers/s1.png" alt="" height={60} width={102} className='mr-20' />

                    <div>
                      <p className='mb-5'>Реактивные кроссовки: Nike Her Znaet 1</p>
                      <b>12 999 руб.</b>
                    </div>
                    
                      <img src="/icons/RemoveButton.svg" alt="" className='removeButton mr-5' height={50} width={50} />
                    
                </div>

                                
              </div>
              
              
              <div className="cartTotalBlock">
                <ul>
                  <li>
                    <span>Сумма заказа:</span>
                    <div></div>
                    <b>12 999 руб.</b>
                  </li>
                  <li>
                    <span>Сервисный сбор:</span>
                    <div></div>
                    <b>200 руб.</b>
                  </li>
                  <li>
                    <span>Итого:</span>
                    <div></div>
                    <b>13 199 руб.</b>
                  </li>
                </ul>
                <button className='successButton'>Оформить заказ <img src="/icons/arrow.svg" alt="Arrow" height={25} width={25} /></button>
                <p>Внимание! Сумма заказа не является финальной, так как не расчитана стоимость доставки.</p>
                
              </div>
          </div>

        </div>
    );
}

export default Overlay;