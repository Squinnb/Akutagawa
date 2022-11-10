import { FunctionComponent, useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";
import ProductItem from "./productComponents/ProductItem.js";
interface CartProps {
    
}
 
const Cart: FunctionComponent<CartProps> = () => {
    const {user, cart, setCart}: any = useContext(UserContext)

    return ( 
        <div>
            <h2>{user.name}'s cart</h2>
            
            <div>
                {cart.map((item) => {
                    return (
                        <div >
                            {item.name} <br />
                            {item.price} <br />
                            {item.quantity} <br />

                        </div>
                    )
                })}
            </div>
        </div>
     );
}
 
export default Cart;