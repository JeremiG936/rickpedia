export async function fetchCharacterData(searchTerm, page = 1) {
    try {
        if (!searchTerm) {
             const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
            if (!response.ok) {
                throw new Error("Could not fetch data")
            }
            const data = response.json();
            return data
        }
        else if (typeof searchTerm === "number") {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${searchTerm}`);
            if (!response.ok) {
                throw new Error("Could not fetch data")
            }
            const data = response.json();
            return data
        }
        else if (typeof searchTerm === "string") {
            const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${searchTerm}&page=${page}`);
            if (!response.ok) {
                throw new Error("Could not fetch data")
            }
            const data = response.json();
            return data
        }    
    }
    catch(error) {
        console.log(error)
    }
}

export async function getSettledPromises(arr) {
    const promises = [];
    for (let element of arr) {
        promises.push(fetchCharacterData(element))
    }
    const result = await Promise.allSettled(promises)
    return result
}
