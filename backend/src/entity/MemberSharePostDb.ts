import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { DbEntity } from "../infras/DbEntity";
import { MemberDb } from "./MemberDb";
import { PostDb } from "./PostDb";
import { MemberSharePost } from "../domain/MemberSharePost";

@Entity("member_share_post")
export class MemberSharePostDb extends DbEntity<MemberSharePost> {
    constructor() { super(MemberSharePost); }

    @Column('uuid', { name: "memberId" })
    memberId!: string;

    @Column('uuid', { name: "postId" })
    postId!: string;

    /* Relationship */
    
    @ManyToOne(() => MemberDb, (member) => member.memberSharePosts)
    @JoinColumn({ name: "memberId" })
    member!: MemberDb

    @ManyToOne(() => PostDb, (post) => post.memberSharePosts)
    @JoinColumn({ name: "postId" })
    post!: PostDb
}