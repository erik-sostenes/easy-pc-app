import { Category } from "./Category";

export interface CategoryRepository {
    save: (category: Category) => Promise<void>;
    get: (id: string) => Promise<Category | null>;
    getAll(): Promise<Category[]>;
}