/**
 * Main Cli File
 */

import { packageExist, listFiles, conformInput, getDefaults, askString } from './util';

const defualts = getDefaults();

const storage: any = {};

conformInput(askString('name', defualts.name));

conformInput(askString('version', defualts.version));

conformInput(askString('description', defualts.description));

conformInput(askString('keywords []', defualts.keywords));

conformInput(askString('homepage', defualts.homepage));

conformInput(askString('bugs', defualts.bugs));

conformInput(askString('license', defualts.license));

conformInput(askString('author', defualts.author));

conformInput(askString('files []', defualts.files));

conformInput(askString('version', defualts.version));

conformInput(askString('main | browser', defualts.main_browser));

conformInput(askString('bin', defualts.bin));

conformInput(askString('repository', defualts.repository));

conformInput(askString('config', defualts.config));
