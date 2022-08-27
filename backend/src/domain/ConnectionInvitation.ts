import { ConnectionInvitationStatus } from "../constants/enum/ConnectionInvitationStatus";
import { Entity } from "./Entity";
import { Member } from "./Member";

export class ConnectionInvitation extends Entity {
    status!: ConnectionInvitationStatus;

    /* Relationship */

    memberInvited!: Member;
}