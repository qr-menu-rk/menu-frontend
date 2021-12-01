import { Category } from "./Category";
export interface Business {
   bussines_name: string,
   bussines_profile: {},
   food_categories: Category[],
   id: number,
   slug: string,
   user: {}
}
