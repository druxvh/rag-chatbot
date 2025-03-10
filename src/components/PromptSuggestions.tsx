"use client"

import { PromptSuggestionProps } from "../../types"
import PromptSuggestionButton from "./PromptSuggestionButton"

const PromptSuggestions = ({ onPromptClick }: PromptSuggestionProps) => {

  const prompts = [
    "Who is head of racing for Aston Martin's F1 team?",
    "Who is the highest paid F1 driver?",
    "Who will be the newest driver for Ferrari?",
    "Who is the current F1 World Driver's Champion?",
    "Who holds the record for the most F1 World Championships?",
    "What is the fastest lap ever recorded in an F1 race?",
    "How does the DRS work in Formula 1?",
    "What are the key differences between a F1 car and an IndyCar?",
    "Which F1 circuit is the longest?",
    "What are the penalties given to F1 drivers during a race?",
    "Which F1 team has won the most Constructors' Championships?",
  ]


  return (
    <div className="flex px-2 mt-4 flex-wrap gap-2 justify-center">
      {prompts.map((prompt, index) => (
        <PromptSuggestionButton key={index} text={prompt} onClick={() => onPromptClick(prompt)} />
      ))}
    </div>
  )
}

export default PromptSuggestions