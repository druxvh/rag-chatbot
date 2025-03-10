"use client"
import { RiLoader5Fill } from "react-icons/ri";

const LoadingBubble = () => {
    return (
        <div>
            <div className="w-fit px-12 bg-black text-gray-50">
                <RiLoader5Fill className="size-7 animate-spin" />
            </div>
        </div>
    )
}

export default LoadingBubble