import Item from "./Item";

const ItemList = ({ items }) => {
  return (
     <div className="row row-cols-1 row-cols-md-4 g-2" style={{ marginBottom: '200px' }} >
      {items.map(item => (
        <div key={item.id}>
          
            <Item  item={item} />
   
        </div>
      ))}
    </div>
  );
};

export default ItemList;
