import type { HttpContext } from '@adonisjs/core/http'
import {Animal, animales } from "#services/animales_servicio_service"

const funcionGet = (Array:any[], params:any) =>{
  let id = parseInt(params.id);

    
  for(let i = 0; i <=Array.length; i++) {
    if(Array[i].id === id){

        return Array[i]
      
    }else if(params.id > Array.length)  {
      return 'NO EXISTE'  
    }
   }
  
  
}
export default class AnimalesResourcesController {
  /**
   * Display a list of resource
   */
  async index(ctx: HttpContext) {
    return animales
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {

  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {

   return funcionGet(animales, params)
  }
   
  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {

  }
}