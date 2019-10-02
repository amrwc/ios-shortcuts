#!/usr/bin/env node

/**
 * Returns an absolute path to the output directory.
 */
exports.getOutputPath = function() {
	return require('path').resolve(`${__dirname}/../data`);
};

/**
 * Returns an escape sequence that can be used to format console outputs.
 *
 * @source https://stackoverflow.com/a/41407246/10620237
 * @param {string} util
 */
exports.txtUtils = function(util) {
	const utils = {
		green: '\x1b[32m',
		red: '\x1b[31m',
		yellow: '\x1b[33m',
		reset: '\x1b[0m',
	};
	return utils[util];
};
