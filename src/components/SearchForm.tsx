import {useContext, useState} from "react";
import { UserContext } from "../contexts/UserContext";
import {Book} from './interfaces/baseInterface'


interface Props {
    sw: (a: Book[]) => void;
    books: Book[];
}

const SearchForm: React.FC<Props> = (props) => {

    const { books, sw } = props
    let [query, setQuery] = useState("")
    const { lang } : any = useContext(UserContext)
  
    const handleChange = (e: any) => {
        let sq = e.target.value
        setQuery(sq)
        console.log("q: ", query, sq)
    }

    const handleSearch = (e: any) => {
        e.preventDefault()

        let searchResults: Book[] = books.filter( (win) => { return win.title.includes(query) || win.name.includes(query)})
        console.log("search result array: ",searchResults)    
        console.log("search q: ", query)    
        sw(searchResults)

    }

    const pholderText = {"en": "Ex: Author, Title", "ja": "例：受賞者、受賞作"}
    const btnText = {"en": "Search", "ja": "検索"}

    return (
        <form onSubmit={handleSearch}>
        <input style={{marginRight: "6.4px"}} name="sq" value={query} onChange={handleChange} placeholder={pholderText[lang]} />
        <input type="submit" style={{cursor: "pointer"}}  value={btnText[lang]} />
        </form>
    )

}

export default SearchForm