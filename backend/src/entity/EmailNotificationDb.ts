import { Column, Entity } from "typeorm";
import { NotificationBaseDb } from "./NotificationDb";
import { EmailNotification } from "../domain/EmailNotifiction";

@Entity("email_notification")
export class EmailNotificationDb extends NotificationBaseDb<EmailNotification> {
  constructor() { super(EmailNotification); }

  @Column('varchar', { name: "email" })
  email!: string;

  override toEntity(): EmailNotification {
    const entity = super.toEntity();
    entity.email = this.email;
    return entity;
  }

  override fromEntity(entity: EmailNotification): void {
    super.fromEntity(entity);
    this.email = entity.email;
  }
}