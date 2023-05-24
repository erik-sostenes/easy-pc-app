import { Category } from "@/src/modules/categories/domain/Category";
import Link from "next/link";

export function CategoryCard({id, title, imageUrl}: Category){
    return (
        <li>
            <Link href={`/categories/[id]`} as={`/categories/${id}`}>
                {title}
            </Link>
        </li>
    )
}