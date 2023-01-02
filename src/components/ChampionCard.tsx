import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface KeyCard {
        id: string;
}

interface Champion  {
    data:{
        [0]:{
        id : string;
        name: string;
        title: string;
        image: {
            full: string;
            sprite: string;
            group: string;
        }
        tags: string[];
        blurb: string;
        key: number;
    }}}


export default function ChampionCard({id}:KeyCard) {
    const [champion, setChampion] = useState({} as Champion);

    useEffect(() => {
        axios.get(`https://ddragon.leagueoflegends.com/cdn/12.23.1/data/pt_BR/champion/${id}.json`)
        .then(({data}) => {
        setChampion(data)
    })
}, [])

const ChampArr = Object.assign({}, champion);

return (
    console.log(ChampArr.data),

    //<Link to={`/Champion/${champion.data.[0].id}`}>
        <div key={id}>
            <h1>{ChampArr.data.[0].id}</h1>
            <span>{ChampArr.data.[0].title}</span>
            {/* <img src={`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/${ChampArr.data.[0].image.full}`} alt={ChampArr.data.[0].name} /> */}
            <span>{ChampArr.data.[0].tags}</span>
            <span>{ChampArr.data.[0].blurb}</span>
        </div>
    //</Link>
)

}