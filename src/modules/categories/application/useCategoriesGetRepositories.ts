import { Category } from "../domain/Category";
import { CategoryRepository } from "../domain/CategoryRepository";

export function useCategoriesGetRepositories(categoryRepository: CategoryRepository)  {
    return async (): Promise<Category[] | undefined> => {
        return await categoryRepository.getAll();
    }
}