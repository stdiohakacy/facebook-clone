import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { DbEntity } from "../infras/DbEntity";
import { ConnectionInvitation } from "../domain/ConnectionInvitation";
import { MemberDb } from "./MemberDb";
import { ConnectionInvitationStatus } from "../constants/enum/ConnectionInvitationStatus";

@Entity("connection_invitation")
export class ConnectionInvitationDb extends DbEntity<ConnectionInvitation> {
    constructor() { super(ConnectionInvitation); }

    @Column('enum', { name: "status", enum: ConnectionInvitationStatus, default: ConnectionInvitationStatus.Pending })
    status!: ConnectionInvitationStatus;

    @Column('uuid', { name: "memberId" })
    memberId!: string;

    /* Relationship */

    @ManyToOne(() => MemberDb, (member) => member.connectionInvitations)
    @JoinColumn({ name: "memberId" })
    memberInvited?: MemberDb
}