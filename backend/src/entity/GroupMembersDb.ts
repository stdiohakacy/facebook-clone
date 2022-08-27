import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { DbEntity } from "../infras/DbEntity";
import { GroupMembers } from "../domain/GroupMembers";
import { MemberDb } from "./MemberDb";
import { GroupDb } from "./GroupDb";

@Entity("group_members")
export class GroupMembersDb extends DbEntity<GroupMembers> {
    constructor() { super(GroupMembers); }

    @Column('uuid', { name: "memberId" })
    memberId!: string;

    @Column('uuid', { name: "groupId" })
    groupId!: string;
    
    @ManyToOne(() => MemberDb, (member) => member.groupMembers)
    @JoinColumn({ name: "memberId" })
    member!: MemberDb

    @ManyToOne(() => GroupDb, (group) => group.groupMembers)
    @JoinColumn({ name: "memberId" })
    group!: GroupDb

    /* Relationship */
}