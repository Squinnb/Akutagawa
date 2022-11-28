import { useContext, createContext, useState } from "react";

export const UserContext = createContext()

export function UserProvider(props) {
    const [user, setUserInfo] = useState({name: "ゲスト"})
    const [cart, setCart] = useState([])

    return (
        <UserContext.Provider value={{user, cart, setCart}}>
            {props.children}
        </UserContext.Provider>
    );
}



