import { JobContract } from '@ioc:Rocketseat/Bull'

export default class UserRegisterEmail implements JobContract {
  public key = 'UserRegisterEmail'

  public async handle(job) {
    const { data } = job

    console.log(data)
    // Do somethign with you job data
  }
}
