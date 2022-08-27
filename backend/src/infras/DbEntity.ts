import { Entity } from '../domain/Entity';
import { Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export abstract class DbEntity<TEntity extends Entity> {
  constructor(private _type: { new (): TEntity }) {}

  @PrimaryGeneratedColumn('uuid', { name: "id" })
  id!: string;

  @CreateDateColumn({ name: "createdAt", type: 'timestamptz' })
  createdAt!: Date;

  @Column({ name: "createdBy", type: 'uuid' })
  createdBy!: string;

  @UpdateDateColumn({ name: "updatedAt", type: 'timestamptz' })
  updatedAt!: Date;

  @Column({ name: "updatedBy", type: 'uuid' })
  updatedBy!: string;

  @DeleteDateColumn({ name: "deletedAt", type: 'timestamptz', nullable: true })
  deletedAt?: Date;

  @Column({ name: "deletedBy", type: 'uuid' })
  deletedBy!: string;

  /* Relationship */

  /* Handlers */

  toEntity(): TEntity {
    const entity = new this._type();

    entity.id = this.id;
    entity.createdAt = this.createdAt;
    entity.createdBy = this.createdBy;
    entity.updatedAt = this.updatedAt;
    entity.updatedBy = this.updatedBy;
    entity.deletedAt = this.deletedAt;
    entity.deletedBy = this.deletedBy;

    return entity;
  }

  fromEntity(entity: TEntity): void {
    this.id = entity.id;
    this.createdAt = entity.createdAt;
    this.createdBy = entity.createdBy;
    this.updatedAt = entity.updatedAt;
    this.updatedBy = entity.updatedBy;
    this.deletedAt = entity.deletedAt;
    this.deletedBy = entity.deletedBy;
  }

  toJSON(): any {
    const data = JSON.parse(JSON.stringify({ ...this }));
    delete data._type;
    return data;
  }
}
