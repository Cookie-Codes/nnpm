#!/usr/bin/env node
import { conformInput, getDefaults, listFiles, dirname } from './util';

const defualts = getDefaults();

const storage: any = {};

storage.name = conformInput('name', !defualts.name ? dirname() : defualts.name);

storage.version = conformInput('version', !defualts.version ? '0.0.1' : defualts.version);

storage.desc = conformInput('description', defualts.description);

storage.repository = conformInput('repository', defualts.repository);

storage.keywords = conformInput('keywords', !defualts.keywords ? [] : defualts.keywords);

storage.homepage = conformInput('homepage', !defualts.homepage ? storage.repository : defualts.homepage);

storage.bugs = conformInput('bugs', !defualts.bugs ? storage.repository + '/issues' : defualts.bugs);

storage.license = conformInput('license', !defualts.license ? 'MIT' : defualts.license);

storage.author = conformInput('author', !defualts.author ? storage.repository.split('/')[3] : defualts.author);

storage.files = conformInput('files', !defualts.files ? listFiles() : defualts.files);

storage.build = conformInput('build Directory', 'lib');

storage.main = conformInput('main', defualts.main);

storage.types = conformInput('main', defualts.main);

// TODO: add recursive bin handlers
storage.bin = conformInput('bin', defualts.bin);

storage.config = conformInput('config', defualts.config);

console.log(storage);
