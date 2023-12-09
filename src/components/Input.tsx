interface InputProps {
    type : string,
    placeholder? : string,
    setter : any,
    value : any,
    label? : string
}

export default ({ type, placeholder = "Digite aqui", setter, value, label = "" } : InputProps) => {
    function generateUpdater(setterFunction : any) {
        return (event : any) => { setterFunction(event.target.value); }
    }

    const updater : (event : any) => (any) = generateUpdater(setter);
    label += label == "" ? "" : ":";

    return (
        <div className="my-8 w-full max-w-lg">
             {
                !(type === "textarea") ? 
                    (
                       <label className="cursor-pointer">
                        { label }
                            <input 
                                type={type} 
                                placeholder={placeholder} 
                                value={value} 
                                onInput={updater}
                                className="p-4 border border-slate-300 rounded-lg mx-4 outline-none max-w-full"
                            />
                        </label>
                    )
                :
                    (
                        <textarea 
                            placeholder={placeholder} 
                            value={value} 
                            onInput={updater}
                            className="p-4 border border-slate-300 rounded-lg outline-none w-full w-max-lg resize-none"
                        />
                    )
            }
        </div>
       
    )
}