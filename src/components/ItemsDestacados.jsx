import {collection,getDocs,getFirestore,limit,orderBy,query,} from "firebase/firestore";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";


//Busca los 4 productos con mayor stock para mostrarlos como promocionados.
const ItemsDestacados = () => {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    const itemsQuery = query(
      itemsCollection,
      orderBy("stock", "desc"),
      limit(4)
    );

    getDocs(itemsQuery).then((snapShot) => {
      if (snapShot.size > 0) {
        setItems(
          snapShot.docs.map((item) => ({ id: item.id, ...item.data() }))
        );
        setVisible(true);
      }
    });
  },[]);

  return (
    <>
      {visible ? (
        <div className="row text-center text-success mt-5 ">
          <h2 className="display-4 fw-semibold mb-5">Aprovecha estos productos destacados</h2>
          <div className="col text-center">
            <ItemList items={items} />
          </div>
        </div>
      ) : ("")}
    </>
  );
};

export default ItemsDestacados;
