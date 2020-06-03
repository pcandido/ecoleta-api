import Knex, { SchemaBuilder } from 'knex'

export function up(knex: Knex): SchemaBuilder {
    return knex.schema.createTable('items', table => {
        table.increments('id').primary()
        table.string('image').notNullable()
        table.string('title').notNullable()
    })
}

export function down(knex: Knex): SchemaBuilder {
    return knex.schema.dropSchema('items')
}
