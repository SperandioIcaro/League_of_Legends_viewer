import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

interface Data  {
    name: string;
    title: string;
    tags: string;
    blurb: string;
    key: string;
    id: string;
}

const image = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/'

export function ChampionInfo() {
    const [post, setPost] = useState<any>({} as Data);
    const params = useParams() 

    useEffect(() => {
        axios.get(`http://ddragon.leagueoflegends.com/cdn/12.23.1/data/pt_BR/champion/${params.id}.json`)
        .then(({data}) => {
            console.log('passou aqui')
            setPost(data)
            console.log(data.data)
        })
        .catch((err) => {
            console.log("deu ruim lek" + err)
        })
    }, [])
    console.log(post)
    console.log(image + post.id + "_0.jpg")

    return (
        <div>
            <Link to="/">voltar</Link>
            <div key={post.data.id} className="flex flex-col">
                <h1>{post.data.name}</h1>
                <span>{post.data.title}</span>
            </div>
            <div>
                <img src={image + post.data.id + "_0.jpg"}/>
            </div>
            <div>
                <span>{post.data.blurb}</span>
            </div>
        </div>
    )
}