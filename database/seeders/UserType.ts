import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { UserType } from 'App/Models'

export default class UserTypeSeeder extends BaseSeeder {
  public async run() {
    const active = true
    await UserType.createMany([
      {
        name: 'isRoot',
        status: active,
      },
      {
        name: 'isPaciente',
        status: active,
      },
      {
        name: 'isAdmin',
        status: active,
      },
    ])
  }
}
