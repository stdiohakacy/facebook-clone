import { Group } from "../domain/Group";
import { Column, Entity, OneToMany } from "typeorm";
import { DbEntity } from "../infras/DbEntity";
import { GroupMembersDb } from "./GroupMembersDb";

@Entity("groups")
export class GroupDb extends DbEntity<Group> {
  constructor() { super(Group); }

  @Column('varchar', { name: "name" })
  name!: string;

  @Column('varchar', { name: "description" })
  description!: string;

  @Column('varchar', { name: "totalMember" })
  totalMember!: number;

  /* Relationship */

  @OneToMany(() => GroupMembersDb, (groupMembers) => groupMembers.member)
  groupMembers!: GroupMembersDb
}