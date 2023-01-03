import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Names } from "../assets/namesChamps";
import { apiCard } from "../api/Api";


interface Champion  {
    data: {
            id : string,
            name: string,
            title: string,
            image: {
                full: string,
                sprite: string,
                group: string,
            },
            tags: string,
            blurb: string,
            key: string,
        }
}

export default function ChampionCard() {
    const [champion, setChampion] = useState<any>([] as Champion[]);

    useEffect(() => {
        apiCard
        .get(Names[0])
        .then((response) => setChampion(response.data))
        .catch((error) => {
            console.log("deu ruim" + error)
        })
    }, [])
    
    // return (
    //     <ul>
    //         <div key={champion.data.key}>
    //             <p> nome: {champion?.data.id}</p>
    //             <p>id: {champion?.data.key}</p>
    //         </div>
    //     </ul>
    // )

    return (
        <div>
            <h1>{champion.name}</h1>
            <h2>{champion.title}</h2>
            <img src={`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/${champion.image.full}`} alt={champion.name} />
            <h3>{champion.tags}</h3>
            <p>{champion.blurb}</p>
            <Link to={`/champion/${champion.key}`}>Ver mais</Link>
        </div>
    )
}