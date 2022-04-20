import { JobContract } from '@ioc:Rocketseat/Bull'
export default class SendLaudoEmail implements JobContract {
  public key = 'SendLaudoEmail'

  public async handle(job) {
    const { data } = job

    console.log(data)
    // Do somethign with you job data
  }
}
