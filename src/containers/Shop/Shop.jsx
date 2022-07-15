
 import cn from 'classnames'
import styles from "./Shop.module.css";
 
import { getApiResource, DB_ROOT,PROXY } from '../../utils/network';
import { useEffect, useState } from "react";
import MenuList from "../../components/Shop/MenuList";
 
 
 
const Shop = () => {
 
const [restorans, setRestorans] = useState(null)
const [curentRestorans, setCurrentRestorans] = useState(null)
const [menuMc, setMenuMc] = useState(null)
const [menuKFC, setMenuKFC] = useState(null)
const [menuRis, setMenuRis] = useState(null)
 
const getResource = async (url) => {
const res  = await getApiResource(url);
 
const restoranList = Object.keys(res.restorans);
setRestorans(restoranList)



const menuListKFC = res.restorans.KFC.map(({id, name, img, price}) => {
  return {
    id,
    name,
    img,
    price
  }
 
})
setMenuKFC(menuListKFC)

const menuListMc = res.restorans.McDonalds.map(({id, name, img, price}) => {
  return {
    id,
    name,
    img,
    price
  }
 
})
setMenuMc(menuListMc)

const menuListRis = res.restorans.Ris.map(({id, name, img, price}) => {
  return {
    id,
    name,
    img,
    price
  }
 
})
setMenuRis(menuListRis)
}
 
useEffect(() => {
  getResource(PROXY + DB_ROOT)
}, [])
 
  return (
    <>
    <div className={styles.container}>
      <div  className={styles.container__restoran}>
        <h3 className={styles.container__restoran_text}>Заклади:</h3>
 {restorans && (
  <ul>
    {
      restorans.map(element => <button className={cn(styles.restoran__button,{restoran__button_active:curentRestorans===element})} key={element} onClick={() => setCurrentRestorans(element)}>{element}</button>)
    }
  </ul>
 )
  

 }
</div>

<div className={styles.container__menu}>
 

{menuKFC && <MenuList restoran={menuKFC}/> }

{menuRis && <MenuList restoran={menuRis}/> }

{menuMc && <MenuList restoran={menuMc}/> }


</div>
</div>

    
    </>
  )
};

 
export default Shop;
