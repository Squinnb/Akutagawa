import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import BookItem from "./BookItem"
import {Book} from './interfaces/baseInterface'

interface BookListProps {
    winners: Book[]
}

const BookList: React.FC<BookListProps> = (winprops: BookListProps) => {

    const { lang } : any = useContext(UserContext)
    const tableText = {"en": ["Year", "Author", "Title"], "ja": ["受賞年", "受賞者", "受賞作"]}

    return (
        <div data-testid="WinnerList" className="winnersDisp">
            <table>
            <tbody>
                <tr>  
                    <th>{tableText[lang][0]}</th>
                    <th>{tableText[lang][1]}</th>
                    <th>{tableText[lang][2]}</th>
                    {/* <th>掲載誌</th> */}
                </tr>
                
                {
                 winprops.winners.map( (win, i) => (
                    <BookItem key={i}
                        {...win}
                    />  )
                 )
                }
                </tbody>

            </table>
        
        </div>
      
    )
}

export default BookList;