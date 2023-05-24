import { Category } from "../../modules/categories/domain/Category";
import { CategoryCard } from "./CategoryCard";
import styles from "./CategoriesList.module.scss";

const cache: Category[] = [
    {id: "8fd01621-9445-43d9-b3a7-dbf445264418", name: "Celulares y Telefonia"},
    {id: "caf50c68-7a97-4293-9fff-421059bcf6a6", name: "Computación"},
    {id: "e89dd77a-a711-4fd7-a194-ed15baf77365", name: "Consolas y Videojuegos"},
    {id: "e9baa27c-23de-4285-8aa0-026e7980ec20", name: "Cámaras y accesorios"},
    {id: "fa35edfa-4fac-452a-a66e-f31c282f1fb3", name: "Electrónica, Audio y Video"},
];

export default function CategoriesList() {
    return (
        <header className={styles.categoriesList}>
            <ul className={styles.categoriesList__list}>
                {
                    cache?.map(({id, name})=> (
                        <CategoryCard 
                            id={id}
                            name={name} 
                        />
                    ))
                }
            </ul>
        </header>
    );
}