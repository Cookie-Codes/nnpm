import { readFileSync } from 'fs';
import * as readline from 'readline-sync';
import { Terminal } from 'tscolor';

const terminal = new Terminal();
const warning = terminal
    .tag('repeat')
    .bold()
    .withhex('#ff0000');

export function packageExist(): boolean {
    // TODO: Check if Package Exists
    return true;
}

export function listFiles() {
    // TODO: List Files Here & Return
}

export function conformInput(prompt: string): any {
    let answer: string | Array<string> = '';
    let negated = false;
    let once = false;

    while (!answer.length) {
        if (!!negated && !once) {
            prompt = warning.toString() + prompt;
            once = true;
        }
        answer = readline.question(prompt);

        if (!prompt.length && !answer.length) {
            negated = true;
        }
    }
}

export function getDefaults(): any {
    let values: any = {};
    if (packageExist()) {
        values = JSON.parse(readFileSync('package.json', 'utf-8'));
        return values;
    } else {
        return values;
    }
}

export function askString(question: string, defualt?: string): string {
    if (!!defualt) {
        return question + `[${defualt}]`;
    } else {
        return question;
    }
}
