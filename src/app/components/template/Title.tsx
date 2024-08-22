import { ElementType } from 'react'

export interface Title {
    principal: string
    second: string
    icon: ElementType
}

export default function Title(props: Title) {
    return (
        <div className="flex gap-2">
            <props.icon size={55} stroke={1} />
            <div className="flex flex-col">
                <h1 className="text-2xl font-black">{props.principal}</h1>
                <h2 className="text-zinc-400">{props.second}</h2>
            </div>
        </div>
    )
}
