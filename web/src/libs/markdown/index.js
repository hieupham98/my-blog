import Markdown from 'markdown-it';
import sanitize from 'markdown-it-sanitizer';
// import katex from './katex';
import highlight from './highlight';

export function createRenderer() {
    const md = Markdown({
        html: true,
        linkify: true,
        typographer: true,
        highlight,
    });

    // md.use(katex, {
    //     throwOnError: true,
    //     strict: true,
    // });

    md.use(sanitize);

    return md;
}
