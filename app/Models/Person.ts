import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { PersonType, User } from 'App/Models'

export default class Person extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public doc: string

  @column({ serializeAs: null })
  public userId: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column({ serializeAs: null })
  public personTypeId: number

  @belongsTo(() => PersonType)
  public personType: BelongsTo<typeof PersonType>

  @column()
  public aniversario: string

  @column()
  public contato: string

  @column()
  public contato2: string

  @column()
  public raca: string

  @column()
  public sexo: string

  @column()
  public psaude: boolean

  @column()
  public pseg: boolean

  @column()
  public status: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  //@hasOne(() => Address)
  //public address: HasOne<typeof Address>
}
