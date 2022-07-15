import styles from "./MenuList.module.css";





const MenuList = ({restoran}) => {
  return (
    <ul className={styles.list__container}>
    {
      restoran.map(({id, name, img, price}) => <li className={styles.list__item} key={id}>
        
        <img className={styles.item_photo} src={img} alt={name}/>
       <div className={styles.item_text}>
         <p>{name}</p>
         <p>{price}</p>
         </div>
       <button className={styles.list__button}>В кошик</button>
        </li>)
    }
  </ul>
  )
}

export default MenuList;