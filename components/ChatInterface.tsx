"use client";
import { Doc, Id } from "@/convex/_generated/dataModel";
import React, { useState } from "react";

interface ChatInterfaceProps {
  chatId: Id<"chats">;
  initialMessages: Doc<"messages">[];
}

function ChatInterface({ chatId, initialMessages }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Doc<"messages">[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <h1>ChatInterface for {chatId}</h1>
    </div>
  );
}

export default ChatInterface;
