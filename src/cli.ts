/**
 * Main Cli File
 */

import * as readline from 'readline';
import { packageExist, listFiles, conformInput, getDefaults } from './util';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const defualts = getDefaults();

const storage: any = {};

rl.question(`name [${defualts.name}]`, answer => {
    storage.name = answer;
});

rl.question('version', answer=>{
  storage.version = answer;
});

:
description:
keywords: []
homepage:
bugs:
license:
author:
files: []
main: | browser
bin:
repository:
config:
