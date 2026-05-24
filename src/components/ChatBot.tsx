import { useState, useEffect, useRef, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BrainCircuit, X, Send, Command, Sparkles, MessageSquareDot, CornerDownLeft } from "lucide-react";
import { ChatMessage } from "../types";

interface ChatBotProps {
  darkMode: boolean;
}

export default function ChatBot({ darkMode }: ChatBotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "assistant",
      text: "Developer link active. I am Eklavya's AI surrogate surrogate built using the Google @google/genai SDK. Ask me anything about Eklavya's skills, backend pipelines, projects, or how to initiate a technical partnership.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatPulse, setChatPulse] = useState(true);

  const listEndRef = useRef<HTMLDivElement>(null);

  // Focus and auto scroll bottom
  useEffect(() => {
    if (listEndRef.current) {
      listEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  const handleMessageSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const prompt = inputText.trim();
    if (!prompt) return;

    // Clear pulsing notification after first interaction
    setChatPulse(false);

    const userMsgId = `usr_${Date.now()}`;
    const userMsg: ChatMessage = {
      id: userMsgId,
      sender: "user",
      text: prompt,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setLoading(true);

    try {
      // Package payload history
      const historyPayload = messages.slice(-5).map((m) => ({
        sender: m.sender,
        text: m.text
      }));

      const res = await fetch("/api/gemini/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: prompt, history: historyPayload })
      });

      if (!res.ok) {
        throw new Error("Cognitive link pipeline completed with errors.");
      }

      const data = await res.json();
      
      const assistantMsg: ChatMessage = {
        id: `asst_${Date.now()}`,
        sender: "assistant",
        text: data.text || "I was able to map your context successfully but generated an empty stream.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err: any) {
      console.error("Failed to fetch response from Express endpoint:", err);
      
      const errMsg: ChatMessage = {
        id: `err_${Date.now()}`,
        sender: "assistant",
        text: "My neural gateway proxy is experiencing cold starts. Please double check that my GEMINI_API_KEY environment variable is configured in the systems panel, or initiate contact directly via Eklavya's primary communication mail at grimrishi@gmail.com.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, errMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 font-sans text-xs">
      {/* Expanded Dialog Box Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: "spring", stiffness: 180, damping: 20 }}
            className={`w-[90vw] sm:w-[380px] h-[500px] rounded-2xl border flex flex-col justify-between overflow-hidden shadow-2xl mb-4 ${
              darkMode ? "bg-[#0b0b0c] border-[#222222] text-[#f1f1f2]" : "bg-white border-gray-200 text-gray-800"
            }`}
          >
            {/* Header bar top */}
            <div className={`px-4.5 py-3.5 flex items-center justify-between border-b ${
              darkMode ? "bg-black/30 border-[#222222]" : "bg-gray-50 border-gray-100"
            }`}>
              <div className="flex items-center gap-2.5">
                <div className={`p-1.5 rounded-lg ${
                  darkMode ? "bg-purple-500/10 text-purple-400" : "bg-purple-100 text-purple-600"
                }`}>
                  <BrainCircuit size={15} />
                </div>
                <div className="flex flex-col">
                  <span className={`font-sans font-extrabold text-xs leading-none ${
                    darkMode ? "text-white" : "text-black"
                  }`}>
                    Eklavya_AI_Agent
                  </span>
                  <span className="flex items-center gap-1.5 mt-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] text-gray-500 tracking-wide font-mono leading-none">Cognitive Link Connected</span>
                  </span>
                </div>
              </div>

              <button
                id="close-chat-bot-panel-btn"
                onClick={() => setIsOpen(false)}
                className={`p-1 rounded-full transition-all ${
                  darkMode ? "text-gray-400 hover:text-white hover:bg-[#161618]" : "text-gray-500 hover:text-black hover:bg-gray-100"
                }`}
              >
                <X size={15} />
              </button>
            </div>

            {/* Message streams logger */}
            <div className={`flex-1 overflow-y-auto p-4 flex flex-col gap-4 [scrollbar-width:thin] ${
              darkMode ? "bg-black/10" : "bg-slate-50/10"
            }`}>
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex flex-col max-w-[85%] ${
                    m.sender === "user" ? "self-end items-end" : "self-start items-start"
                  }`}
                >
                  <div className={`px-4.5 py-3 rounded-2xl tracking-normal text-xs sm:text-2xs sm:leading-relaxed ${
                    m.sender === "user"
                      ? darkMode
                        ? "bg-purple-600 text-white rounded-tr-xs"
                        : "bg-black text-white rounded-tr-xs"
                      : darkMode
                      ? "bg-[#161618] border border-[#222222] text-gray-200 rounded-tl-xs"
                      : "bg-gray-100 text-gray-800 rounded-tl-xs"
                  }`}>
                    {m.text}
                  </div>
                  <span className="text-[9px] text-gray-500 tracking-wider font-mono mt-1 px-1">{m.timestamp}</span>
                </div>
              ))}

              {/* Typing Loader Indicators */}
              {loading && (
                <div className="flex flex-col self-start items-start max-w-[85%]">
                  <div className={`px-4 py-3 rounded-2xl flex items-center gap-1 border ${
                    darkMode ? "bg-[#161618] border-[#222222]" : "bg-gray-100 border-gray-100"
                  }`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-bounce" />
                  </div>
                </div>
              )}
              <div ref={listEndRef} />
            </div>

            {/* Input prompts controller */}
            <form
              id="chat-submit-form"
              onSubmit={handleMessageSubmit}
              className={`p-3.5 border-t flex items-center gap-2 ${
                darkMode ? "bg-black/30 border-[#222222]" : "bg-gray-50 border-gray-100"
              }`}
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask Eklavya AI surrogate..."
                className={`bg-transparent p-2 flex-1 outline-hidden border-none text-xs leading-none focus:outline-hidden focus:ring-0 ${
                  darkMode ? "text-gray-100 placeholder-gray-600" : "text-gray-950 placeholder-gray-400"
                }`}
                aria-label="Message text prompt in chat"
              />

              <button
                type="submit"
                className={`p-2 rounded-lg transition-colors flex items-center justify-center ${
                  darkMode ? "bg-purple-600 text-white hover:bg-purple-500" : "bg-black text-white hover:bg-black/90"
                }`}
                aria-label="Send Message"
              >
                <Send size={13} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Trigger Button Bubble */}
      <motion.button
        id="toggle-chat-bot-bubble"
        onClick={() => {
          setIsOpen(!isOpen);
          setChatPulse(false);
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-11 h-11 sm:w-13 sm:h-13 rounded-full flex items-center justify-center cursor-pointer shadow-2xl relative ${
          isOpen
            ? "bg-purple-600 border border-purple-500 text-white"
            : darkMode
            ? "bg-white text-black border border-[#222222]"
            : "bg-black text-white"
        }`}
        title="Chat with Eklavya AI Agent"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="closeicon" initial={{ rotate: -45 }} animate={{ rotate: 0 }} exit={{ rotate: 45 }}>
              <X size={18} />
            </motion.div>
          ) : (
            <motion.div key="chatcon" initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} className="relative">
              <MessageSquareDot size={20} />
              
              {/* Soft pulsing notify notifier */}
              {chatPulse && (
                <span className="absolute -top-1.5 -right-1.5 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-600"></span>
                </span>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
