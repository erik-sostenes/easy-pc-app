export function ensureUrlIsValid(url: string): boolean {
    const regextExp = /^(?:https?:\/\/)?(?:[\w]+\.)(?:\.?[\w]{2,})(\/[\w]*)*(\.[\w]+)*/;

    return regextExp.test(url);
}