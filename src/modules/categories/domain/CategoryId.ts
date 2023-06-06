import { ensureUuidIsValid } from "../../shared/domain/UuidValid";

export function isCategoryIdIsValid(id: string): boolean {
    return ensureUuidIsValid(id);
}

export function CategoryIdNotValidError(id: string): Error {
    return new Error(`The id ${id} is not a valid`);
}