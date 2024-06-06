
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
    async guardarUser(data:any){
        let user = new User()

        user.fullName=data.fullName
        user.email =data.email
        user.password =data.password

        if(user){
          return  await user.save()
        }else{
          return {result : "No se logro guardar"}
        }


    }
    async mostrarAnimales(){
       return await User.all();
    }

    async mostarIdAnimales(data:any){
       let idUser= await User.find(data.id);
       if(idUser){
        return idUser
       }else{
        return {result : "No existe "}
       }
  }


    async deleteAnimales(data:any){
     let userdelete = await User.find(data.id)
     if(userdelete){
      await userdelete.delete()
      return {result: "Eliminado correctamente"}
     }else{
      return{result: "No existe elemento"}
     }
    }

    async actulizarUser(data:any){
      let actulizar = await User.find(data.id);
      if(actulizar){
        actulizar.fullName = data.fullName;
        actulizar.email = data.email;
        actulizar.password = data.password;
        await actulizar.save();
        return {result : "Actualizado con exitoo"}
      }else{
        return{return : "NO EXISTE"}
      }
    }
}
//import {Animal }from '#models/animale.ts'
// export const animales : Animal[] = [
//     {id: 1, name:"Mariposa", color:"Morada", vista:"Africa", extincion: "Baja"},
//             {id: 2,name:"Dodo", color:"gris", vista:"Era de hielo", extincion: "Altisima"},
//             {id: 3,name: "Cocodrillo",color : "Verde", vista:"Pantano", extincion:"Media"},
//             {id: 4, name:"Dinosar",color:"Gris", vista: "hace  100.000 años", extincion:"Alta"}
// ]*
