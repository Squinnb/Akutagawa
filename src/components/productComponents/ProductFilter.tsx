import { FunctionComponent, useState, useEffect, memo } from "react";
import {Product} from "../../interfaces/inter"
import { useStrInput, useNumInput } from "../../hooks/useInput";

type defNumVal = number | "";
interface ProductFilterProps {
    prodData: Array<Product>;
    filterProducts: (brands: Set<string>, min: defNumVal, max: defNumVal, name: string) => void;
    resetProducts: (e: any) => void;
}
 
const ProductFilter: FunctionComponent<ProductFilterProps> = (props: ProductFilterProps) => {
    const {prodData, filterProducts, resetProducts} = props;

    // These are not the controlled input values, they are used to generate the form
    let [brands, setBrands] = useState<Array<string>>([])
    const [minPrice, setMinPrice] = useState(Infinity)
    const [maxPrice, setMaxPrice] = useState(Number.NEGATIVE_INFINITY)
    useEffect(() => {
        const uniqueBrands = new Set<string>()
        prodData.forEach((prod: Product) => { 
            uniqueBrands.add(prod['brand'])
            setMinPrice((oldPrice: number) => Math.min(oldPrice, prod.price))
            setMaxPrice((oldPrice: number) => Math.max(oldPrice, prod.price))
        })
        setBrands(Array.from(uniqueBrands))
    }, [])
    // ...

    // controlled input values
    const [name, setName] = useStrInput()
    const [min, setMin] = useNumInput()
    const [max, setMax] = useNumInput()
    const [selectedBrands, setSelectedBrands] = useState<Set<string>>(new Set())
    // ...

    const handleCheck = (checkBrand: string) => {
        if(selectedBrands.has(checkBrand)) {
            setSelectedBrands((oldSet) => {
                oldSet.delete(checkBrand)
                return oldSet
            })
        } else {
            setSelectedBrands( (oldSet) => {
                oldSet.add(checkBrand)
                return oldSet
            })
        }
    }

    return ( 
        <div id="searchContainer">
        <form id="filter" action="submit" onSubmit={(e:any) => { e.preventDefault(); filterProducts(selectedBrands, min, max, name);}}>
            <div>
            Filter <br />
            <span id="resetBtn" onClick={resetProducts}>Reset</span>
            </div>
            <div>
                {brands.map( (b: string) => {
                    return(
                        <div key={b}>
                            <input onChange={(e:any) => { handleCheck(e.target.value)}} type="checkbox" id={b} name={b} value={b} />
                            <label htmlFor={b}>{b}</label>
                        </div>
                    )})
                }
            </div>

            <div id="rightFormInputs">
                <div>
                    <input type="text" value={name} onChange={(e) => {setName(e)}} placeholder="Search product name"/>
                </div>
                <div id="priceRangeInputs">
                    <span>From {minPrice}$ </span><input type="number" onChange={(e) => setMin(e)} value={min} step={0.01} min={minPrice} max={maxPrice}/> <br />
                    <span> to {maxPrice}$ </span><input type="number" onChange={(e) => setMax(e)} value={max} step={0.01} min={minPrice} max={maxPrice}/>
                </div>
                <button id="searchButton">Search</button>
            </div>
        </form>
      
        </div>
     );
}
 
export default memo(ProductFilter);