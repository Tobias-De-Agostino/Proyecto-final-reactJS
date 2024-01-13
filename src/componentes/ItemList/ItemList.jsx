import { useParams } from "react-router-dom";
import ItemCard from "../ItemCard/ItemCard";
import "./ItemList.css"


const ItemList = ({productos}) => {
    const { categoryId } = useParams()


    return (
        <section>
            {/* <CategoryNavbar /> */}
            <h2>Todos los productos</h2>        
            <hr />
            <div>
                <section id="Indumentaria">{productos.map((item) => <ItemCard key={item.id} item={item}/>)}</section>
            </div>
        </section>
    );
};

export default ItemList;