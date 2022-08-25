import { Member } from "../domain/Member";
import { Column, Entity } from "typeorm";
import { PersonBaseDb } from "./PersonDb";

@Entity("member")
export class MemberDb extends PersonBaseDb<Member> {
  constructor() {
    super(Member);
  }

  @Column('timestamptz', { name: "dateOfMemberShip", nullable: true })
  dateOfMemberShip?: Date;

  override toEntity(): Member {
    const entity = super.toEntity();

    entity.dateOfMemberShip = this.dateOfMemberShip;

    return entity;
  }

  override fromEntity(entity: Member): void {
    super.fromEntity(entity);

    this.dateOfMemberShip = entity.dateOfMemberShip;
  }
}