import dotenv from "dotenv"
dotenv.config()

export const fetchChatResponse = async (messages: any[]) => {
    try {
        const url = process.env.BACKEND_SERVER_URL
        const response = await fetch(`${url}/api/chat`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ messages })
        })
        return await response.json()
    } catch (error) {
        console.error("Error fetching chat response:", error);
        return null;
    }
}