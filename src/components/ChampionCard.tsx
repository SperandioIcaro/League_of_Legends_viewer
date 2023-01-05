import { v4 } from "uuid"

interface Props  {
    name: string,
    title: string,
    image: {
        full: string,
    }
    tags: string,
    key: string,
}

export default function ChampionCard(props: Props) {
   
    return (
        <div key={v4()}>
            <div 
            className={props.image.full} 
            >
                <div>
                    <strong>{props.name}</strong> 
                    <span>{props.title}</span>
                    <span>{props.tags}</span>
                </div>
            </div>
        </div>
    )
}