#!/usr/bin/env node
import { conformInput, getDefaults, listFiles, dirname, writepackage, yesNo } from './util';
const defualts = getDefaults();
const storage: any = {};

storage.name = conformInput('name', !defualts.name ? dirname() : defualts.name);
storage.version = conformInput('version', !defualts.version ? '0.0.1' : defualts.version);
storage.desc = conformInput('description', defualts.description);
storage.repository = conformInput('repository', defualts.repository);
storage.keywords = conformInput('keywords (space seperated)', !defualts.keywords ? [] : defualts.keywords);
storage.homepage = conformInput('homepage', !defualts.homepage ? storage.repository : defualts.homepage);
storage.bugs = conformInput('bugs', !defualts.bugs ? storage.repository + '/issues' : defualts.bugs);
storage.license = conformInput('license', !defualts.license ? 'MIT' : defualts.license);
storage.author = conformInput('author', !defualts.author ? storage.repository.split('/')[3] : defualts.author);
storage.files = conformInput('files', !defualts.files ? listFiles() : defualts.files);
storage.build = conformInput('build Directory', 'lib');
storage.main = conformInput('main', !defualts.main ? storage.build + '/index.js' : defualts.main);

const yesn = !!defualts.bin ? false : yesNo('is This Cli Application :');

if (yesn) {
    const storage: any = {};
    const name = conformInput('bin executable name');
    const file = conformInput('bin', defualts.bin);
    storage[name + ''] = file;
    storage.bin = storage;
    defualts.bin;
}

const yes_n_type = yesNo('Do you use TypeScript');

if (yes_n_type) {
    storage.types = conformInput('main', !defualts.main ? storage.build + '/index.d.ts' : defualts.main);
}

defualts.name = storage.name;
defualts.version = storage.version;
defualts.description = storage.desc;
defualts.repository = storage.repository;
defualts.keywords = storage.keywords.split(' ');
defualts.homepage = storage.homepage;
defualts.bugs = storage.bugs;
defualts.license = storage.license;
defualts.author = storage.author;
defualts.files = storage.files;
defualts.main = storage.main;
defualts.bin = storage.bin;

writepackage(defualts);
