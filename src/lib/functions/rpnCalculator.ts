export interface Command {
    execute: (calc: RpnCalculator) => void;
}


// TODO: Add undo, history, or other things
export class RpnCalculator {
    stack: number[];
    inputScreen: string;

    constructor() {
        this.stack = [];
        this.inputScreen = '';
    }

    runCommand(command: Command) {
        let stackBackup = this.stack.slice()
        try {
            command.execute(this);
        } catch (e) {
            this.stack = stackBackup
            throw (e)
        }
    }
}
