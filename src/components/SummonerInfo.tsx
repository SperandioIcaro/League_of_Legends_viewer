import axios from "axios";
import { useState } from "react";

interface Summoner {
    id: string;
    accountId: string;
    puuid: string;
    name: string;
    profileIconId: number;
    revisionDate: number;
    summonerLevel: number;
    championId: number;
    championLevel: number;
    championPoints: number;
}
interface IProps {
    id: string
}

export function SummonerInfo(props: Summoner) {
    const [championId, setChampionId] = useState({} as IProps);

    // function getChampionById(event) {
    //     axios.get(`http://ddragon.leagueoflegends.com/cdn/13.1.1/data/pt_BR/champion.json`)
    //         .then(function (response) {
    //             console.log(response.data.data);
    //             //setChampionId(response.data.data[props.championId]);
    //         }).catch(function (error) {
    //             console.log(error);
    //         });
    // }

    return (
        <div className="flex flex-row justify-between bg-gray-500 rounded-md  w-96 h-auto p-4 ">
            <div className="flex flex-col left-0">
                <img 
                    src={`https://ddragon.leagueoflegends.com/cdn/12.23.1/img/profileicon/${props.profileIconId}.png`}
                    alt="ProfileIcon" className="w-20 h-20 rounded-full" 
                 />
                <strong className="">{props.name}</strong>
                <strong className="">Nivel {props.summonerLevel}</strong>
            </div>
            <div className="flex flex-col right-0">
                <span>Maior maestria</span>
                {/* <img 
                    src={`http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${championId.id}.png`} 
                    alt="ChampionIcon" className="w-20 h-20 rounded-full" 
                /> */}
                <span>{props.championId}</span>
                <strong className="">Nivel {props.championLevel}</strong>
                <strong className="">Pontos {props.championPoints}</strong>
            </div>
        </div>
    )
}