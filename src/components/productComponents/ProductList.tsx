import { FunctionComponent, useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import Product from "./Products"

import "./product.css"

interface Product {
    name: string;
    brand: string;
    desc: string;
    price: number;
    quantity: number;
}
interface ProductListProps {
    productList: Array<Product>;
}

 
const ProductList: FunctionComponent<ProductListProps> = (props: ProductListProps) => {
    const {productList} = props
    return ( 
        <div id="productList">
            {productList.map((prod, i) => {
                return <ProductItem key={i} {...prod} />
            })}
        </div>
     );
}
 
export default ProductList;