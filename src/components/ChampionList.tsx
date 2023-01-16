import { useEffect, useState } from 'react';
import {ChampionCard} from './ChampionCard';
import axios from 'axios';

interface Data   {
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
    interface IProps {
        id: string
    }

export function ChampionList() {
     const [data, setData] = useState<Data[]>([] as Data[]);
    
    useEffect(() =>{
        axios.get<Data[]>('http://ddragon.leagueoflegends.com/cdn/12.23.1/data/pt_BR/champion.json')
          .then(({ data }) => {
            setData(Object.values(data.data))
          })
      }, [])
    
    return (
        <div>
            <h1>Champions</h1>
            <ul className='grid grid-flow-col gap-6 grid-rows-4'>
                {data.map((card) => 
                    <li key={card.key.toString()}>
                        <div>
                            <ChampionCard id={card.id} />
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}

