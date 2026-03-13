//blue print of schema( how table column rows should look like )
import { pgTable, integer, varchar } from 'drizzle-orm/pg-core'

export const userTable = pgTable('users', {
  id: integer('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
})


