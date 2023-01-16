import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

interface Data  {
    name: string;
    title: string;
    tags: string;
    blurb: string;
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
        })
        .catch((err) => {
            console.log("deu ruim lek " + err)
        })
    }, [])

    return (
        <div>
            <Link to="/">voltar</Link>
            <div key={post.key} className="flex flex-col">
                <h1>{post.name}</h1>
                <span>{post.title}</span>
            </div>
            <div>
                <img src={image + post.id + "_0.jpg"}/>
            </div>
            <div>
                <span>{post.blurb}</span>
            </div>
        </div>
    )
}