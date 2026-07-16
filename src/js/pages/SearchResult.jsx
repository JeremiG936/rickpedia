import React, { useEffect, useState } from "react";
import { fetchCharacterData, getSettledPromises } from "../functions/FetchData";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const SearchResult = () => {
    const {searchTerm} = useParams();
    const [data, setCharacterData] = useState(null);
    const [page, setPage] = useState(1)
    useEffect(() => {
        const loadFunc = async () => {
            const response = await fetchCharacterData(searchTerm, page)
            setCharacterData(response)
        }
        loadFunc();
    }, [searchTerm, page]);

    const PrevBtn = () => {
        if (page < 2) {
            return null
        } 
        else {
            return (
                <button className="btn me-2" style={{color: "black"}} onClick={() => setPage(page - 1)} >Previous</button>
            )
        }
    }

    const NextBtn = () => {
        if (!(data?.info?.pages > 1 && page < data?.info?.pages)) {
            return null
        }
        else {
            return (
                <button className="btn ms-2" style={{color: "black"}} onClick={() => setPage(page + 1)}>Next</button>
            )
        }
    }

    return (
        <div className="mt-3">
            <p className="ps-2" id="result-p">Found results {data?.info?.count}</p>
            <div className="p-4 d-flex flex-wrap justify-content-center">
                {data?.results.map(element => 
                    <Card
                        key={element.id}
                        image={element.image}
                        name={element.name}
                        status={element.status}
                        species={element.species}
                        type={element.type ? element.type : "Unknown"}
                        gender={element.gender}
                        origin={element.origin.name}
                        location={element.location.name}
				    />
                )}
            </div>
            <div className="d-flex justify-content-center">
                <PrevBtn />
                <NextBtn />
            </div>
        </div>
    )
}

export default SearchResult