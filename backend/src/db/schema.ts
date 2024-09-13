import { pgTable, text, integer, timestamp } from 'drizzle-orm/pg-core'
// npm i @paralleldrive/cuid2: pacote para criar ids
import { createId } from '@paralleldrive/cuid2'

export const goals = pgTable('goals', {
    id: text('id').primaryKey().$defaultFn(()=> createId()),
    title: text('title').notNull(),
    desiredWeeklyFrequency: integer('desired_weekly_frequency').notNull(),
    createdAt: timestamp('created_at', {withTimezone: true})
        .notNull()
        .defaultNow(),
})

export const goalCompletions = pgTable ('goals_completions', {
    id: text('id').primaryKey().$defaultFn(()=> createId()),
    goalId: text('goal_id')
        .references(()=>goals.id)
        .notNull(),
    createdAt: timestamp('created_at', {withTimezone: true})
        .notNull()
        .defaultNow(),
})