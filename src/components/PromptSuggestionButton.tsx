"use client"
import { PromptSuggestionButtonProps } from "../../types"

const PromptSuggestionButton = ({ text, onClick }: PromptSuggestionButtonProps) => {
    return (
        <button className="px-2.5 py-2 h-fit w-fit text-left text-wrap font-mono text-[11px] bg-black text-gray-50 rounded-lg cursor-pointer"
            onClick={onClick}>
            {text}
        </button>
    )
}

export default PromptSuggestionButton