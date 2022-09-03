import { DbEntity } from '../infras/DbEntity';
import { Column, Entity } from 'typeorm';
import { Notification } from '../domain/Notification';

export abstract class NotificationBaseDb<TEntity extends Notification> extends DbEntity<TEntity> {
  constructor(userType: { new (): TEntity } = Notification as any) { super(userType); }

  @Column('varchar', { name: "content" })
  content!: string;

  override toEntity(): TEntity {
    const entity = super.toEntity();
    entity.content = this.content;
    return entity;
  }

  override fromEntity(entity: TEntity): void {
    super.fromEntity(entity);
    this.content = entity.content;
  }
}

@Entity("persons")
export class NotificationDb extends NotificationBaseDb<Notification> {}