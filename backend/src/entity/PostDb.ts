import { Column, Entity, OneToMany } from "typeorm";
import { DbEntity } from "../infras/DbEntity";
import { Post } from "../domain/Post";
import { MemberLikePostDb } from "./MemberLikePostDb";
import { MemberSharePostDb } from "./MemberSharePostDb";

@Entity("posts")
export class PostDb extends DbEntity<Post> {
    constructor() { super(Post); }

    @Column('varchar', { name: "text" })
    text!: string;

    @Column('integer', { name: "totalLikes" })
    totalLikes!: number;

    @Column('integer', { name: "totalShares" })
    totalShares!: number;

    /* Relationship */

    @OneToMany(() => MemberLikePostDb, (memberLikePosts) => memberLikePosts.post)
    memberLikePosts?: MemberLikePostDb[]

    @OneToMany(() => MemberSharePostDb, (memberSharePosts) => memberSharePosts.post)
    memberSharePosts?: MemberSharePostDb[]
}