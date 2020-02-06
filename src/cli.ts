/**
 * Main Cli File
 */

import * as readline from 'readline';
import { packageExist, listFiles, conformInput } from './util';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question();
