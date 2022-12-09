const prioridades = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
export default function solution(input: string) {
    const result = input.split('\n')
    let fstCompartment;
    let scdCompartment;
    let score = 0;
    const compartiments: String[][] = [];
    result.forEach((mochila) => {
        fstCompartment = mochila.substring(0, (mochila.length / 2));
        scdCompartment = mochila.substring(mochila.length / 2,)
        compartiments.push([fstCompartment, scdCompartment])
    })
    compartiments.forEach((comp) => {
        let item = [...new Set(comp[0].split('').filter(comp1 => comp[1].includes(comp1)))]
        score += prioridades.indexOf(item[0]) + 1
    })

    return score;
}


