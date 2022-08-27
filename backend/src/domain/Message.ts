import { Entity } from "./Entity";
import { Member } from "./Member";

export class Message extends Entity {
    sendTo!: Member[];
    messageBody!: string;

    /* Relationship */

    member?: Member;
}