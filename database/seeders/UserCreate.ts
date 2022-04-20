import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { User } from 'App/Models'

export default class UserCreateSeeder extends BaseSeeder {
  public async run() {
    //const user =
    await User.create({
      username: 'root',
      email: 'root@healthapp.com',
      password: '12345678',
      userTypeId: 1,
    })

    //await Person.create({
    //  name: 'Vestra Health',
    // doc: '37802366000194',
    //  contato: '19999999',
    //  personTypeId: 2,
    //  status: true,
    //  userId: user.id,
    //})
  }
}
