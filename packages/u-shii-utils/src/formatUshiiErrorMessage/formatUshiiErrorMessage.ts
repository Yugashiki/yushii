/**
 * WARNING: Don't import this directly. It's imported by the code generated by
 * `@u-shii/interal-babel-plugin-minify-errors`. Make sure to always use string literals in `Error`
 * constructors to ensure the plugin works as expected. Supported patterns include:
 *   throw new Error('My message');
 *   throw new Error(`My message: ${foo}`);
 *   throw new Error(`My message: ${foo}` + 'another string');
 *   ...
 * @param {number} code
 */
export default function formatUshiiErrorMessage(code: number, ...args: string[]): string {
    const url = new URL(`https://docs.u-shii.com/production-error/?code=${code}`);
    args.forEach((arg) => url.searchParams.append('args[]', arg));
    return `Minified u-shii error #${code}; visit ${url} for the full message.`;
}