import React from 'react';
import {useState, useContext} from 'react'

import '../../details.css'

interface Props {
    reviewTitle: string;
    setReviewTitle: Function;
    reviewText: string;
    setReviewText: Function;
    // This will be the POST, PUT, or DELETE review function
}

export default function ReviewForm(props: Props) {
    const { setReviewText, setReviewTitle, reviewText, reviewTitle } = props

    const handleChange = (e: any) => {
        if(e.target.name === "reviewTitle") { setReviewTitle(e.target.value) }
        else if(e.target.name === "reviewText") { setReviewText(e.target.value) }
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        
    }

    return (
        <form action="submit" onSubmit={(e) => handleSubmit(e)} className='review_form'>
            <input className='review_form_title' value={reviewTitle} type="text" name='reviewTitle' onChange={(e) => handleChange(e)} placeholder='レビュータイトル' />
            <textarea className='review_form_text' value={reviewText} name="reviewText"  onChange={(e) => handleChange(e)}　placeholder='レビュー文章'> </textarea>
            <button className='review_form_btn'>レビュー送信</button>
        </form>
    )
}
