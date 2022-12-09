import {countBy} from "lodash";

export default function solution(input: string) {
    let count = 0;
    const inputArray = input.split('\n')
    inputArray.forEach((line)=>{
        const [frst, second] = line.split(',')
        const [fl, fh] = frst.split('-')
        const [sl, sh] = second.split('-')

        const firstArray = [...Array(Number(fh) - Number(fl) + 1).keys()].map((x) => x + Number(fl))
        const secondArray = [...Array(Number(sh) - Number(sl) + 1).keys()].map((x) => x + Number(sl))


        for(const x of firstArray){
            if(secondArray.includes(x)){
                count++;
                break;
            }
        }
    });

    return count;
}
