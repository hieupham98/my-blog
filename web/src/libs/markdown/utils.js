export function alterToken(rule, alter, md) {
    const renderer = md.renderer.rules[rule]
        || ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options));

    md.renderer.rules[rule] = (tokens, idx, options, env, self) => {
        const token = tokens[idx];
        const alteredToken = alter(token);
        tokens[idx] = alteredToken;

        return renderer(tokens, idx, options, env, self);
    };

    return md;
}

/**
 * https://github.com/lodash/lodash/blob/master/escape.js
 */
const htmlEscapes = {
    '&': '&amp',
    '<': '&lt',
    '>': '&gt',
    '"': '&quot',
    '\'': '&#39',
};

/** Used to match HTML entities and HTML characters. */
const reUnescapedHtml = /[&<>"']/g;
const reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

export function escape(string) {
    return (string && reHasUnescapedHtml.test(string))
        ? string.replace(reUnescapedHtml, chr => htmlEscapes[chr])
        : string;
}
