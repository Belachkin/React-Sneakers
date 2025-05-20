function Card() {
    return (
        <div className="card">          
            <img className='unlikedButton' src="/icons/UnlikeButton.svg" alt="Unliked" height={32} width={32} />   
            <img src='/sneakers/s1.png' alt="Sneaker" height={100} width={170} />
            <h5>Реактивные кроссовки: Nike Her Znaet 1</h5>
            <div className='cardBottom d-flex justify-between align-center'>
                <div className='d-flex flex-column'>
                    <span>Цена:</span>
                    <b>12 999 руб.</b>
                </div>
                <img className='addButton' src="/icons/AddButton.svg" alt="Add" />
            </div>  
        </div>
    );
}

export default Card;
