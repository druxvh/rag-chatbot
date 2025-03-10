"use client"
import { RiLoader5Fill } from "react-icons/ri";

const LoadingBubble = () => {
    return (
        <div>
            <div className="w-fit px-12 bg-gray-300 py-1.5 rounded-xl text-gray-950">
                <RiLoader5Fill className="size-7 animate-spin" />
            </div>
        </div>
    )
}

export default LoadingBubble