import { useSelector } from "react-redux/es/exports";
import styles from "./CartItems.module.css";


import { useEffect, useState } from "react";



const CartItems = ({setTotalPrice}) => {
const [items, setItems] = useState([])


  const storeData = useSelector(state => state.favoriteReducer);

  useEffect(() => {
const arr = Object.entries(storeData);

if(arr.length){
  const res = arr.map(item => {
    return {
      ...item[1]
    }
  })

  setItems(res)
}
  }, [])
  return (
    <ul className={styles.list__container}>
    {
      items.map(({id, name, img, price}) => <li className={styles.list__item} key={id}>
        
      <Item id={id} name={name} img={img} price={price} setTotalPrice={setTotalPrice}/>
      
        </li>)
    }
  </ul>
  )
};

export default CartItems;


const Item = ({id,name,img, price,setTotalPrice, totalPrice}) => {
  const [count, setCount]  = useState(1)
  const [priceN, setPriceN]  = useState(Number(price))

  const increment = () => {
    setCount(count+1)
    setPriceN( priceN+Number(price) )
    setTotalPrice(totalPrice + Number(priceN))
  }

  const decrement = () => {
  if(count !== 0){
    setCount(count-1)
    setPriceN( priceN-Number(price) )
  }else {
    setCount(0)
  }
}

  return (
    <>
    <img className={styles.item_photo} src={img} alt={name}/>
    <div className={styles.list__container_name_price}>
   <div className={styles.item_text}>
     <p>{name}</p>
     <p>Ціна: {priceN}</p>
     </div>
   <div className={styles.list__buttons__count}>
    <div className={styles.list__count}>
    {count}
    </div>

    <div className={styles.list__buttons}>
    <button onClick={() => increment()}>🔼</button>
   <button onClick={() => decrement()}>🔽</button>
    </div>
    </div>
  
   </div>
   </>
  )
}