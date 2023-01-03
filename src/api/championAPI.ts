import axios from "axios";
import { useEffect, useState } from "react";
import { Names } from "../assets/namesChamps";

type Champion = {
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


export function useApi<T = undefined>() {
    const [listChamps, setlistChamps]  = useState<T | Champion>()
    const [isRunning, setIsRunning] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() =>  {
        axios.get('')
        .then(response => {
            setlistChamps(response.data.data)
        })
        .catch(err => {
            setError(err)
        })
        .finally(() =>  {
            setIsRunning(false)
        })
    }, [])

    return {  listChamps, isRunning, error }
}

export function GetName() {
    console.log('passou aqui')
    const [name, setName] = useState<any>({} as Champion)

    useEffect(() => {
        axios.get('baseURL')
        .then(response => {
            setName(response.data.data)
        })
    }, [])

    let i = 0
    let Nomes = []

    
        if(name[i] ==! null) {
            Nomes.push(name[i])
            i++
        } else {
            return (
                Nomes.length
            )
        }
        console.log('nomes: ' + Nomes.length)
    
}


//     baseURL: http://ddragon.leagueoflegends.com/cdn/12.23.1/data/pt_BR/champion.json