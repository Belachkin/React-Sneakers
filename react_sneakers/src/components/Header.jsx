function Header(props) {
    return (
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
                <li className='mr-30 cartButton' onClick={props.onClickCart}>
                  <img src="/shopping-bag.png" alt="" />
                  <span>1205 руб.</span>
                </li>
                <li>
                  <img src="/user.png" alt="" />
                </li>
              </ul>

            </div>
          
          
          
        </header>
    );
}

export default Header;