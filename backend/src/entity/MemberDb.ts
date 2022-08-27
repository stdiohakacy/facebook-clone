import { Member } from "../domain/Member";
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { PersonBaseDb } from "./PersonDb";
import { ProfileDb } from "./ProfileDb";
import { GroupMembersDb } from "./GroupMembersDb";
import { MemberLikePostDb } from "./MemberLikePostDb";
import { MemberSharePostDb } from "./MemberSharePostDb";
import { MessageDb } from "./MessageDb";

@Entity("member")
export class MemberDb extends PersonBaseDb<Member> {
  constructor() { super(Member); }

  @Column('timestamptz', { name: "dateOfMemberShip", nullable: true })
  dateOfMemberShip?: Date;

  /* Relationship */

  @OneToOne(() => ProfileDb, (profile) => profile.member)
  @JoinColumn()
  profile!: ProfileDb

  @OneToMany(() => GroupMembersDb, (groupMembers) => groupMembers.member)
  groupMembers!: GroupMembersDb

  @OneToMany(() => MemberLikePostDb, (memberLikePosts) => memberLikePosts.member)
  memberLikePosts?: MemberLikePostDb

  @OneToMany(() => MemberSharePostDb, (memberSharePosts) => memberSharePosts.member)
  memberSharePosts?: MemberLikePostDb

  @OneToMany(() => MessageDb, (messages) => messages.member)
  messages?: MessageDb

  override toEntity(): Member {
    const entity = super.toEntity();

    entity.dateOfMemberShip = this.dateOfMemberShip;
    entity.profile = this.profile;

    return entity;
  }

  override fromEntity(entity: Member): void {
    super.fromEntity(entity);

    this.dateOfMemberShip = entity.dateOfMemberShip;
  }
}