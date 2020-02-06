/**
 * Main Cli File
 */

import * as readline from 'readline';
import { packageExist, listFiles, conformInput, getDefaults, askString } from './util';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const defualts = getDefaults();

const storage: any = {};

conformInput(rl, askString('name', defualts.name));

conformInput(rl, askString('version', defualts.version));

conformInput(rl, askString('description', defualts.description));

conformInput(rl, askString('keywords []', defualts.keywords));

conformInput(rl, askString('homepage', defualts.homepage));

conformInput(rl, askString('bugs', defualts.bugs));

conformInput(rl, askString('license', defualts.license));

conformInput(rl, askString('author', defualts.author));

conformInput(rl, askString('files []', defualts.files));

conformInput(rl, askString('version', defualts.version));

conformInput(rl, askString('main | browser', defualts.main_browser));

conformInput(rl, askString('bin', defualts.bin));

conformInput(rl, askString('repository', defualts.repository));

conformInput(rl, askString('config', defualts.config));
