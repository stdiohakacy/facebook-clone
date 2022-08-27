import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { DbEntity } from "../infras/DbEntity";
import { MemberDb } from "./MemberDb";
import { MemberLikePost } from "../domain/MemberLikePost";
import { PostDb } from "./PostDb";

@Entity("member_like_post")
export class MemberLikePostDb extends DbEntity<MemberLikePost> {
    constructor() { super(MemberLikePost); }

    @Column('uuid', { name: "memberId" })
    memberId!: string;

    @Column('uuid', { name: "postId" })
    postId!: string;

    /* Relationship */
    
    @ManyToOne(() => MemberDb, (member) => member.memberLikePosts)
    @JoinColumn({ name: "memberId" })
    member!: MemberDb

    @ManyToOne(() => PostDb, (post) => post.memberLikePosts)
    @JoinColumn({ name: "postId" })
    post!: PostDb
}