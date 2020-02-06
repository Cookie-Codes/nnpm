import { readFileSync, existsSync, readdirSync, writeFileSync } from 'fs';
import * as readline from 'readline-sync';
import { execSync } from 'child_process';
import { Terminal } from 'tscolor';

const terminal = new Terminal();
const warning = terminal
    .tag('repeat')
    .bold()
    .withhex('#ff0000');

export function packageExist(): boolean {
    return existsSync('package.json');
}

export function listFiles() {
    return readdirSync('.');
}

export function conformInput(prompt: string, defaults?: any): any {
    let answer: string | Array<string> = '';
    let negated = false;
    let once = false;
    prompt = askString(prompt, defaults);
    prompt = prompt + ' : ';

    while (!answer.length) {
        if (!!negated && !once) {
            prompt = warning.toString() + prompt + '\x1b[0m';
            once = true;
        }
        answer = readline.question(prompt);
        console.log(answer);

        if (!answer.length && !!defaults) {
            return defaults;
        }
        if (!defaults && !answer.length) {
            negated = true;
        }
    }

    return answer;
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

export function dirname() {
    const dirs = process.cwd().split('/');
    return dirs[dirs.length - 1];
}

export function writepackage(pack: any) {
    writeFileSync('package.json', JSON.stringify(pack), 'utf-8');
    execSync('npm install  --package-lock');
}
