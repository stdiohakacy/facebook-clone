import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { DbEntity } from "../infras/DbEntity";
import { Message } from "../domain/Message";
import { Member } from "../domain/Member";
import { MemberDb } from "./MemberDb";

@Entity("messages")
export class MessageDb extends DbEntity<Message> {
    constructor() { super(Message); }

    @Column('simple-array', { name: "sendTo" })
    sendTo!: Member[];

    @Column('varchar', { name: "messageBody" })
    messageBody!: string;

    @Column('uuid', { name: "memberId" })
    memberId!: string;

    /* Relationship */

    @ManyToOne(() => MemberDb, (member) => member.messages)
    @JoinColumn({ name: "memberId" })
    member?: MemberDb

    override toEntity(): Message {
        const entity = super.toEntity();
        
        entity.sendTo = this.sendTo;
        entity.messageBody = this.messageBody;
        
        /* Relationship */

        if (this.member) {
            entity.member = this.member;
        }

        return entity;
    }

    override fromEntity(entity: Message): void {
        super.fromEntity(entity);

        entity.sendTo = this.sendTo;
        entity.messageBody = this.messageBody;
    }
}