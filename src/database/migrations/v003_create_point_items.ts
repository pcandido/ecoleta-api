import Knex, { SchemaBuilder } from 'knex'

export function up(knex: Knex): SchemaBuilder {
    return knex.schema.createTable('point_items', table => {
        table.integer('point_id')
            .notNullable()
            .references('id').inTable('points')

        table.integer('item_id')
            .notNullable()
            .references('id').inTable('items')

        table.primary(['point_id', 'item_id'])
    })
}

export function down(knex: Knex): SchemaBuilder {
    return knex.schema.dropSchema('point_items')
}
