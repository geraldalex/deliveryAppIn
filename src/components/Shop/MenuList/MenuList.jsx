import styles from "./MenuList.module.css";
import { addToCart, removeFromCart } from "../../../store/actions";
import { useDispatch } from 'react-redux'





const MenuList = ({restoran}) => {
const dispatch = useDispatch();

const add = (id, name, img, price) => {
 dispatch(addToCart({
[id]: {
  id,
  name,
  img,
  price
}
 })) 
}


  return (
    <ul className={styles.list__container}>
    {
      restoran.map(({id, name, img, price}) => <li className={styles.list__item} key={id}>
        
        <img className={styles.item_photo} src={img} alt={name}/>
       <div className={styles.item_text}>
         <p>{name}</p>
         <p>{price}</p>
         </div>
       <button className={styles.list__button} onClick={() => add(id, name, img, price)}>В кошик</button>
        </li>)
    }
  </ul>
  )
}

export default MenuList;