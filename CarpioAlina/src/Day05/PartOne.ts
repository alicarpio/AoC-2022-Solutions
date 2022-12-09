import {Stack} from "js-sdsl";
import {getInput} from "../input";
import * as _ from 'lodash';
import {type} from "os";

export default function solution(input: string) {


    const {Stack} = require('js-sdsl');
    const stack1 = new Stack();

    const inputArr = input.split('\n')

    parseStacks()


    return '';
}

function parseStacks(){
    const inputStacks = getInput('055');
    const stackArr = inputStacks.split('\n');
    let arr = [];
    stackArr.forEach((line) =>{
        // arr = _.chunk(,9)
        console.log(line)

        console.log(line.split(' '))
    })

}

