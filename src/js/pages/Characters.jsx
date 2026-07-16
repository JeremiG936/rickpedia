import React, { useEffect, useState } from "react";
import { fetchCharacterData } from "../functions/FetchData";
import Card from "../components/Card";

const Characters = () => {
    const [page, setPage] = useState(1)
    const [data, setData] = useState(null)
    useEffect(() => {
        const load = async () => {
            const response = await fetchCharacterData(false, page)
            setData(response)
        }
        load();
    }, [page])

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
        <div className="mt-2">
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

export default Characters;