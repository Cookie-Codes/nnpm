/**
 * Main Cli File
 */

import { listFiles, conformInput, getDefaults } from './util';

const defualts = getDefaults();

const storage: any = {};

conformInput('name', defualts.name);

conformInput('version', defualts.version);

conformInput('description', defualts.description);

conformInput('keywords []', defualts.keywords);

conformInput('homepage', defualts.homepage);

conformInput('bugs', defualts.bugs);

conformInput('license', defualts.license);

conformInput('author', defualts.author);

conformInput('files []', defualts.files);

conformInput('version', defualts.version);

conformInput('main | browser', defualts.main_browser);

conformInput('bin', defualts.bin);

conformInput('repository', defualts.repository);

conformInput('config', defualts.config);
