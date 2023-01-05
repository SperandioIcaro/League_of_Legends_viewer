import { useEffect, useState } from 'react';
import ChampionCard from './ChampionCard';
import {api} from '../services/Api';
import axios from 'axios';
import { v4 } from 'uuid';

interface Champion  {
    data: {
        id : string;
        name: string;
        title: string;
        image: {
            full: string;
            sprite: string;
            group: string;
        }
        tags: string;
        blurb: string;
        key: string;
    }}

const token = "RGAPI-b1191351-7c6c-42c0-a2b8-18ac24f4102a";

export default function ChampionList() {
    const [champion, setChampion] = useState<any>([] as Champion[]);

    useEffect(() => {
        console.log('passou aqui 1')
        axios.get('http://ddragon.leagueoflegends.com/cdn/12.23.1/data/pt_BR/champion.json')
        .then(response => {
            setChampion({ champions: Object.values(response.data.data)});
        })
        .catch(error => {
            console.log(error)
        })
    }, [])
    console.log(champion.champions)
    
    return (
        <div>
            <h1>Champions</h1>
            <div>
                {champion.champions?.map((champ: Champion) => {
                console.log(champ)
                    return (
                        <ChampionCard 
                            key={v4()}
                            name={champ.name}
                            image={champ.image.full}
                            title={champ.title}
                            tags={champ.tags}
                        />
                    )
                })}
            </div>
        </div>
    )
}

