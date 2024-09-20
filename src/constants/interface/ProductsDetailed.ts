import { Product } from "./Products";

interface Category {
    id: number;
    name: string;
    image: string;
}

export type ProductDetailed = Product & {
    category: Category
}

export interface ProductsDetailed {
    product: ProductDetailed;
}
