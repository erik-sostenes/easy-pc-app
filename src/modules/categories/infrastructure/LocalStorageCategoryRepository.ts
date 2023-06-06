import { Category } from "../domain/Category";
import { CategoryRepository } from "../domain/CategoryRepository";

export function createLocalStorageCourseRepository(): CategoryRepository {
	return {
		save,
		get,
		getAll,         
	};
}

async function save(category: Category) {
    const categories = getAllFromLocalStorage();

    categories.set(category.id, category);
    localStorage.setItem("categories", JSON.stringify(Array.from(categories.entries())));    

}

async function get(id: string) {
	const categories = getAllFromLocalStorage();
	const category = categories.get(id);

	if (!category)
		return Promise.resolve(null);

	return Promise.resolve(category);
}

async function getAll() {
	const categories = getAllFromLocalStorage();

	return Promise.resolve(Array.from(categories.values()));
}

function getAllFromLocalStorage(): Map<String, Category> {
    const categories = localStorage.getItems();

    if(categories === null)
        return new Map();

		const map = new Map(JSON.parse(categories) as Iterable<[string, Category]>);

    return map;
}