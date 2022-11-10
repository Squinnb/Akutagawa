import { FunctionComponent, useContext } from "react";
import { UserContext } from "../../contexts/UserContext.jsx" 
import { Product } from "../../interfaces/inter.js";
import "./product.css"


 
const ProductItem: FunctionComponent<Product> = (props: Product) => {
    const {user, cart, setCart}: any = useContext(UserContext)
    
    const handleAddToCart = () => {
        if(props.quantity < 1) return;
        // implement Post request to flask api
        setCart((oldCart) => {
            const itemIndex: number = oldCart.findIndex((item: Product) => {return item.name === props.name})
            if( itemIndex !== -1){
                oldCart[itemIndex].quantity++
            } else {
                let newItem: Product = {...props, quantity: 1}
                oldCart.push(newItem)
            }
            return oldCart
        })
    }


    return ( 
        <div className="productCard" key={props.desc}>
            <div className="prodName">{props.name}</div>
            <div onClick={handleAddToCart} id="addToCartBtn">Add to cart</div>
            <div><span>Description: </span>  {props.desc}</div>
            <div> <span>Brand: </span> {props.brand}</div>
            <div><span>Price: </span> {props.price}</div>
            <div><span>Quantity: </span> {props.quantity}</div>
        </div>
     );
}
 
export default ProductItem;