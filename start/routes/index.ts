import Route from '@ioc:Adonis/Core/Route'

import './HealthCheck'

Route.get('/', async () => {
  return { msg: 'HealthApp API' }
})
