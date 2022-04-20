import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('email').notNullable()
      table.string('username').notNullable().unique()
      table.string('password').notNullable()
      table.string('remember_me_token').nullable()
      table
        .integer('user_type_id')
        .unsigned()
        .references('id')
        .inTable('user_types')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
