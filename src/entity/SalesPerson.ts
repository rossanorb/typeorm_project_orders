import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { Person } from "./Person"

@Entity()
export class SalesPerson extends Person {}
