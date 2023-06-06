export const TITLE_MAX_LENGTH = 30;
export const TITLE_MIN_LENGTH = 5;

export function isCategoryTitleValid(title: string): boolean {
        return title.length >= TITLE_MIN_LENGTH && title.length <= TITLE_MAX_LENGTH;
    }

export function CategoryTitleNotValidError(title: string): Error {
        return new Error(`The title ${title} is not valid`);
    } 