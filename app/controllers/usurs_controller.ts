import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import Users_service from '#services/animales_servicio_service'
import hash from '@adonisjs/core/services/hash'
import User from '#models/user'


export default class UsursController {
    @inject()
    async index(ctx: HttpContext, user_service:Users_service ){
        let usuario = user_service.mostrarAnimales()
        return usuario
    }
    @inject()
    async store(ctx: HttpContext, user_service:Users_service ){
        const data = ctx.request.body()
        return user_service.guardarUser(data)
    }

    async SingIn({request, response} : HttpContext){
        const {email/* datos del Front DE LA PETICION*/ , password} = request.only([/* De la base de datos */'email', 'password'])
        // forma dos
        //const credenciales = request.only(['email', 'password'])
        //credenciles.emial
    
        const user = await User.findBy('email', email)//Primero el email para comprobar si existe el man
        console.log(user);
        if(!user){//null
            response.abort({result : "No existe el User"})
        }else{
            await hash.verify(user.password,password)
            response.accepted({result : "ACCESSO EXISTOSO, welcome" + user.fullName})
        }
        console.log(user);

    }

}