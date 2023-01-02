import { useEffect, useState } from 'react';
import ChampionCard from './ChampionCard';

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


export function ChampionList() {
    const [champion, setChampion] = useState<Champion[]>([] as Champion[]);

    useEffect(() => {
        fetch('https://ddragon.leagueoflegends.com/cdn/12.23.1/data/pt_BR/champion.json')
            .then(response => response.json())
            .then(({data}) => {
                setChampion(data)
            })
            //console.log(typeof(champion));
    }, []);

    const ChampArr = Object.assign({}, champion);
    //console.log(ChampArr);

    return (
        <ul>
            <div>
                {Object.keys(ChampArr).map((id) => {
                    return <ChampionCard id={id} />
                })}
            </div>
        </ul>
    )

    // return (
    //     <ul>
    //         <div>
    //             {Object.keys(ChampArr).map((id) => {
    //                 return <ChampionCard id={id} />
    //             })}
    //         </div>
    //     </ul>
    // )
}

