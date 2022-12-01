import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import {Book} from './interfaces/baseInterface'


const BookItem: React.FC<Book> = (win) => {
    const { year, name, title, no} = win

    return (

        <tr className="">
            <td>{year} </td>
            <td> {name} </td>
            <td> <Link to={`/akutagawashou/${no}`}> <button className="titleBtn">{title} </button> </Link> </td>
        </tr>
    )
}

export default BookItem