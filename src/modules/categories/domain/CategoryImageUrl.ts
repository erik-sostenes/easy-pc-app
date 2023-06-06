import { ensureUrlIsValid } from "../../shared/domain/UrlValid";

export function isCategoryImageUrlValid(imageUrl: string): boolean {
    return ensureUrlIsValid(imageUrl);
}

export function CategoryImageUrlNotValidError(imageUrl: string) {
    return new Error(`Image url ${imageUrl} is not vallid`);
}