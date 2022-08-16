import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Blog {
    @PrimaryGeneratedColumn('uuid', { name: "id" })
    id!: string;

    @Column()
    title!: string

    @Column()
    text!: string
}