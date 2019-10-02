#!/usr/bin/env node

/**
 * Good Night
 *
 * Turns off WiFi, Bluetooth and celullar data, and maximally dims the screen.
 */

const fs = require('fs');
const path = require('path');
const { getOutputPath, txtUtils } = require('../utils');
const { buildShortcut } = require('@joshfarrant/shortcuts-js');
const {
	setWiFi,
	setBluetooth,
	setCellularData,
	setBrightness,
} = require('@joshfarrant/shortcuts-js/actions');

const SHORTCUT_NAME = 'Good Night';

const actions = [
	setWiFi({ value: false }),
	setBluetooth({ value: false }),
	setCellularData({ value: false }),
	setBrightness({ brightness: 0 }),
];

const shortcut = buildShortcut(actions);
const filePath = path.resolve(getOutputPath(), `${SHORTCUT_NAME}.shortcut`);
fs.writeFile(filePath, shortcut, err => {
	if (err) {
		console.error(err);
		process.exit(err.code);
	}
	console.info(`${txtUtils('green')}'${SHORTCUT_NAME}' shortcut created.`);
});
