import { readFileSync } from 'fs';
import * as readline from 'readline';
export function packageExist(): boolean {
    // TODO: Check if Package Exists
}

export function listFiles() {
    // TODO: List Files Here & Return
}

export function conformInput(handler: readline.Interface, prompt: string, defaultValue: any) {}

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
