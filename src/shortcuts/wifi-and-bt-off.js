#!/usr/bin/env node

/**
 * WiFi and BT off
 *
 * Turns off WiFi and Bluetooth.
 */

const { writeShortcutToFile } = require('../utils');
const { buildShortcut } = require('@joshfarrant/shortcuts-js');
const { setWiFi, setBluetooth } = require('@joshfarrant/shortcuts-js/actions');

const SHORTCUT_NAME = 'WiFi and BT off';

const actions = [setWiFi({ value: false }), setBluetooth({ value: false })];

const shortcut = buildShortcut(actions);
writeShortcutToFile(shortcut, SHORTCUT_NAME);
