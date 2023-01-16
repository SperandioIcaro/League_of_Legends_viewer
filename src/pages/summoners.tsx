import axios from "axios";
import { useState } from "react";
import { SummonerInfo } from "../components/SummonerInfo";

export function Summoners(this: any) {
    const [summoner, setSummoner] = useState("");
    const [summonerInfo, setSummonerInfo] = useState({});
    const [maestry, setMaestry] = useState({});
    const API_KEY = "RGAPI-fb09970e-fe65-4d8c-a178-6e06b8be3236"

    function SearchForPlayer(event) {
        var APICallString = "https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summoner.toLowerCase() + "?api_key=" + API_KEY

        axios.get(APICallString)
        .then(function (response) {
            setSummonerInfo(response.data)
        }).catch(function (error) {
            console.log(error);
        });

    }

    function SearchMaestry(event) {
        var APICallString = "https://br1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/" + summonerInfo.id + "?api_key=" + API_KEY

        axios.get(APICallString)
        .then(function (response) {
            setMaestry(response.data.slice(0, 3))

        }).catch(function (error) {
            console.log(error);
        });
    }
    console.log(maestry[0])

    return (
        <div className="flex flex-col items-center justify-center pt-20">
            
            <div>
                <input type="text" onChange={e => setSummoner(e.target.value)} />
                <button onClick={e => SearchForPlayer(e) }>Buscar</button>
            </div>
            
            {JSON.stringify(summonerInfo) != '{}' ?
            <>
            {SearchMaestry(summonerInfo.id)}
            
            <span>invocador localizado</span>
            <SummonerInfo 
                id={""}
                accountId={""}
                puuid={""}
                name={summonerInfo.name}
                profileIconId={summonerInfo.profileIconId}
                revisionDate={0}
                summonerLevel={summonerInfo.summonerLevel} 
                championId={maestry[0].championId} 
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