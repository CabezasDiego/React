import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
    const [contador, setContador]=useState(1);
    const [itemStock, setItemStock]=useState(stock);
    const [visible, setVisible]=useState(true);
    

    const incrementar= () => {
        if (contador < itemStock) {
            setContador(contador + 1);
        }
    }

    const decrementar= () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

     const agregarCarrito=()=>{
        if(contador<=itemStock){
            setItemStock(itemStock-contador);
            onAdd(contador);
            setContador(1);
            setVisible(false);
        }
    }

    useEffect(()=>{
        setItemStock(stock);
    },[stock])


    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="btn-group my-2" role="group">
                        <button type="button" className="btn btn-info fw-bold" onClick={decrementar}> - </button>
                        <button type="button" className="btn btn-info fw-bold">{contador}</button>
                        <button type="button" className="btn btn-info fw-bold" onClick={incrementar}> + </button>
                    </div>
                </div>
            </div>
            <div className="row  my-1">
                <div className="col">
                {visible ? (
                    <>
                        <button type="button" className="btn btn-warning fw-bold" 
                        onClick={agregarCarrito} disabled={itemStock === 0}
                        >Agregar al carrito</button>
                        
                        {itemStock === 0 && <p className="text-danger fw-bold">No hay stock</p>}
                    </>
                    ) : (
                    <Link to="/cart" className="btn btn-success text-white fw-bold btn-lg">
                        Ver Carrito
                    </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ItemCount;