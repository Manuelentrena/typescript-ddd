import { integer, pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const videos = pgTable('videos', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  duration: integer('duration').notNull(),
});
