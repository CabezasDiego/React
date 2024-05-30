import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from "./Loanding";


const ItemDatailContainer = () => {
  const [item, setItem] = useState([]);
  const [visible, setVisible] = useState(true);
  const {id}= useParams();

  useEffect (() => { 
    const db=getFirestore();
    const docRef = doc(db, "items", id);
    getDoc(docRef).then(snapShot=>{
      if (snapShot.exists()) {
        setItem({id:snapShot.id, ...snapShot.data()});
        setVisible(false);
      }
    });
  },[id])

  return (
    <div className="container my-5 ">
      {visible ? <Loading/> : <ItemDetail item={item}/>}
    </div>
  
  );
};

export default ItemDatailContainer;