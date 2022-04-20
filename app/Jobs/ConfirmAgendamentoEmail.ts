import { JobContract } from '@ioc:Rocketseat/Bull'

export default class ConfirmAgendamentoEmail implements JobContract {
  public key = 'ConfirmAgendamentoEmail'

  public async handle(job) {
    const { data } = job

    console.log(data)
    // Do somethign with you job data
  }
}
