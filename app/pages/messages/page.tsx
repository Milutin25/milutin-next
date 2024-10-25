"use client";

import { useEffect, useState } from "react";
import NavBar from "@/app/components/navBar";
import HambMenu from "@/app/components/hambMenu";
import Cursor from "@/app/components/cursor";
import { createClient } from "@/app/supabase/client";

interface Message {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
}

export default function MessagesPage() {
  const supabase = createClient();
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("Table")
          .select("*")
          .order("created_at", { ascending: sortOrder === "oldest" });

        if (error) {
          setError(`Failed to fetch messages: ${JSON.stringify(error)}`);
          console.error("Error fetching messages:", error);
        } else {
          setMessages(data || []);
        }
      } catch (err) {
        setError("Unexpected error occurred while fetching data.");
        console.error("Unexpected error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [supabase, sortOrder]);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value as "newest" | "oldest");
  };

  return (
    <>
      <Cursor />
      <div className="mouse-cursor">
        <div className="cursor-inner"></div>
        <div className="cursor-outer"></div>
      </div>
      <NavBar />
      <HambMenu />
      <div id="messages" className="kioto_tm_section">
        <div className="container">
          <div className="kioto_tm_messages">
            <div className="kioto_tm_title">
              <span>// Messages</span>
            </div>

            <div className="sort-form">
              <label htmlFor="sortOrder">Sort by date:</label>
              <select id="sortOrder" value={sortOrder} onChange={handleSortChange}>
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>

            {loading ? (
              <p>Loading messages...</p>
            ) : error ? (
              <p className="error-message">{error}</p>
            ) : messages.length === 0 ? (
              <p>No messages found.</p>
            ) : (
              <div className="messages_list">
                <ul>
                  {messages.map((msg) => (
                    <li key={msg.id}>
                      <div className="list_inner">
                        <h4>{msg.name}</h4>
                        <p><strong>Email:</strong> {msg.email}</p>
                        <p><strong>Phone:</strong> {msg.phone}</p>
                        <p><strong>Message:</strong> {msg.message}</p>
                        <p><strong>Date:</strong> {new Date(msg.created_at).toLocaleString()}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
