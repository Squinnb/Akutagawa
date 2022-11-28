import {useEffect, useState, useContext, useMemo, memo} from 'react'
import Review from './Review'

import '../../details.css'
import ReviewForm from './ReviewForm';
import reviewList from '../../d/Revs';
interface Props {
    book_id: number;
}
interface ReviewData {
    id: number;
    user: string;
    book: number;
    date: string;
    text: string;
    title: string;
}
 function Reviews(props: Props) {
   
    const { book_id } = props
    
    let [hasReviewed, setHasReviewed] = useState<Boolean>(true)
    let [reviews, setReviews] = useState<ReviewData[]>([])

    // The user's review
    let [title, setTitle] = useState("")
    let [text, setText] = useState("")

    useEffect(() => {
        console.log(book_id)
        let revs: Array<ReviewData> = reviewList.filter( (r: ReviewData ) => {
            console.log(r)
            return r.book === book_id
        })
        console.log(revs)
        setReviews(revs)
    },[])


   

    return (
        <div className='review'>
            {
                false && !hasReviewed ?
                <ReviewForm setReviewText={setText} reviewText={text} setReviewTitle={setTitle} reviewTitle={title} /> :
                ""

            }
            
            {
                reviews.length > 0 ?
                reviews.map((rev, i) => {
                    return(
                        <Review key={rev.user} setReviews={setReviews} setHasReviewed={setHasReviewed} reviewData={rev} index={i} />
                    )
                })      :
                <h5>No reviews yet...</h5>
            }
        </div>
    )
}

export default memo(Reviews)