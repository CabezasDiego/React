import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";
import Loading  from "./Loanding";


const ItemListContainer = () => {
const [items, setItems] = useState([]);
const [visible, setVisible] = useState(true);
const {id}=useParams();

 
useEffect (() => { 
  const db=getFirestore();
  const itemsCollection = collection(db, "items");
  const queryCollection = id ? (id == "productos" ? itemsCollection :  query(itemsCollection, where("categoria","==",id))) : itemsCollection;
  getDocs(queryCollection).then(snapShot=>{
    if (snapShot.size >0) {
      setItems(snapShot.docs.map(item=>({id:item.id, ...item.data()})));
      setVisible(false);
    }
  })
})

  return (
    <div className="container my-5">
      {visible ? <Loading/> :<ItemList items={items}/>}
    </div>
  
  );
};

export default ItemListContainer;
