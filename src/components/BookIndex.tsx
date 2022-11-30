import React, { useState, useContext, useEffect } from 'react';
import '../App.css';
import BookList from "./BookList"
import SearchForm from "./SearchForm";
import {Book} from './interfaces/baseInterface'
import { UserContext } from '../contexts/UserContext';


const BookIndex: React.FC = () => {
  let books  : Array<Book> = useContext(UserContext).books
  const [winners, setWinners] = useState(books.slice(0, 12))
  const [decade, setDecade] = useState<string>("193")
  useEffect(() => {
    setBooksByDecade(decade)
  },[books])
  
  const handleClick = (e: any) => {
    const year = e.target.name;
    setDecade(year)
    setBooksByDecade(year)
  }

  const setBooksByDecade = (year: string) => {
    if(year === "all") {
      setWinners(books.slice(0, books.length))
    } else {
      const newWinners = books.filter( (w) => {
        return w.year.slice(0,3) === year
      })
      setWinners(newWinners)
    }
  }

      
    

  return (
    <div className="winnerIndex">
      
    
      <div className="toggleBtnBox">

        <div className="txtL">
          <button name="all" onClick={handleClick} className="toggleBtn">全年表</button>
        </div> 

        <div className="txtL">
          <button name="193" onClick={handleClick} className="toggleBtn">1930年</button>
          <button name="194" onClick={handleClick} className="toggleBtn">40年</button>
          <button name="195" onClick={handleClick} className="toggleBtn">50年</button>
          <button name="196" onClick={handleClick} className="toggleBtn">60年</button>
          <button name="197" onClick={handleClick} className="toggleBtn">70年</button>
          <button name="198" onClick={handleClick} className="toggleBtn">80年</button>
          <button name="199" onClick={handleClick} className="toggleBtn">90年</button>
        </div> 
        <div className="txtL">
          <button name="200" onClick={handleClick} className="toggleBtn">2000年</button>
          <button name="201" onClick={handleClick} className="toggleBtn">10年</button>
          <button name="202" onClick={handleClick} className="toggleBtn">20年</button>
          
        </div>
        
        <div className="txtL">
          <SearchForm sw={setWinners} data={books} />
        </div>
        
      </div>

      
      <div className="listContainer">
        <BookList winners={winners} />
      </div>
      
    </div>
  );
}

export default BookIndex;
