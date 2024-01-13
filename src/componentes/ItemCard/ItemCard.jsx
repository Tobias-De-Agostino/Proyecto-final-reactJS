import "./ItemCard.css";
import { Link } from "react-router-dom";
import Boton from "../../ejemplos/renderprops/Boton";

const ItemCard = ({item}) => {

return (
    <article className="product">
        <img src={item.img} alt={item.name} />
        <div className="product-txt">
            <h3 className="nombre-producto">{item.name}</h3>
            <hr />
            <p>{item.description}</p>
            { item.stock <= 10 && <p className="font-bold text-red-500">Quedan sólo {item.stock} unidades!</p> }

            <p className="precio">Precio: ${item.price}</p>

            <Boton className="btn-2">
                <Link to={`/item/${item.id}`}>Ver más</Link>
            </Boton>
        </div>
    </article>
    );
};

export default ItemCard;