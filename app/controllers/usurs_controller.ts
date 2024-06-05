import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import Users_service from '#services/animales_servicio_service'

export default class UsursController {
    @inject()
    async index(ctx: HttpContext, user_service:Users_service ){
        let usuario = user_service.all()
        return usuario
    }
    @inject()
    async store(ctx: HttpContext, user_service:Users_service ){
        const data = ctx.request.body()
        return user_service.guardarUser(data)
    }
}