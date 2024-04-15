import cart from "../assets/img/cart.svg";

const CartWidget = () => {
    return (
        <>
            <button type="button" className="btn position-relative">
                <img src={cart} alt="Carrito" width={24} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    1
                    <span className="visually-hidden">unread messages</span>
                </span>
            </button>
        </>
    )
}

export default CartWidget;