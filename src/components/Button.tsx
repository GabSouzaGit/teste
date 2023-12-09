interface ButtonProps {
    children : React.ReactNode,
    callback : (...x : any[]) => (void),
    params? : any[]
}

export default ({ children, callback, params = [] } : ButtonProps) => {
    function handleEventClick(){
        if(params[0]){
            callback(...params)
            return;
        }

        callback();
    }

    return (
        <div>
            <button onClick={handleEventClick} className="bg-blue-400 p-2 m-px text-gray-100 font-bold rounded-md transition-all duration-500 hover:bg-blue-500">
                { children }
            </button>
        </div>
        
    )
}