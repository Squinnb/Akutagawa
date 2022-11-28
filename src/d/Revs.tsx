
interface ReviewData {
    id: number;
    user: string;
    book: number;
    date: string;
    text: string;
    title: string;
}



const reviewList: Array<ReviewData> = [
    {id: 1, user: "Quinn", book: 1, date:"", title: "I'd like to read", text: "I've read his other book '生きている兵隊' in English and it was pretty good. Maybe I will check this out, the JP version."},
    {id: 2, user: "Quinn", book: 155, date:"", title: "My first book I read 日本語で", text: "I especially like the description of a konbini that starts on page one."}
]

export default reviewList