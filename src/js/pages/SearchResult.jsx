import React, { useEffect, useState } from "react";
import { fetchCharacterData, getSettledPromises } from "../functions/FetchData";
import { useParams } from "react-router-dom";

const SearchResult = () => {
    const {searchTerm} = useParams();
    const [data, setCharacterData] = useState(null)
    useEffect(() => {
        const loadFunc = async () => {
            const response = await fetchCharacterData(searchTerm)
            setCharacterData(response)
        }
        loadFunc();
    }, [searchTerm])

    return (
        <div>
            <p>Found results</p>
            <div className="p-4 d-flex flex-wrap justify-content-center">
                hello 
            </div>
        </div>
    )
}

export default SearchResult