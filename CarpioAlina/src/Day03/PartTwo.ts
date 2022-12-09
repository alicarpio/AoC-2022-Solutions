const prioridades = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
export default function solution(input: string) {
    let groups: string[][] = [];
    let currentGroup: string[] = [];
    let score = 0;
    const result = input.split('\n')
    result.forEach((line, i) => {
        currentGroup.push(line)
        if ((i + 1) % 3 === 0) {
            groups.push(currentGroup)
            currentGroup = []
        }
    })
    let items: string[] = []
    groups.forEach((g) => {
        const [line1, line2, line3] = g
        for (let l of line1) {
            if (line2.includes(l) && line3.includes(l)) {
                items.push(l)
                break;
            }
        }
    })

    console.log(groups.length, items.length)

    items.forEach((item) => {

        score += prioridades.indexOf(item) + 1
    })

    return score;
}
