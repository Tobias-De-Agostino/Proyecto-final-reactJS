import { Link } from 'react-router-dom'
import cartIcon from '../../assets/cart.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

// const CartWidget = () => {
//     const { itemsInCart } = useContext(CartContext)

//     return (
//         <div className="cart-widget">
//             <ul>
//                 <li>
//                     <a href="./pages/iniciar.html"><img src="./Images/aporte.png" alt="Login"/></a>
//                 </li>
//             </ul>
//             <ul>
//                 <li className="submenu">
//                     <img src="./Images/car.svg" id="img-carrito" alt="carrito"/>
//                     <span className="item-count">{itemsInCart}</span>
//                     <div id="carrito">
//                         <table id="lista-carrito">
//                             <thead>
//                                 <tr>
//                                     <th>Imagen</th>
//                                     <th>Nombre</th>
//                                     <th>Precio</th>
//                                     <th></th>
//                                 </tr>
//                             </thead>
//                             <tbody></tbody>
//                         </table>
//                         <a href="#" id="vaciar-carrito" className="btn-2">Vaciar carrito</a>
//                     </div>
//                 </li>
//             </ul>
//         </div>

//     );
// };

// export default CartWidget;

const CartWidget = () => {
    const { itemsInCart } = useContext(CartContext)

    // if ( itemsInCart() === 0 ) return null

    return (
        
        <Link to="/cart" className={`flex items-center gap-1 cursor-pointer`}>
            <img src="./Images/car.svg" alt='Cart icon' className='w-8'/>
            <span className='text-black text-2xl'>{ itemsInCart() }</span>
        </Link>
    )
}

export default CartWidget