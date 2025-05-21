import React from 'react';

function CartItem(props) {
  console.log(props)
    return (
                <div className="cartItem d-flex align-center mb-20">
                    <img src={"/sneakers/" + props.img} alt="" height={60} width={102} className='mr-20' />

                    <div>
                      <p className='mb-5'>{props.title}</p>
                      <b>{props.price} руб.</b>
                    </div>
                    
                      <img src="/icons/RemoveButton.svg" alt="" className='removeButton mr-5' height={50} width={50} />
                    
                </div>
    );
}

export default CartItem;