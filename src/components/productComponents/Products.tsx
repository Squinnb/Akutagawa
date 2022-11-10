import { FunctionComponent, useEffect, useState } from "react";
import ProductList from "./ProductList";
import ProductFilter from "./ProductFilter"

import {productData} from "../../dummyData/data";
import { Product } from "../../interfaces/inter";





const Products = () => {

    const [products, setProducts] = useState(productData);

    const resetProducts = () => {
        setProducts(productData);
    }

    type defNumVal = number | "";
    let filterProducts = (brands: Set<string>, min: defNumVal, max: defNumVal, name: string) => {
        // search prod by name,
        // filter by brand and price range
        let filteredProducts = products.filter((p: Product) => {
            if(name.length >= 1) {
                if(!p.name.includes(name)) return false;
            }
            if(min !== ""){
                if(p.price < min) return false;
            }
            if(max !== ""){
                if(p.price > max) return false;
            }
            if(brands.size > 0){
                if(!brands.has(p.brand)) return false;
            }
            return true;
        })
        setProducts(filteredProducts)


    }


    return (  
        <div>
            <ProductFilter prodData={productData} resetProducts={resetProducts} filterProducts={filterProducts}/>
            <ProductList productList={products}/>
        </div>
    );
}



 
export default Products;