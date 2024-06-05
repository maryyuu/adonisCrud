/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const userController = () => import('#controllers/usurs_controller')


router.post("users",[userController,'store']);
router.get("users",[userController,'index']);
router.post("SingIn",[userController, 'SingIn'])