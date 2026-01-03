export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
export const link = (text, url = '') => `\x1b]8;;${url}\x1b\\${text}\x1b]8;;\x1b\\`;
