"use client"

import { useChat } from '@ai-sdk/react'
import { Message } from '@ai-sdk/react';

import Bubble from './components/Bubble';
import PromptSuggestions from './components/PromptSuggestions';
import LoadingBubble from './components/LoadingBubble';

function App() {
  const { append, status, messages, input, handleInputChange, handleSubmit } = useChat({
    api: `${import.meta.env.VITE_BACKEND_SERVER_URL}/api/chat`,
    onResponse: async (response) => {
      try {
        const data = await response.json();
        if (data?.response) {
          const aiMessage: Message = {
            id: crypto.randomUUID(),
            content: data.response,
            role: "assistant"
          };
          append(aiMessage);
        } else {
          console.error("Invalid response structure:", data);
        }
      } catch (error) {
        console.error("Error parsing response:", error);
      }
    }
  });

  const noMessages = !messages || messages?.length === 0;

  const handlePrompt = (promptText: string) => {
    const message: Message = {
      id: crypto.randomUUID(),
      content: promptText,
      role: "user"
    }
    append(message)
  }

  return (
    <main className='w-full h-dvh flex flex-col'>
      {/* Navbar */}
      <div className="fixed top-0 w-full max-w-[1280px] h-16 p-2 border-b border-black bg-white flex items-center justify-center z-10">
        <span className="text-3xl text-red-500 font-mono font-black">f1<span className="text-black">GPT</span></span>
      </div>

      {/* chat section */}
      <section className='h-full mt-16 mb-20 overflow-y-auto p-5' style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        <div className='h-full'>
          {noMessages ? (
            <div className="h-full w-full flex flex-col justify-center">
              <p className='p-2 font-mono font-bold text-balance text-center'>The Ultimate place for Formula One super fans! Ask F1GPT anything about the fanstatic topic of F1 racing and it will come back with the most up-to-date answers.</p>
              <br />
              {/* Prompt suggestions */}
              <PromptSuggestions onPromptClick={handlePrompt} />
            </div>
          )
            :
            (
              // map messages onto chat bubbles
              <div className='flex flex-col gap-4'>
                {messages.map(message => (
                  <Bubble key={message.id} message={message} />
                ))}
                {status == 'submitted' && <LoadingBubble />}
              </div>
            )}
        </div>
      </section>

      {/* Form */}
      <div className='fixed bottom-0 p-5 min-h-20 max-w-[1280px] w-full bg-white flex justify-center items-center z-10'>
        <form className=' w-full flex h-12 border-y-2 font-mono text-sm' onSubmit={handleSubmit}>
          <input className='w-full p-5 outline-none border-black' type="text" value={input} onChange={handleInputChange} placeholder="Ask me anything about f1..." />
          <input className='px-6 outline-0 bg-red-400 cursor-pointer hover:bg-red-500 ease-in duration-200' type="submit" />
        </form>
      </div>

    </main>
  )
}

export default App
