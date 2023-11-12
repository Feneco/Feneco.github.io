export interface Command {
    execute: (calc: RpnCalculator) => void;
}


function arraysEqual(a: any[], b: any[]) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}


export class RpnCalculator {
    memory: number[][];
    stack: number[];
    inputScreen: string;

    constructor() {
        this.stack = [];
        this.memory = [[]]
        this.inputScreen = '';
    }

    runCommand(command: Command) {
        let stackBackup = this.stack.slice()
        try {
            command.execute(this);
            // Add to memory only if it changes the stack
            if (!arraysEqual(stackBackup, this.stack)) {
                console.log("memorized")
                this.memory.push(stackBackup)
            }
        } catch (e) {
            this.stack = stackBackup
            throw (e)
        }
    }

    undo() {
        let x = this.memory.pop()
        if (x == null) {
            throw new Error("Cant undo more")
        }
        this.stack = x;
    }
}
