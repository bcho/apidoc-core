var trim     = require('../utils/trim');
var unindent = require('../utils/unindent');

function parse(content) {
    var extra = trim(content);

    if (extra.length === 0)
        return null;

    return unindent(extra);
}

/**
 * Exports
 */
module.exports = {
    parse         : parse,
    path          : 'local.extras',
    method        : 'push',
    markdownFields: [ 'extra' ]
};
