/* export class Animales{
    async all(){
        return [
            {name:"Mariposa", color:"Morada", vista:"Africa", extincion: "Baja"},
            {name:"Dodo", color:"gris", vista:"Era de hielo", extincion: "Altisima"},
            {name: "Cocodrillo",color : "Verde", vista:"Pantano", extincion:"Media"},
            {name:"Dinosar",color:"Gris", vista: "hace  100.000 años", extinsion:"Alta"}
        ]
    }
}
 */
import {Animal }from '#models/animales_models'
export const animales : Animal[] = [
    {id: 1, name:"Mariposa", color:"Morada", vista:"Africa", extincion: "Baja"},
            {id: 2,name:"Dodo", color:"gris", vista:"Era de hielo", extincion: "Altisima"},
            {id: 3,name: "Cocodrillo",color : "Verde", vista:"Pantano", extincion:"Media"},
            {id: 4, name:"Dinosar",color:"Gris", vista: "hace  100.000 años", extincion:"Alta"}
]
