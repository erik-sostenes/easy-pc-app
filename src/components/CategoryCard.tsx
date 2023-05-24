import Link from "next/link";
import { Category } from "../modules/categories/domain/Category";

export function CategoryCard({id, title, imageUrl}: Category){
    return (
        <li>
            <Link href={`/categories/[id]`} as={`/categories/${id}`}>
                {title}
            </Link>
        </li>
    )
}