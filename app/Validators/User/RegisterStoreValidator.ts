import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RegisterStoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    username: schema.string({ trim: true }, [rules.unique({ table: 'users', column: 'username' })]),
    name: schema.string({ trim: true }),
    email: schema.string({ trim: true }, [
      rules.email(),
      //Define que o e-mail deve ser ÚNICO, na tabela user e na coluna e-mail:
      rules.unique({ table: 'users', column: 'email' }),
    ]),
    redirectUrl: schema.string({ trim: true }),
  })

  public messages = {}
}
