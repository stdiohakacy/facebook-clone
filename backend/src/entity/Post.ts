import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Post {
    @PrimaryGeneratedColumn('uuid', { name: "id" })
    id!: string;

    @Column()
    title!: string

    @Column()
    text!: string
}