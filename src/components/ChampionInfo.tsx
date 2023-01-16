import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

interface Data  {
    name: string;
    title: string;
    tags: string;
    lore: string;
    key: number;
    id: string;
}

const image = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/'

export function ChampionInfo() {
    const [post, setPost] = useState<any>({} as Data);
    const params = useParams() 

    useEffect(() => {
        axios.get(`http://ddragon.leagueoflegends.com/cdn/12.23.1/data/pt_BR/champion/${params.id}.json`)
        .then(({data}) => {
            setPost(data.data[params.id])
            console.log(data.data[params.id])
        })
        .catch((err) => {
            console.log("deu ruim lek " + err)
        })
    }, [])

    return (
        <div className="flex flex-col items-center">
            <img className=" -mt-10 fixed blur-xl -z-10 w-full bg-cover bg-no-repeat" src={image + post.id + "_0.jpg"} />
            <div className="flex flex-col bg-slate-300/10 w-11/12 rounded-2xl">
                <div key={post.key} className="flex flex-col items-center justify-center">
                    <h1 className="font-name text-3xl">
                        {post.name}
                    </h1>
                    <span className="font-title text-lg ml-40 -mt-4">
                        {post.title}
                    </span>
                </div>
                <div className="flex items-center justify-center">
                    <img className="rounded-md border-separate" src={image + post.id + "_0.jpg"}/>
                </div>
                <div className="flex flex-col my-4 self-center w-10/12">
                    <span className="font-text text-lg bg-white/10 rounded-xl m-1">
                        {post.lore}
                    </span>
                </div>
            </div>
        </div>
    )
}