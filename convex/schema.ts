import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  chats: defineTable({
    title: v.string(),
    userId: v.string(),
    createdAt: v.number(),
  }).index("by_user", ["userId"]), // index to query chats by user id

  messages: defineTable({
    chatId: v.id("chats"), // referring to chat id to link messages to chats
    content: v.string(),
    role: v.union(v.literal("user"), v.literal("assistant")), // user or assistant
    createdAt: v.number(),
  }).index("by_chat", ["chatId"]), // index to query messages by chat id
});
