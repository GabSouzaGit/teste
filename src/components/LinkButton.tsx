'use client'
import { useRouter } from "next/navigation"

interface LinkButtonProps {
    route : string,
    children : React.ReactNode
}

export default ({ route, children } : LinkButtonProps) => {
    const router = useRouter();
    return (
        <button 
            onClick={() => {router.push(route)}}
            className="bg-blue-400 p-2 text-gray-100 font-bold rounded-md transition-all duration-500 hover:bg-blue-500"
        >
            { children }
        </button>
    )
}