export function packageExist() {
    // TODO: Check if Package Exists
}

export function listFiles() {
    // TODO: List Files Here & Return
}

export function conformInput(prompt: string, defaultValue: any) {}

export function getDefaults() {
    // TODO: Get Default values
}

export function askString(question: string, defualt?: string): string {
    if (!!defualt) {
        return question + `[${defualt}]`;
    } else {
        return question;
    }
}
