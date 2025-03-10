export interface PromptSuggestionButtonProps {
    text: string,
    onClick: () => void
}

export interface PromptSuggestionProps {
    onPromptClick: (prompt: string) => void
}

export interface BubbleProps {
    message: ChatMessageProps
}

export interface ChatMessageProps {
    id: string,
    content: string,
    role?: 'system' | 'user' | 'assistant' | 'data',
}