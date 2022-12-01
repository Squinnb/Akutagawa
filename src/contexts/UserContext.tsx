import { createContext, useState, useEffect } from "react";
import { getBooks } from "../d/Books"
import { Book } from "../components/interfaces/baseInterface"

export const UserContext = createContext({"user": {name: "ゲスト"}, "lang": "ja", "toggleLang": () => {}, "books": [{no: '1', name: 'Tatsuzō Ishikawa', title: 'Sōbō', magazine: 'Seiza', year: '1935上'}]})

export function UserProvider(props) {
    const [user, setUserInfo] = useState({name: "ゲスト"})
    const [lang, setLang] = useState<string>("ja")
    const [books, setBooks] = useState<Array<Book>>(getBooks(lang))

    useEffect(() => {
      setBooks(getBooks(lang))
    },[lang])

    const toggleLang = () => {
        
        const otherLang = lang === "en" ? "ja" : "en"
        setLang(otherLang)
    }

    return (
        <UserContext.Provider value={{user, lang, toggleLang, books}}>
            {props.children}
        </UserContext.Provider>
    );
}



