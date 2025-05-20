import styles from './Card.module.scss' 

function Card(props) {    
    return (
        <div className={styles.card}>          
            <img className={styles.unlikedButton} src="/icons/UnlikeButton.svg" alt="Unliked" height={32} width={32} />   
            <img src={'/sneakers/' + props.img} alt="Sneaker" height={100} width={170} />
            <h5>{props.title}</h5>
            <div className='cardBottom d-flex justify-between align-center'>
                <div className='d-flex flex-column'>
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <img onClick={() => alert(props.title)} className={styles.addButton} src="/icons/AddButton.svg" alt="Add" />
            </div>  
        </div>
    );
}

export default Card;
