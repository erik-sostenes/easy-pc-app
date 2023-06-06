import { CategoryIdNotValidError, isCategoryIdIsValid } from "./CategoryId";
import { CategoryImageUrlNotValidError, isCategoryImageUrlValid } from "./CategoryImageUrl";
import { CategoryTitleNotValidError, isCategoryTitleValid } from "./CategoryTitle";

export interface Category {
    id: string;
    name: string;
    imageUrl?: string;
} 

function ensureCategoryIsValid(id: string, title: string, imageUrl: string): void {
    if(!isCategoryIdIsValid(id))
        throw CategoryIdNotValidError(id);
    
    if(!isCategoryTitleValid(title)) 
        throw CategoryTitleNotValidError(title);
        
    if(!isCategoryImageUrlValid(imageUrl))
        throw CategoryImageUrlNotValidError(imageUrl);
}