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


function operate(calc: RpnCalculator, f: (a: number, b: number) => number): void {
    if (calc.inputScreen !== "") {
        calc.runCommand(new Enter())
    }
    let a = calc.stack.shift();
    if (a == null) {
        throw new Error('Too few arguments');
    }

    let b = calc.stack.shift();
    if (b == null) {
        throw new Error('Too few arguments');
    }

    let v = f(b, a)
    calc.stack.unshift(v);
}


export class Add implements Command {
    execute(calc: RpnCalculator): void {
        operate(calc, (a, b) => { return a + b })
    }
}


export class Mul implements Command {
    execute(calc: RpnCalculator): void {
        operate(calc, (a, b) => { return a * b })
    }
}


export class Sub implements Command {
    execute(calc: RpnCalculator): void {
        operate(calc, (a, b) => { return a - b })
    }
}


export class Div implements Command {
    execute(calc: RpnCalculator): void {
        operate(calc, (a, b) => { return a / b })
    }
}


export class Sqrt implements Command {
    execute(calc: RpnCalculator): void {
        if (calc.inputScreen !== "") {
            calc.runCommand(new Enter())
        }
        let a = calc.stack.shift();
        if (a == null) {
            throw new Error('Too few arguments');
        }

        calc.stack.unshift(Math.sqrt(a));
    }
}

export class Percent implements Command {
    execute(calc: RpnCalculator): void {
        operate(calc, (a, b) => { return a * (b / 100) })
    }
}


export class Invert implements Command {
    execute(calc: RpnCalculator) {
        if (calc.inputScreen !== "") {
            calc.runCommand(new Enter())
        }
        let x = calc.stack.shift()
        if (x == null) {
            throw new Error("Too few Arguments")
        }
        calc.stack.unshift(1 / x)
    }
}


export class AddToInput implements Command {
    s: string
    constructor(s: string) {
        this.s = s
    }

    execute(calc: RpnCalculator) {
        calc.inputScreen += this.s
    }
}


export class Erase implements Command {
    execute(calc: RpnCalculator) {
        calc.inputScreen = calc.inputScreen.slice(0, -1);
    }
}


export class Enter implements Command {
    execute(calc: RpnCalculator) {
        if (calc.inputScreen === "") {
            calc.runCommand(new Duplicate())
            return
        }
        let v = Number(calc.inputScreen)
        if (isNaN(v)) {
            throw new Error("Invalid Syntax")
        }
        calc.stack.unshift(v)
        calc.inputScreen = ""
    }
}


export class Negate implements Command {
    execute(calc: RpnCalculator) {
        if (calc.inputScreen !== "") {
            if (calc.inputScreen.at(0) !== '-') {
                calc.inputScreen = "-" + calc.inputScreen
            } else if (calc.inputScreen.at(0) === '-') {
                calc.inputScreen = calc.inputScreen.slice(1)
            }
        } else {
            let x = calc.stack.shift()
            if (x == null) {
                throw new Error("Too few Arguments")
            }
            calc.stack.unshift(-x)
        }
    }
}


export class Duplicate implements Command {
    execute(calc: RpnCalculator) {
        if (calc.inputScreen !== "") {
            calc.runCommand(new Enter())
        }
        let first = calc.stack.shift();
        if (first == null) {
            throw new Error("Empty stack")
        }
        calc.stack.unshift(first);
        calc.stack.unshift(first);
    }
}


export class Swap implements Command {
    execute(calc: RpnCalculator) {
        if (calc.inputScreen !== "") {
            calc.runCommand(new Enter())
        }
        let first = calc.stack.shift();
        let second = calc.stack.shift();
        if (first == null || second == null) {
            throw new Error("Too few arguments")
        }
        calc.stack.unshift(first);
        calc.stack.unshift(second);
    }
}


export class Drop implements Command {
    execute(calc: RpnCalculator) {
        if (calc.inputScreen !== "") {
            calc.runCommand(new Enter())
        }
        calc.stack.shift();
    }
}


export class Rcl implements Command {
    execute(calc: RpnCalculator) {
        calc.stack.length = 0
    }
}


export class Roll implements Command {
    execute(calc: RpnCalculator) {
        if (calc.inputScreen !== "") {
            calc.runCommand(new Enter())
        }
        let arg = calc.stack.shift();
        if (arg == null) {
            throw new Error("Too Few arguments")
        }
        if (!Number.isInteger(arg)) {
            throw new Error("Number isn't integer")
        }
        if (calc.stack.length < arg) {
            throw new Error("Too Few arguments")
        }
        if (arg < 0) {
            throw new Error("Invalid argument")
        }
        let x = calc.stack.splice(arg - 1, 1)
        calc.stack.unshift(x[0]);
    }
}


export class Over implements Command {
    execute(calc: RpnCalculator) {
        if (calc.inputScreen !== "") {
            calc.runCommand(new Enter())
        }
        let y = calc.stack.at(1)
        if (y == null) {
            throw new Error("Too few arguments")
        }
        calc.stack.unshift(y)
    }
}


export class Rot implements Command {
    execute(calc: RpnCalculator) {
        if (calc.inputScreen !== "") {
            calc.runCommand(new Enter())
        }
        calc.runCommand(new AddToInput("3"))
        calc.runCommand(new Enter())
        calc.runCommand(new Roll())
    }
}
