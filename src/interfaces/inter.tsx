export interface Product {
    name: string;
    brand: string;
    desc: string;
    price: number;
    quantity: number;
}

export interface User {
    name: string;
    cart: Array<Product>;
}
