import { useEffect, useState } from "react";

interface Champion  {
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
    }


export default function ChampionApiService() {
    const [champions, setChampions] = useState<Champion[]>([]);

    useEffect(() => {
        fetch('http://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion.json')
            .then(response => response.json())
            .then(data => setChampions(data));
    }, []);

    //console.log(champions);
    return champions;
    
}