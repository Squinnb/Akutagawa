import React, { memo, useContext } from 'react';
import { useParams } from 'react-router-dom'
// import '../App.css';
import '../details.css'
import Reviews from './BookDetailComponents/Reviews';
import photo from "../bookPhotos/コンビニ人間.jpg"
import {UserContext} from "../contexts/UserContext.jsx"


const BookDetails: React.FC =() => {
    const { lang, books } : any = useContext(UserContext)
    const no: string | undefined = useParams()["no"]
    const { year, name, title } = books.filter( b => b.no === no)[0]
    const detailText = {"en": {"Author": "Author: ", "Book": "Winning Title: "}, "ja": {"Author": "作家: ", "Book": "受賞作: "}}

    const summary: string = "36歳未婚女性、古倉恵子。大学卒業後も就職せず、コンビニのバイトは18年目。これまで彼氏なし。日々食べるのはコンビニ食、夢の中でもコンビニのレジを打ち、清潔なコンビニの風景と「いらっしゃいませ!」の掛け声が、毎日の安らかな眠りをもたらしてくれる。ある日、婚活目的の新入り男性、白羽がやってきて、そんなコンビニ的生き方は恥ずかしいと突きつけられるが…。「普通」とは何か?現代の実存を軽やかに問う衝撃作。第155回芥川賞受賞。"
    const details: any = {"コンビニ人間": {summary: summary, photo: photo}}

    return (
        <div id='bookDetailsContainer'>
            <div className="detailBox">
                    <div className="flex">
                        <h2 className="sameLine">
                            {no} 回
                        </h2>
                        <h2  className="sameLine slRight">
                            {year}
                        </h2>
                    </div>
                        
                    <div className="flex">
                        <div className="wd">
                            <span className="setsumei2">{detailText[lang].Author} </span>  {name} <br/>
                            <span className="setsumei2">{detailText[lang].Book}</span> {title} <br/>     
                        </div>
                        { title === "コンビニ人間" ? <img className="bookPhoto slRight"  alt="loading..." src={photo} /> : ""}
                    </div>
                    { typeof title === "string" ?
                    <p className="setsumei">
                        { details[title] ? details[title].summary : "..."}
                    </p> : ""}
            </div>
            
            <div id='reviewContainer'>
                <Reviews book_id={Number(no)}/>
            </div>
        </div>

    )
    
    
}

export default memo(BookDetails)