import styles from "./MenuList.module.css";
import { addToCart, removeFromCart } from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const MenuList = ({ restoran }) => {
  const dispatch = useDispatch();

  const add = (id, name, img, price) => {
    dispatch(
      addToCart({
        [id]: {
          id,
          name,
          img,
          price,
        },
      })
    );
  };

  const remove = (id) => {
    dispatch(removeFromCart(id));
  };

  const СartItembutton = ({ id, name, img, price }) => {
    const [added, setAdded] = useState(true);
    return added ? (
      <button
        className={styles.list__button}
        onClick={() => {
          add(id, name, img, price);
          setAdded(false);
        }}
      >
        В кошик
      </button>
    ) : (
      <button
        className={styles.list__button}
        onClick={() => {
          remove(id);
          setAdded(true);
        }}
      >
        Видалити
      </button>
    );
  };

  return (
    <ul className={styles.list__container}>
      {restoran.map(({ id, name, img, price }) => (
        <li className={styles.list__item} key={id}>
          <img className={styles.item_photo} src={img} alt={name} />
          <div className={styles.item_text}>
            <p>{name}</p>
            <p>{price} грн</p>
          </div>
          <СartItembutton
            id={id}
            name={name}
            img={img}
            price={price}
            key={id}
          />
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
