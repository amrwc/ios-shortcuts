#!/usr/bin/env node

const OUTPUT_PATH = require('path').resolve(`${__dirname}/../data`);

/**
 * Generates a `.shortcut` file.
 *
 * @param {string} data
 * @param {string} shortcutName
 */
exports.writeShortcutToFile = function(data, shortcutName) {
	const filePath = require('path').resolve(OUTPUT_PATH, `${shortcutName}.shortcut`);
	require('fs').writeFile(filePath, data, err => {
		if (err) {
			console.error(err);
			process.exit(err.code);
		}
		console.info(`${txtUtils('green')}'${shortcutName}' shortcut successfully created.`);
	});
};

/**
 * Returns an escape sequence that can be used to format console outputs.
 *
 * @source https://stackoverflow.com/a/41407246/10620237
 * @param {string} util
 * @returns {string} escape sequence
 */
function txtUtils(util) {
	const utils = {
		green: '\x1b[32m',
		red: '\x1b[31m',
		yellow: '\x1b[33m',
		reset: '\x1b[0m',
	};
	return utils[util];
}
