import { useEffect, useState } from 'react';
import ChampionCard from './ChampionCard';
import {apiList} from '../api/Api';
import { Names } from '../assets/namesChamps';

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
        tags: string[];
        blurb: string;
        key: number;
    }}

const token = "RGAPI-b1191351-7c6c-42c0-a2b8-18ac24f4102a";

export default function ChampionList() {
    const [champion, setChampion] = useState<any>([] as Champion[]);
    console.log('passou aqui')
    console.log(champion)

    useEffect(() => {
        apiList
        .get(Names[0])
        .then((response) => setChampion(response.data))
        .catch((error) => {
            console.log(champion)
            console.log("deu ruim " + error)
        })
    }, [])

        if (token !== undefined) {
            console.log('passou aqui 2')
            apiList.defaults.headers.authorization = `Bearer ${token}`;
          
            return (
                <ul>
                    <div>
                        {Object.keys(champion).map((id) => {
            console.log('passou aqui 3')
                            return <ChampionCard key={id}/>
                        })}
                    </div>
                </ul>
            )
        }else {
            console.log('passou um erro aqui')
        }
}

