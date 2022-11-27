
export interface Book {
    no: string;
    name: string;
    title: string;
    year: string;
    magazine: string;
}

export interface ReviewData {
    id: number;
    user: string;
    book: number;
    date: string;
    text: string;
    title: string;
}