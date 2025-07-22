export interface ChatMessage {
  id?: number;
  sender: string;       // example: "Alice" or "Bob"
  content: string;
  timestamp: Date;
}