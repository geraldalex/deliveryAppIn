import { useSelector } from "react-redux/es/exports";
import styles from "./Cart.module.css";

import CartItems from "../../components/CartItems"
import { getApiResource, DB_ROOT } from '../../utils/network'; 
import { useEffect, useState } from "react";




const Cart = () => {
const [totalPrice, setTotalPrice] = useState(0)

  return (
    <>
    <div className={styles.container}>
      <div  className={styles.container__restoran}>
  

</div>

<div className={styles.container__menu}>
 

<CartItems setTotalPrice={setTotalPrice} totalPrice={totalPrice}/>


</div>

</div>
<p>Total Price: {totalPrice}</p>
<button>Заказати</button>

    
    </>
  )
};

export default Cart;