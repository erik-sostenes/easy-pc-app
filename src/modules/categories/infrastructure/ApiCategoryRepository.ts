import { Category } from "../domain/Category";
import { CategoryRepository } from "../domain/CategoryRepository";

export function createApiCategoryRepository(): CategoryRepository {
    return {
        save,
        get,
        getAll
    }
}

async function save(category: Category) {
    await fetch("/api/categories/create", {
        method: "POST",
        body: JSON.stringify({
            id: category.id,
            title: category.title,
            
        })  
    })
}

async function get(id: string) {
    const categories = await fetch(`/api/categories/${id}`).then(
        (response) => response.json() as Promise<Category>
    )

    return categories;
}

async function getAll() {
    const response = await fetch("/api/categories");

    if(!response.ok)
        throw new Error(`Failed request to categories`);

    return response.json() as Promise<Category[]>;     
}