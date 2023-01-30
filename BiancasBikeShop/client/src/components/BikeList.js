import { useState, useEffect } from "react"
import BikeCard from "./BikeCard"
import { getBikes } from "../bikeManager"

export default function BikeList({setDetailsBikeId}) {
    const [bikes, setBikes] = useState([])

    const getAllBikes = () => {
        getBikes().then(bikeData => setBikes(bikeData));
    }

    useEffect(() => {
        getAllBikes()
    }, [])

    return (
        <>
            <h2>Bikes</h2>
            <div>{bikes.map((bike) => (
                <BikeCard bike={bike} key={bike.id} setDetailsBikeId={setDetailsBikeId} />
                ))}
            </div>
        </>
    )
}