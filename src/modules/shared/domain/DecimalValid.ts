export function ensureDecimalIsValid(value: string): boolean {
    const regextExp = /^[-+]?[0-9]+\.[0-9]+$/;

    return regextExp.test(value);
}