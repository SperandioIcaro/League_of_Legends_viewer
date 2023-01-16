import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

interface Data  {
    id: string,
    name: string,
    title: string,
    tags: string,
    key: number,
}
interface IProps {
    id: string
}

const image = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/"

export function ChampionCard({id}:IProps) {
    const [post, setPost] = useState<any>({} as Data);
  
    useEffect(() =>{
        axios.get(`https://ddragon.leagueoflegends.com/cdn/12.23.1/data/pt_BR/champion/${id}.json`)
          .then(({data}) => {
             setPost(data.data[id]);
          })
      }, [])

   
    return (
        <Link to={`/champInfo/${id}`}>
            <div key={post.key} className="flex flex-col">
                <div className="flex flex-col">
                <img className="w-5 h-auto" src={image + post.id + "_0.jpg"} />
                    <div className="flex">
                        <strong>{post.name}</strong> 
                        <span>{post.title}</span>
                        <span>{post.tags}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}