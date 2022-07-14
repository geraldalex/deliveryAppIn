
 
import styles from "./Shop.module.css";
 
import { getApiResource, DB_ROOT,PROXY } from '../../utils/network';
import { useEffect, useState } from "react";
import MenuList from "../../components/Shop/MenuList";
 
 
 
const Shop = () => {
 
const [restorans, setRestorans] = useState(null)
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
}
 
useEffect(() => {
  getResource(PROXY + DB_ROOT)
}, [])
 
  return (
    <>
    
 {restorans && (
  <ul>
    {
      restorans.map(element => <li key={element}>{element}</li>)
    }
  </ul>
 )
  

 }

{menuKFC && <MenuList restoran={menuKFC}/> }
{menuMc && <MenuList restoran={menuMc}/> }
  


    
    </>
  )
};

 
export default Shop;
