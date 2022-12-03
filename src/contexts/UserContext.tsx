import { createContext, useState, useEffect } from "react";
import { getBooks } from "../d/Books"
import { Book } from "../components/interfaces/baseInterface"
import { redirect } from "react-router-dom";

export const UserContext = createContext({"user": {name: "Guest"}, "lang": "ja", "toggleLang": () => {}, "setUserInfo": (s: string) => {console.log(s)}, "books": [{no: '1', name: 'Tatsuzō Ishikawa', title: 'Sōbō', magazine: 'Seiza', year: '1935上'}]})

export function UserProvider(props) {
    const [user, setUser] = useState({name: "Guest"})
    const [lang, setLang] = useState<string>("ja")
    const [books, setBooks] = useState<Array<Book>>(getBooks(lang))

    useEffect(() => {
      setBooks(getBooks(lang))
    },[lang])

    const toggleLang = () => { 
        const otherLang = lang === "en" ? "ja" : "en"
        setLang(otherLang)
    }

    const setUserInfo = (un: string) => {
        const newUser = {"name": un}
        setUser(newUser)
        redirect("/")
    }

    return (
        <UserContext.Provider value={{user, setUserInfo, lang, toggleLang, books}}>
            {props.children}
        </UserContext.Provider>
    );
}



