/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const animales = ()=> import('#controllers/animales_resources_controller')

router.resource('/animales', animales)
