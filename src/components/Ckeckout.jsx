import { useContext, useEffect, useRef, useState } from "react";
import { collection, addDoc, getFirestore, getDocs } from "firebase/firestore";
import { CartContext } from "./context/CartContext";
import CarritoVacio from "./CarritoVacio";

const Checkout = () => {
  const { cart, clear, getCountProducts, getSumPriceProducts } =
    useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [orderId, setOrderId] = useState("");
  const modalRef = useRef(null);



  const generarOrden = () => {
      const buyer = { nombre: nombre, email: email, telefono: telefono };
      const items = cart.map((item) => ({ id: item.id, nombre: item.nombre, precio: item.precio}));
      const date = new Date();
      const currentDate = `${date.getDate()} - ${date.getMonth()+1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      const orden = { fecha:currentDate, buyer: buyer, items: items, total: getSumPriceProducts() };

      const db = getFirestore();
      const ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, orden).then((data) => {
          setOrderId(data.id);
      });
  };
 
// Efecto para abrir el modal cuando orderId cambia
     useEffect(() => {
         if (orderId) {
         const modal = new window.bootstrap.Modal(modalRef.current);
         modal.show();
         }
     }, [orderId]);

  // Limpia el carrito al cerrar el modal
    const closeModal = () => {
    clear();
    };



  return getCountProducts() == 0 ? (
    <CarritoVacio />
  ) : (
    <div className="container my-5">
      <div className="row mt-2 mb-5">
        <div className="col-5">
          <div className="row my-3">
            <form>
              <div className="mb-3">
                <label for="inputNombre" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  onInput={(e) => {
                    setNombre(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="mb-3">
                <label for="InputEmail" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  onInput={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="mb-3">
                <label for="InputTelefono" className="form-label">
                  Telefono
                </label>
                <input
                  type="text"
                  className="form-control"
                  onInput={(e) => {
                    setTelefono(e.target.value);
                  }}
                  required
                />
              </div>
              <button
                type="button"
                className="btn btn-lg text-white bg-success rounded-0" onClick={() => generarOrden()}
              >
                Generar Orden
              </button>
            </form>
          </div>
        </div>
        <div className="col-auto">
          <div className="row my-3 ms-3 align-items-center">
            <table className="table">
              <tbody>
                  <tr>
                    <td>&nbsp;</td>
                    <td className="text-star text-primary fs-5">
                      <b>Producto</b>
                    </td>
                    <td className="text-end text-primary fs-5 ">
                      <b>Precio </b>
                    </td>
                    <td className="text-end text-primary fs-5 ">
                      <b>Cantidad</b>
                    </td>
                    <td className="text-end text-primary fs-5 ">
                      <b>Subtotal</b>
                    </td>
                  </tr>
                  {cart.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img src={item.img} alt={item.nombre} width={90} />
                      </td>
                      <td className="align-middle">{item.nombre}</td>
                      <td className="text-end align-middle">${item.precio}</td>
                      <td className="text-end align-middle">{item.quantity}</td>
                      <td className="text-end align-middle">
                        ${item.precio * item.quantity}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td>&nbsp;</td>
                    <td colSpan={2} className="text-primary fs-5">
                      <b>Total</b>
                    </td>
                    <td className="text-end text-primary fs-5">
                      <b>{getCountProducts()}</b>
                    </td>
                    <td className="text-end text-primary fs-5">
                      <b>${getSumPriceProducts()}</b>
                    </td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          {orderId ? (
                <div className="modal" ref={modalRef}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title fs-3">Buenas noticias!</h5>  
                            </div>
                            <div className="modal-body fs-4">
                                <p>Se generó la orden de compra <b className="text-success">{orderId}</b></p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-dark rounded-0" data-bs-dismiss="modal" onClick={() => closeModal()}>OK</button>
                            </div>
                        </div>
                    </div>
                </div>
                
 
          ) : ("")}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
