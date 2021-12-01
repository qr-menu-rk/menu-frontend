import { Category } from "./Category";
export interface Food {
    active: boolean,
    currency: string,
    description: string,
    food_categories: Category[],
    id: number,
    images: any[],
    name: string,
    price: number
}