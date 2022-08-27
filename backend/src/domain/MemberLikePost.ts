import { Entity } from "./Entity";

export class MemberLikePost extends Entity {
    memberId!: string;
    postId!: string;
}