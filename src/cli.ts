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

rl.question(askString('bugs', defualts.keywords), answer => {
    storage.version = answer;
});

rl.question(askString('bugs', defualts.keywords)'author', answer => {
    storage.version = answer;
});

rl.question(askString('bugs', defualts.keywords)'files: []', answer => {
    storage.version = answer;
});

rl.question(askString('bugs', defualts.keywords)'version', answer => {
    storage.version = answer;
});

rl.question(askString('bugs', defualts.keywords)'main: | browser', answer => {
    storage.version = answer;
});

rl.question(askString('bugs', defualts.keywords)'bin', answer => {
    storage.version = answer;
});

rl.question(askString('repository', defualts.keywords), answer => {
    storage.version = answer;
});

rl.question(askString('config', defualts.keywords), answer => {
    storage.version = answer;
});
