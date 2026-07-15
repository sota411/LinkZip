import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { sql } from 'drizzle-orm'

export const links = sqliteTable('links', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    slug: text('slug').notNull().unique(),
    type: text('type', { enum: ['normal', 'bundle'] }).notNull(),
    url: text('url'),
    title: text('title'),
    description: text('description'),
    clickCount: integer('click_count').notNull().default(0),
    createdAt: integer('created_at').notNull().default(sql`(unixepoch())`)
})