interface TitleProps {
    size : string
    children : React.ReactNode
}

type Sizes = {
    [key : string] : string
}

const sizes : Sizes = {
    small: 'text-xl',
    medium: 'text-2xl',
    large: 'text-4xl'
}

export default ({ children, size } : TitleProps) => {
    return (
        <div className={`${sizes[size]} text-zinc-950 font-bold my-4`}> { children } </div>
    )
}