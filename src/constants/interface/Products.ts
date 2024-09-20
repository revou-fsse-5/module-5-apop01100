export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
}

export interface Products {
    map(arg0: (item: any) => { params: { productId: any; }; }): unknown;
    products: Product[];
}