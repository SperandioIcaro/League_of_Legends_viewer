import axios from "axios";
import { useState } from "react";
import { SummonerInfo } from "../components/SummonerInfo";
import  { NumbToName } from "../assets/namesChamps";

export function Summoners(this: any) {
    
    const [summoner, setSummoner] = useState("");
    const [summonerInfo, setSummonerInfo] = useState({});
    const [maestry, setMaestry] = useState({});  

    function SearchForPlayer() { 
        const APICallSummoner = "https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summoner + `?api_key=RGAPI-8b615cf2-8675-4948-85be-09ee85dfef2d`
        const APICallMaestry = "https://br1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/" + summonerInfo.id + `?api_key=RGAPI-8b615cf2-8675-4948-85be-09ee85dfef2d`

        axios.get(APICallSummoner)
        .then(function (response) {
            setSummonerInfo(response.data)
        }).catch(function (error) {
            console.log(error);
        });
        
        axios.get(APICallMaestry)
        .then(function (response) {
            setMaestry(response.data.slice(0, 3))
        }).catch(function (error) {
            console.log(error);
        });

    }

    return (
        <div className="flex flex-col items-center justify-center pt-20">
            
            <div>
                <input type="text" onChange={e => setSummoner(e.target.value)} />
                <button onClick={e => SearchForPlayer(e) }>Buscar</button>
            </div>
            
            {JSON.stringify(summonerInfo) != '{}' ?
            <>
            
            <span>invocador localizado</span>
            <SummonerInfo 
                name={summonerInfo.name}
                profileIconId={summonerInfo.profileIconId}
                summonerLevel={summonerInfo.summonerLevel} 
                championId={NumbToName(maestry[0].championId)} 
                championLevel={maestry[0].championLevel} 
                championPoints={maestry[0].championPoints}            
            />
            
            </>
            :
            <>
            <span>invocador não localizado</span>
            </>
            }

            {/* <div key={v4()}>
                <SummonerInfo 
                id={""} 
                accountId={""} 
                puuid={""} 
                name={summonerInfo.name} 
                profileIconId={summonerInfo.profileIconId} 
                revisionDate={0} 
                summonerLevel={summonerInfo.summonerLevel}                
            />
            </div> */}
        </div>
    )

    


}