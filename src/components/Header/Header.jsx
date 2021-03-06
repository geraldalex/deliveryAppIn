import {NavLink} from "react-router-dom";
import styles from "./Header.module.css";
import logo from "./img/delivery.png"
import { getApiResource, DB_ROOT } from '../../utils/network'; 



const Header = () => {
  return (
    <div className={styles.container}>
    <img
    className={styles.logo}
    src={logo}
    alt='icon'
    />
      <ul className={styles.list__container}>
          <li><NavLink to="/">Витрина</NavLink></li>
          <li><NavLink to="/cart" >Кошик</NavLink></li>
       
         
      </ul>

    
  </div>
  )
};

export default Header;