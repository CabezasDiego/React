import { useEffect, useState } from "react";
import listaProductos from "./json/productos.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


const ItemDatailContainer = () => {
  const [item, setItem] = useState([]);
  const {id}= useParams();

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        const producto = listaProductos.find(item => item.id.toString() == id);
        resolve(producto);
      }, 2000);
    });
    promesa.then(respuesta => {
        setItem(respuesta);
    })
  },[id]);

  return (
    <div className="container my-5 ">
      <ItemDetail item={item}/>
    </div>
  
  );
};

export default ItemDatailContainer;