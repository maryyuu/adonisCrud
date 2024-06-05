
import type { HttpContext } from '@adonisjs/core/http'
//import { animales } from "#services/animales_servicio_service"
//import { Animal } from '#models/animales_models';
import  Users_service  from '#services/animales_servicio_service';
// import User from '#models/user';

import { inject } from '@adonisjs/core';

// const funcionGet = (Array:any[], params:any) =>{
//   let id = parseInt(params.id);

//   for(let i = 0; i <=Array.length; i++) {
//     if(Array[i] === id){
//         return Array[i]
//     }else if(Array[i] != id)  {
//       return 'NO EXISTE'
//     }
//    }
//   }

// const funcionDelete= (Array:any[], params:any)=>{
//   const index = funcionGet(Array, params)
//   if(index != null){
//   Array.splice(index,1)
//     return index + 'Se agrego Correctamente'
//   }
//   return 'NO EXISTE'
// }

// const funcionPost= ( peticion:any, Users:any) =>{
//   if(
//     Users.push(peticion.body())){
//   return 'Agregado'
//   }
//   return 'No se pudo agregar'


// }

// const funcionUpdateById= (Array:any[], peticion:any, params:any) =>{
//   const index = funcionGet(Array,params );
//   if(index != null){
//     Array.splice(index ,1 , peticion.body())
//     return 'Se actualizo exitosamente'
//   }else{
//     return 'No se pudo Actualizar el id no existe'
//   }
// }
export default class AnimalesResourcesController {
  /**
   * Display a list of resource
   */
  @inject()
  async index(ctx: HttpContext, user:Users_service) {
      user.mostrarAnimales();
      return ctx.response.status(200).json(user);
   }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {

  }

  /**
   * Handle form submission for the create action
   */
 // async store({ request }: HttpContext) {
  @inject()
    async store(ctx:HttpContext, usuario: Users_service) {
    const data = ctx.request.body()
    console.log(data)
//    const post = await
    return usuario.guardarUser(data)

  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {

  // return funcionGet(animales, params)
  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext)
  {
    //funcionUpdateById(animales, request, params)
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    //funcionDelete(animales,params)
  }
}
