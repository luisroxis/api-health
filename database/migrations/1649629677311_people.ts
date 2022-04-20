import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class People extends BaseSchema {
  protected tableName = 'people'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('name')
      table.string('doc').notNullable().unique()
      table.string('aniversario')
      table.string('contato')
      table.string('contato2')
      table.string('raca')
      table.string('sexo')
      table.boolean('psaude').defaultTo(0)
      table.boolean('pseg').defaultTo(0)
      table.boolean('status').defaultTo(1)
      table
        .integer('person_type_id')
        .unsigned()
        .references('id')
        .inTable('person_types')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
