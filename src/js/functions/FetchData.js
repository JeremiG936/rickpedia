async function fetchCharacterData(searchTerm) {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${searchTerm}`);
        if (!response.ok) {
            throw new Error("Could not fetch data")
        }
        const data = response.json();
        return data
    }
    catch(error) {
        console.log(error)
    }
}

export async function getSettledPromised(arr) {
    const promises = [];
    for (let element of arr) {
        promises.push(fetchCharacterData(element))
    }
    const result = await Promise.allSettled(promises)
    return result
}