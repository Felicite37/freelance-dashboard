import React, { useState } from "react";
import { useAppState } from "../context/AppContext";
import type { Message } from "../models/index";

export const ClientMessages: React.FC<{ clientId: string }> = ({ clientId }) => {
  const { state, dispatch } = useAppState();
  const [text, setText] = useState("");

  const clientMessages = state.messages.filter((m) => m.clientId === clientId);

  const addMessage = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const newMessage: Message = {
      id: Math.random().toString(36).slice(2),
      clientId,
      text: trimmed,
      date: new Date().toISOString(),
    };
    dispatch({ type: "ADD_MESSAGE", payload: newMessage });
    setText("");
  };

  return (
    <div className="mt-3 border-t pt-3">
      <h4 className="text-sm font-semibold text-gray-700 mb-2">Messages</h4>
      {clientMessages.length === 0 ? (
        <p className="text-xs text-gray-500">No messages yet.</p>
      ) : (
        <ul className="space-y-2 mb-3">
          {clientMessages.map((m) => (
            <li key={m.id} className="text-sm bg-gray-50 p-2 rounded">
              <div className="text-gray-800">{m.text}</div>
              <div className="text-xs text-gray-500">{new Date(m.date).toLocaleString()}</div>
            </li>
          ))}
        </ul>
      )}
      <div className="flex items-center gap-2">
        <input
          className="border rounded px-2 py-1 text-sm flex-1"
          placeholder="Add a message for this client"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white text-sm px-3 py-1 rounded"
          onClick={addMessage}
        >
          Add
        </button>
      </div>
    </div>
  );
};