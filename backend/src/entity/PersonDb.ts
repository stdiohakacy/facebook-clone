import { DbEntity } from '../infras/DbEntity';
import { Column, Entity } from 'typeorm';
import { Person } from '../domain/Person';

export abstract class PersonBaseDb<TEntity extends Person> extends DbEntity<TEntity> {
  constructor(userType: { new (): TEntity } = Person as any) {
    super(userType);
  }

  @Column('varchar', { name: "name" })
  name!: string;

  @Column('varchar', { name: "email" })
  email!: string;

  @Column('varchar', { name: "phone" })
  phone!: string;

  /* Relationship */

  /* Handlers */

  override toEntity(): TEntity {
    const entity = super.toEntity();

    entity.name = this.name;
    entity.email = this.email;
    entity.phone = this.phone;

    /* Relationship */

    return entity;
  }

  override fromEntity(entity: TEntity): void {
    super.fromEntity(entity);

    this.name = entity.name;
    this.email = entity.email;
    this.phone = entity.phone;
  }
}

@Entity("persons")
export class PersonDb extends PersonBaseDb<Person> {}
