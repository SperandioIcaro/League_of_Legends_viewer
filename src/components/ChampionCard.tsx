import { Link } from "react-router-dom"
import { v4 } from "uuid"

interface Props  {
    id: string,
    name: string,
    title: string,
    image: {
        full: string,
    }
    tags: string,
}

const image = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/"

export function ChampionCard(props: Props) {
   
    return (
        <Link to={`/champInfo/${props.id}`}>
            <div key={props.id} className="flex flex-col">
                <div className="flex flex-col">
                <img className="w-5 h-auto" src={image + props.id + "_0.jpg"}/>
                    <div className="flex">
                        <strong>{props.name}</strong> 
                        <span>{props.title}</span>
                        <span>{props.tags}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}