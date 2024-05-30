import { useEffect, useState } from "react";
import arrayProductos from "./json/productos.json";
import { addDoc, collection, getFirestore} from "firebase/firestore";

const CargarJson = () => {

 useEffect(() => {
    const [items, setItems] = useState([]);
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(arrayProductos);
            }, 2000)
        });
        
        promesa.then(respuesta => {
            setItems(respuesta);
        })
    }, []);

//Para agregar todos los productos mi array JSON a mi BD Firestore
    const db = getFirestore();
        const itemsCollection = collection(db, "items");
        arrayProductos.forEach(item => {
            addDoc(itemsCollection, item);
        })
        console.log("Proceso de carga productos completo!");

    return(
        <div><h1>Cargo</h1></div>

    )
}

export default CargarJson;