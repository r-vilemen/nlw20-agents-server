import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { rooms } from './rooms.ts';

export const questions = pgTable('questions', {
  id: uuid().primaryKey().defaultRandom(),
  roomId: uuid('room_id')
    .references(() => rooms.id)
    .notNull(),
  question: text().notNull(),
  answer: text(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
