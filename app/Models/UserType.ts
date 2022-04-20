import { User } from 'App/Models'
import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'

export default class UserType extends BaseModel {
  @column({ isPrimary: true, serializeAs: null })
  public id: number

  @column()
  public name: string

  @column()
  public status: boolean

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime

  @hasOne(() => User)
  public user: HasOne<typeof User>
}
