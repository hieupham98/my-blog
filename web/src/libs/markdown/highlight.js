import _flow from 'lodash/flow';
import { escapeHtml } from 'markdown-it/lib/common/utils';

/**
 * @param {string} code
 * @param {string} lang
 * @returns {string}
 */
export default function (code, lang) {
    const normalizedStr = _flow(
        str => str.slice(0, code.length - 1),
        escapeHtml,
    )(code);

    return lang
        ? `<pre data-lang=${lang}><code data-lang=${lang}>${normalizedStr}</code></pre>`
        : `<pre>${normalizedStr}</pre>`;
}
