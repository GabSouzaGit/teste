import Post from "./Post";
import useSWR from "swr";

type Posts = {
    id : number,
    username : string,
    title : string,
    post : string
}[];

export default async () => {
    const fetcher = (url : string) => { fetch(url).then(res => res.json()) }
    
    const { data } : any | undefined = useSWR('/api/posts/api_teste', fetcher,
    { revalidateOnFocus: true, revalidateOnReconnect: true });
    
    return(
        <div>
            {
                data.map((post : any) => (
                    <Post username={post.username} title={post.title} post={post.post} index={post.id}/>
                ))
            }
        </div>
    )
}