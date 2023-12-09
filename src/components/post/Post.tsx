import Title from "../Title"

interface PostProps {
    username : string,
    title : string,
    post : string,
    index : number
}

export default ({ username, title, post, index } : PostProps) => {
    return (
        <div className="p-4 my-8 border border-slate-300 rounded-lg" key={index}>
            <div className="flex justify-between items-center text-sm">
                <div>
                 Postado por: { username }
                </div>
                <div>
                    dd/mm/yyyy
                </div>
            </div>
            <div className="flex flex-col items-start mt-8 mb-4">
                <Title size="medium"> { title } </Title>
                <div>
                    { post }
                </div>
            </div>
        </div>
    )
}