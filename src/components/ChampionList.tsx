import { useEffect, useState } from 'react';
import {ChampionCard} from './ChampionCard';
import {api} from '../services/Api';
import axios from 'axios';
import { v4 } from 'uuid';
import { Link } from 'react-router-dom';

interface Champion  {
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
    }

export function ChampionList() {
    const [data, setChampion] = useState<Champion[]>([] as Champion[]);

    useEffect(() => {
        console.log('passou aqui 1')
        axios.get('http://ddragon.leagueoflegends.com/cdn/12.23.1/data/pt_BR/champion.json')
        .then(({data}) => {
            setChampion(Object.values(data.data));
        })
        .catch(error => {
            console.log(error)
        })
    }, [])
    
    return (
        <div>
            <h1>Champions</h1>
            <ul className='grid grid-flow-col gap-6 grid-rows-4'>
                {data.map(card => 
                    <li key={card.id}>
                        <div>
                            <ChampionCard 
                                id={card.id} 
                                name={card.name} 
                                title={card.title} 
                                image={card.id}
                                tags={card.tags} 
                            />
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}

