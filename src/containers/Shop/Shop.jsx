
 
import styles from "./Shop.module.css";
 
import { getApiResource, DB_ROOT,PROXY } from '../../utils/network';
import { useEffect, useState } from "react";
 
 
 
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

{menuKFC && (
  <ul>
    {
      menuKFC.map(({id, name, img, price}) => <li key={id}>
        {name}
        <img src={img} />
        {price}
        </li>)
    }
  </ul>
 )
  

 }
    
    </>
  )
};

 
export default Shop;
