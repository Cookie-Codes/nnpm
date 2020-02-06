/**
 * Main Cli File
 */

import { conformInput, getDefaults } from './util';

const defualts = getDefaults();

const storage: any = {};

storage.name = conformInput('name', defualts.name);

storage.version = conformInput('version', defualts.version);

storage.desc = conformInput('description', defualts.description);

storage.repository = conformInput('repository', defualts.repository);

storage.keywords = conformInput('keywords', !defualts.keywords ? [] : defualts.keywords);

storage.homepage = conformInput('homepage', !defualts.homepage ? storage.repository : defualts.homepage);

storage.bugs = conformInput('bugs', defualts.bugs);

storage.license = conformInput('license', defualts.license);

storage.author = conformInput('author', defualts.author);

storage.files = conformInput('files []', defualts.files);

storage.main = conformInput('main', defualts.main_browser);

storage.bin = conformInput('bin', defualts.bin);

storage.config = conformInput('config', defualts.config);

console.log(storage);
