import { DateTime } from "luxon";
import { BaseModel, column } from "@adonisjs/lucid/orm";

export default class Animales extends BaseModel{
  @column ({isPrimary : true})
  declare id: number

  @column()
  declare animalName: string

  @column()
  declare color: string

  @column()
  declare vista: string

  @column()
  declare extincion: string


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime


}
// export interface Animal {
//     id:number,
//     name: string,
//     color : string,
//     vista: string,
//     extincion: string
// }

