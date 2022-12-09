import * as _ from "lodash";


let ids: number[][][] = []
let sections: number[][] = []
export default function solution(input: string) {

    input.split('\n').map(pairs => pairs.split(',')).forEach((p) => {
        sections.push(p[0].split('-').map(Number))
        sections.push(p[1].split('-').map(Number))
        ids.push(sections)
        // console.log(sections)
        sections = []
    })
    console.log(ids.length)
    return inRange(ids);


}

function inRange(pairs: Array<Array<Array<number>>>): number {
    let sum1 = 0;
    let sum2 = 0;
    let sumfinal = 0;
    
    for (let elf of pairs) {
        if (_.inRange(elf[0][0], elf[1][0], elf[1][1] + 1) && _.inRange(elf[0][1], elf[1][0], elf[1][1] + 1)) {

            sum1 += 1;
        }

        if (_.inRange(elf[1][0], elf[0][0], elf[0][1] + 1) && _.inRange(elf[1][1], elf[0][0], elf[0][1] + 1)) {

            sum2 += 1;
        }

        if (_.inRange(elf[1][0], elf[0][0], elf[0][1] + 1) && _.inRange(elf[1][1], elf[0][0], elf[0][1] + 1) && _.inRange(elf[0][0], elf[1][0], elf[1][1] + 1) && _.inRange(elf[0][1], elf[1][0], elf[1][1] + 1)) {
            sum2 = sum2 -1;
        }

    }
    sumfinal = sum1 + sum2
    return sumfinal;
}

