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

rl.question(askString('version', defualts.version), answer => {
    storage.version = answer;
});

rl.question(askString('description', defualts.description), answer => {
    storage.version = answer;
});

rl.question(askString('keywords []', defualts.keywords), answer => {
    storage.version = answer;
});

rl.question(askString('homepage', defualts.homepage), answer => {
    storage.version = answer;
});

rl.question(askString('bugs', defualts.bugs), answer => {
    storage.version = answer;
});

rl.question(askString('license', defualts.license), answer => {
    storage.version = answer;
});

rl.question(askString('author', defualts.author), answer => {
    storage.version = answer;
});

rl.question(askString('files []', defualts.files), answer => {
    storage.version = answer;
});

rl.question(askString('version', defualts.version), answer => {
    storage.version = answer;
});

rl.question(askString('main | browser', defualts.main_browser), answer => {
    storage.version = answer;
});

rl.question(askString('bin', defualts.bin), answer => {
    storage.version = answer;
});

rl.question(askString('repository', defualts.repository), answer => {
    storage.version = answer;
});

rl.question(askString('config', defualts.config), answer => {
    storage.version = answer;
});
