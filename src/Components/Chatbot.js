import React, { useState } from 'react';
import { SiChatbot } from 'react-icons/si';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chatbot Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-8 right-16 bg-[#4addbf] text-white p-3 rounded-full shadow-lg hover:bg-[#3c9f99] transition-all"
      >
        <SiChatbot size={25} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-10 bg-white shadow-lg rounded-lg w-80 h-96 p-4 flex flex-col ">
          <header className="flex justify-between items-center pb-4 border-b border-gray-300">
            <h3 className="font-semibold text-xl">Carex Assistant</h3>
            <button
              onClick={toggleChat}
              className="text-gray-500 hover:text-[#4addbf] font-bold"
            >
              <AiOutlineCloseCircle size={20} />
            </button>
          </header>

          {/* Chat Messages */}
          <div className="flex-grow overflow-y-auto space-y-4">
            <div className="text-gray-600">
              <p><strong>Carex Assistant:</strong> Hello! How can I assist you today?</p>
            </div>
            {/* Add more chat messages here */}
          </div>

          {/* Message Input */}
          <div className="pt-4">
            <input
              type="text"
              placeholder="Type a message"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
