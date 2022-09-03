import { Column, Entity } from "typeorm";
import { NotificationBaseDb } from "./NotificationDb";
import { PushNotification } from "../domain/PushNotification";

@Entity("push_notification")
export class PushNotificationDb extends NotificationBaseDb<PushNotification> {
  constructor() { super(PushNotification); }

  @Column('varchar', { name: "phone" })
  phoneNumber!: string;

  override toEntity(): PushNotification {
    const entity = super.toEntity();
    entity.phoneNumber = this.phoneNumber;
    return entity;
  }

  override fromEntity(entity: PushNotification): void {
    super.fromEntity(entity);
    this.phoneNumber = entity.phoneNumber;
  }
}