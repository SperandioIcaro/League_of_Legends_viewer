import * as names from '../assets/namesChamps';

export function ChampionService() {
    return {
        getChampions: async function () {
            const response = await fetch('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json');
            const data = await response.json();
            return data.data;
        },
        getChampion: async function ( names: string ) {
            const response = await fetch('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion/' + names + '.json');
            const data = await response.json();
            return data.data[names];
        }
    }

    
}