import {useState, useContext} from 'react'
import '../../details.css'
import glasses from '../../icons/glasses.png'
import ReviewForm from './ReviewForm'

import {ReviewData} from '../interfaces/baseInterface'

interface Props {
    reviewData: ReviewData;
    setReviews: Function;
    setHasReviewed: Function;
    index: number;
}

export default function ReviewItem(props: Props) {
    const { reviewData, setReviews, setHasReviewed, index } = props
    const book_id = reviewData.book

    // User Info
    
     // The user's review
     let [editTitle, setEditTitle] = useState(reviewData.title)
     let [editText, setEditText] = useState(reviewData.text)
    
    const isUserReview: boolean = false
    let [editMode, setEditMode] = useState<boolean>(false)

    const sendPost = () => {console.log("not to self")}
    const sendPut = () => {console.log("not to self")}
    const sendDelete = () => {console.log("not to self")}

    if(editMode) {
        return (
            <ReviewForm setReviewText={setEditText} reviewText={editText} setReviewTitle={setEditTitle} reviewTitle={editTitle}/>
        )
    } else {
        return (
            <div className='review_item'>
                <div className='reviewImageNameContainer'> <img src={glasses} alt="..." /> <div className='reviewItemName'> { reviewData.user }</div> </div> 
                <div className="row"> <b>{reviewData.title}</b> { isUserReview ? <><button onClick={() => setEditMode(true)} >編集</button> <button onClick={sendDelete} >削除</button></> : ""} </div> 
                <p className='reviewItemText'>{reviewData.text}</p>
            </div>
        )
    }
   
}
