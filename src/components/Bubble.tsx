"use client"
import { BubbleProps } from "../../types"

const Bubble = ({ message }: BubbleProps) => {

    const { content, role } = message
    const userBubble: string = 'bg-red-300'
    const assistantBubble: string = 'bg-gray-300'
    return (
        <div className={`${role === 'user' ? `justify-end ` : `justify-start`} flex`}>

            <span className={`${role === 'user' ? userBubble : assistantBubble} flex w-fit px-2.5 py-1.5 text-left text-pretty font-mono text-sm rounded-xl max-w-[70%]`}>

                {content}
            </span>
        </div>
    )
}

export default Bubble