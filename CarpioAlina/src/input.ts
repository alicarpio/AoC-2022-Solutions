import * as fs from 'fs'

export type Day = '01' | '02' | '03' | '04' | '05' | '055' | '06' | '07' | '08';

export function getInput(inputName: Day): string {
    return fs.readFileSync(`puzzle_inputs/${inputName}.txt`, {
        encoding: 'utf-8',
    })
}
