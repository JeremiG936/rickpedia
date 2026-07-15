export function getRandomIds() {
    const result = [];
    for (let i = 0; i < 10; i++) {
        result.push(Math.floor(Math.random() * 826) + 1)
    }
    return result
}