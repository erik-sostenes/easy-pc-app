import { useCategoriesGetRepositories } from "../modules/categories/application/useCategoriesGetRepositories"
import { Category } from "../modules/categories/domain/Category";
import { createApiCategoryRepository } from "../modules/categories/infrastructure/ApiCategoryRepository";
import { CategoryCard } from "./CategoryCard";
import styles from "./CategoriesList.module.scss";

const cache: Category[] = [
    {id: "1", title: "Components"},
    {id: "2", title: "Components"},
    {id: "3", title: "Components"},
    {id: "4", title: "Components"},
    {id: "5", title: "Components"},
    {id: "6", title: "Components"},
    {id: "7", title: "Components"},
    {id: "1", title: "Components"},
    {id: "2", title: "Components"},
    {id: "3", title: "Components"},
    {id: "4", title: "Components"},
    {id: "5", title: "Components"},
    {id: "6", title: "Components"},
    {id: "7", title: "Components"}
];

export default function CategoriesList() {
   // const repository = createApiCategoryRepository();
    //const categories = await useCategoriesGetRepositories(repository)();  

    return (
        <header className={styles.categoriesList}>
            <ul className={styles.categoriesList__list}>
                {
                    cache?.map(({id, title, imageUrl})=> (
                        <CategoryCard 
                            id={id}
                            title={title} 
                            imageUrl={imageUrl}
                        />
                    ))
                }
                
            </ul>
            
        </header>
    );
}