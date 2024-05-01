import { useEffect, useState } from "react";
import listaProductos from "./json/productos.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const {id}=useParams();

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(id == "productos" ? listaProductos :
          id ? listaProductos.filter(item => item.categoria == id) : listaProductos);
        
      }, 2000);
    });
    promesa.then(respuesta => {
            setItems(respuesta);
    })
  },[id]);


  return (
    <div className="container my-5">
      <ItemList items={items}/>
    </div>
  
  );
};

export default ItemListContainer;
