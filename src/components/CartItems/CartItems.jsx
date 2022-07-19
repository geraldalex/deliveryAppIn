import { useSelector } from "react-redux/es/exports";
import styles from "./CartItems.module.css";

import { useEffect, useState } from "react";

const CartItems = ({setTotalPrice}) => {
  const [items, setItems] = useState([]);
 

  const storeData = useSelector((state) => state.favoriteReducer);

  useEffect(() => {
    const arr = Object.entries(storeData);

    if (arr.length) {
      const res = arr.map((item) => {
        return {
          ...item[1],
        };
      });

      setItems(res);
    }
   
  }, []);


  return (
    <>
      <ul className={styles.list__container}>
        {items.map(({ id, name, img, price }) => (
          <li className={styles.list__item} key={id}>
            <Item id={id} name={name} img={img} price={price} setTotalPrice={setTotalPrice} items={items} />
          </li>
        ))}
      </ul>
  
    </>
  );
};

export default CartItems;

const Item = ({ id, name, img, price, setTotalPrice, items }) => {
  const [count, setCount] = useState(1);
  const [priceN, setPriceN] = useState(Number(price));


useEffect(() => {
  if(Number(price) === priceN){
    let sum = 0
    
    items.map(({price}) => {
      sum += Number(price)
    })
    setTotalPrice(sum)
  }
  
},[])

  

  const increment = () => {
    setCount(count + 1);
    setPriceN(priceN + Number(price));

     setTotalPrice(prevCount => prevCount + Number(price))
     
  };

  const decrement = () => {
    if (count !== 0) {
      setCount(count - 1);
      setPriceN(priceN - Number(price));
      setTotalPrice(prevCount => prevCount - Number(price))
    } else {
      setCount(0);
    }
  };

  return (
    <>
      <img className={styles.item_photo} src={img} alt={name} />
      <div className={styles.list__container_name_price}>
        <div className={styles.item_text}>
          <p>{name}</p>
          <p>Ціна: {priceN} грн</p>
        </div>
        <div className={styles.list__buttons__count}>
          <div className={styles.list__count}>{count}</div>

          <div className={styles.list__buttons}>
            <button onClick={() => increment()}>🔼</button>
            <button onClick={() => decrement()}>🔽</button>
          </div>
        </div>
      </div>
    </>
  );
};
