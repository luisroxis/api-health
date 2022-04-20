import { JobContract } from '@ioc:Rocketseat/Bull'

export default class ForgotPassowrdEmail implements JobContract {
  public key = 'ForgotPassowrdEmail'

  public async handle(job) {
    const { data } = job

    console.log(data)
    // Do somethign with you job data
  }
}
