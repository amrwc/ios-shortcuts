#!/usr/bin/env node

/**
 * Good Night
 *
 * Turns off WiFi, Bluetooth and celullar data, and maximally dims the screen.
 */

const { writeShortcutToFile } = require('../utils');
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
writeShortcutToFile(shortcut, SHORTCUT_NAME);
