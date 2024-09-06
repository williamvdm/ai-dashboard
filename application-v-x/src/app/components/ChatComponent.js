import { useState, useRef, useEffect } from "react";
import { BiSolidSend } from "react-icons/bi";
import PuffLoader from "react-spinners/PuffLoader";

export default function ChatComponent() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [conversationId, setConversationId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef(null);

  const handleSend = async () => {
    if (input.trim()) {
      const newMessages = [...messages, { sender: "user", text: input }];
      setMessages(newMessages);
      setInput("");
      setIsLoading(true);

      try {
        const response = await fetch("http://localhost:8000/generate/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: input,
            conversation_id: conversationId,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          setMessages([...newMessages, { sender: "ai", text: data.response }]);
          setConversationId(data.conversation_id);
          console.log(data);
        } else if (response.status === 422) {
          const errorData = await response.json();
          console.error("Validation error:", errorData);
          throw new Error("Invalid input data");
        } else {
          throw new Error("Response was not OK");
        }
      } catch (error) {
        console.error("Error fetching AI response:", error);
        setMessages([
          ...newMessages,
          { sender: "ai", text: `${error.message}.` },
        ]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <section className="p-6 bg-white rounded-lg border flex flex-col col-span-2">
      <div className="flex flex-col space-y-4 flex-grow max-h-64 min-h-64">
        <div
          id="chat-container"
          className="flex flex-col space-y-4 justify-self-start flex-grow overflow-y-auto"
          ref={chatContainerRef}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl ${
                msg.sender === "user"
                  ? "bg-gray-200 self-end md:max-w-[50%]"
                  : "bg-blue-100 self-start md:max-w-[50%]"
              }`}
            >
              <p className="text-gray-900">{msg.text}</p>
            </div>
          ))}
          {isLoading && (
            <div className="self-start bg-blue-100 p-4 rounded-xl md:max-w-[50%]">
              <PuffLoader size={24} />
            </div>
          )}
        </div>
        <div id="input-container" className="flex space-x-2 border rounded-lg mt-auto p-2">
          <input
            type="text"
            placeholder="Type your question here..."
            className="flex-grow w-full p-2 rounded-lg focus:outline-none"
            aria-label="Type your question here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !isLoading) {
                handleSend();
              }
            }}
          />
          <button
            className={`px-3 text-gray-700 hover:text-gray-900 transition ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            aria-label="Send question"
            onClick={handleSend}
            disabled={isLoading}
          >
            <BiSolidSend />
          </button>
        </div>
      </div>
    </section>
  );
}