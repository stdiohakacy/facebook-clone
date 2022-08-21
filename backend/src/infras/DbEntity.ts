import { Entity } from '../domain/Entity';
import { CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export abstract class DbEntity<TEntity extends Entity> {
  constructor(private _type: { new (): TEntity }) {}

  @PrimaryGeneratedColumn('uuid', { name: "id" })
  id!: string;

  @CreateDateColumn({ name: "createdAt", type: 'timestamptz' })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updatedAt", type: 'timestamptz' })
  updatedAt!: Date;

  @DeleteDateColumn({ name: "deletedAt", type: 'timestamptz', nullable: true })
  deletedAt?: Date;

  /* Relationship */

  /* Handlers */

  toEntity(): TEntity {
    const entity = new this._type();
    entity.id = this.id;
    entity.createdAt = this.createdAt;
    entity.updatedAt = this.updatedAt;
    entity.deletedAt = this.deletedAt;
    return entity;
  }

  fromEntity(entity: TEntity): void {
    this.id = entity.id;
    this.createdAt = entity.createdAt;
    this.updatedAt = entity.updatedAt;
    this.deletedAt = entity.deletedAt;
  }

  toJSON(): any {
    const data = JSON.parse(JSON.stringify({ ...this }));
    delete data._type;
    return data;
  }
}
