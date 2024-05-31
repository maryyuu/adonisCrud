 //import Animale from "#models/animale"
 import User from "#models/user"
//  export class Animales{
//     async all(){
//         return [
//             {name:"Mariposa", color:"Morada", vista:"Africa", extincion: "Baja"},
//             {name:"Dodo", color:"gris", vista:"Era de hielo", extincion: "Altisima"},
//             {name: "Cocodrillo",color : "Verde", vista:"Pantano", extincion:"Media"},
//             {name:"Dinosar",color:"Gris", vista: "hace  100.000 años", extinsion:"Alta"}
//         ]
//     }

//     async guardarAnimales(){
//         let animal = new Animale()

//         animal.name = "Ballena"
//         animal.type = "Acuatico"
//     }

// }
export default class Users{
    
    async all(User:any[]){
      return User
    }
    
    async guardarUser(data:any){
        let user = new User()                                                                                                                               

        user.fullName=data.fullName
        user.email =data.email
        user.password =data.password

        await user.save()
        
    }
}
//import {Animal }from '#models/animale.ts'
// export const animales : Animal[] = [
//     {id: 1, name:"Mariposa", color:"Morada", vista:"Africa", extincion: "Baja"},
//             {id: 2,name:"Dodo", color:"gris", vista:"Era de hielo", extincion: "Altisima"},
//             {id: 3,name: "Cocodrillo",color : "Verde", vista:"Pantano", extincion:"Media"},
//             {id: 4, name:"Dinosar",color:"Gris", vista: "hace  100.000 años", extincion:"Alta"}
// ]*