import React from "react";
import styles from "./Cart.module.css";
import CartItems from "../../components/CartItems";
import {  DB_ROOT, PROXY } from "../../utils/network";
import { useEffect, useState } from "react";

const Cart = () => {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [adress, setAdress] = React.useState('');

  const [totalPrice, setTotalPrice] = useState(0);

  const [order, setOrder] = useState(false)

  useEffect(() => {

  },[totalPrice])
  const handleSubmit = () => {
    fetch(PROXY+DB_ROOT+'/orders', {
      method: 'POST',
      body: JSON.stringify({
        name,
        phone,
        email,
        adress,
        totalPrice
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  }


  return (
    <>
      <div className={styles.container}>
        <div className={styles.container__form}>
        <form onSubmit={handleSubmit}>

      <div>
        <label htmlFor='name'>Name: </label> <br/>
        <input className={styles.form__input}  id='name' value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor='email'>Email: </label> <br/>
        <input className={styles.form__input}  id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
   
      <div>
        <label htmlFor='phone'>Phone: </label> <br/>
        <input className={styles.form__input} type='phone ' id='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div>
        <label htmlFor='adress'>Adress: </label> <br/>
        <input className={styles.form__input}  id='adress' value={adress} onChange={(e) => setAdress(e.target.value)} />
      </div>
    </form>
        </div>

        <div className={styles.container__menu}>
          <CartItems setTotalPrice={setTotalPrice}/>
        </div>
      </div>
<div className={styles.container__submit}>
  <div>Загальна ціна: {totalPrice}</div>
  <button className={styles.container__submit__button} onClick={() => {handleSubmit()

  }}>Заказати</button>
</div>
    </>
  );
};

export default Cart;
