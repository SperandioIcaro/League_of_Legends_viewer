import { Link, useParams } from "react-router-dom";
import { ChampionInfo } from "../components/ChampionInfo";
import { v4 } from "uuid";
import { useEffect, useState } from "react";
import axios from "axios";

interface Data {
    id : string;
    name: string;
    title: string;
    image: {
        full: string;
        sprite: string;
        group: string;
    }
    tags: string;
    blurb: string;
    key: string;
}

export function ChampInfo() {
    const [post, setPost] = useState<any>({} as Data);
    const params = useParams()

    useEffect(() => {
        axios.get(`http://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion/${params.id}.json`)
        .then(({data}) => {
            setPost(data)
        })
    }, [])

    return (
        <div className="pt-20">
            <div key={v4()}>
                <ChampionInfo
                    key={v4()}
                    name={post.name}
                    title={post.title}
                    image={post.image}
                    blurb={post.blurb} tags={""}                
                />
            </div>
        </div>
    )

    
    
    // return (
    //     <div key={v4()} className="flex flex-col">
    //         <Link to="/">voltar</Link>
    //         <ChampionInfo  id={""} name={""} title={""} image={{
    //             full: "",
    //             sprite: "",
    //             group: ""
    //         }} tags={""} blurb={""} key={""} />
    //     </div>
    // )
}
   
