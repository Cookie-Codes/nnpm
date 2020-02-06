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

rl.question(askString('name', defualts.name), answer => {
    storage.name = answer;
});

rl.question(askString('version', defualts.), answer => {
    storage.version = answer;
});

rl.question(askString('description', defualts.version), answer => {
    storage.version = answer;
});

rl.question(askString('', defualts.version),, answer => {
    storage.version = answer;
});

rl.question(askString('homepage', defualts.keywords), answer => {
    storage.version = answer;
});

rl.question(askString('bugs', defualts.keywords), answer => {
    storage.version = answer;
});

rl.question('license', answer => {
    storage.version = answer;
});

rl.question('author', answer => {
    storage.version = answer;
});

rl.question('files: []', answer => {
    storage.version = answer;
});

rl.question('version', answer => {
    storage.version = answer;
});

rl.question('main: | browser', answer => {
    storage.version = answer;
});

rl.question('bin', answer => {
    storage.version = answer;
});

rl.question('repository', answer => {
    storage.version = answer;
});

rl.question('config', answer => {
    storage.version = answer;
});
