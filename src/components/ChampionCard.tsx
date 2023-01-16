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
            <div  className="flex flex-col items-center justify-center min-w-min cursor-default">
                <div key={post.key} className="flex flex-col m-4 justify-center items-center w-60 h-11/12 p-0 cursor-pointer rounded-lg">
                <img className="w-full z-0 h-auto rounded-lg" src={image + post.id + "_0.jpg"} />
                    <div className="flex flex-col text-center z-10 bg-slate-100/50 -mt-14 w-full">
                        <strong className="font-name -mb-1 text-gray-900 text-2xl">
                            {post.name}
                        </strong> 
                        <span className="font-title text-2xl -mt-2">
                            {post.title}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}