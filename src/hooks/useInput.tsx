import { useState } from "react";


 
export const useStrInput = (defVal: string = "") => {
    const [value, setValue] = useState(defVal);
    const setSearchValue = (e: any) => {
        const searchValue: string = e.target.value.trim();
        setValue(searchValue);
    }

    return [value, setSearchValue] as const
}

type defNumVal = number | "";
export const useNumInput = (defVal: defNumVal = "") => {
    const [value, setValue] = useState<defNumVal>(defVal);
    const setSearchValue = (e: any) => {
        const searchValue: defNumVal = e.target.value.length === 0 ? "" : Number(e.target.value);
        console.log(searchValue, typeof searchValue)
        setValue(searchValue);
    }

    return [value, setSearchValue] as const
}
 
