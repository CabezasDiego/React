const ItemListContainer = ({ mensaje }) => {
    return (
        <div className="container-fluid">
            <div className="row align-items-center justify-content-center">
                <div className="col-6 p-3 text-center bg-info">
                    <h3>{mensaje}</h3>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;