type StateFn = (lhs: string, rhs: string) => number;

export function calculateSomething(input: string, getState: StateFn) {
    return input
        .split('\n')
        .map(partida => partida.split(' '))
        .reduce((suma, [oponent, reason]) => {
            return suma + getState(oponent, reason);
        }, 0)
}