import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { DbEntity } from "../infras/DbEntity";
import { Comment } from "../domain/Comment";
import { PostDb } from "./PostDb";
import { MemberDb } from "./MemberDb";

@Entity("comments")
export class CommentDb extends DbEntity<Comment> {
    constructor() { super(Comment); }

    @Column('varchar', { name: "text" })
    text!: string;

    @Column("integer", { name: "totalLikes" })
    totalLikes!: number;

    @Column('uuid', { name: "postId" })
    postId!: string;

    @Column('uuid', { name: "memberId" })
    memberId!: string;

    /* Relationship */

    @ManyToOne(() => PostDb, (post) => post.comments)
    @JoinColumn({ name: "postId" })
    post?: PostDb

    @ManyToOne(() => MemberDb, (member) => member.comments)
    @JoinColumn({ name: "memberId" })
    member?: MemberDb

    /* Relationship */
    override toEntity(): Comment {
        const entity = super.toEntity();

        entity.text = this.text;
        entity.totalLikes = this.totalLikes;

        /* Relationship */

        return entity;
    }

    override fromEntity(entity: Comment): void {
        super.fromEntity(entity);
        
        this.text = entity.text;
        this.totalLikes = entity.totalLikes;
    }
}