import { Business } from "./Business";

export interface Category {
      CategorySlug: string,
      active: boolean,
      business: Business,
      created_at: string,
      description: string,
      foods: any[],
      id: number,
      image: any[],
      name: string,
      published_at: string,
      updated_at: string,
      map(element: (category: Category) => JSX.Element): any;
}
