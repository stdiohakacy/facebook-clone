import { Comment } from "./Comment";
import { Entity } from "./Entity";

export class Post extends Entity {
    text!: string;
    totalLikes!: number;
    totalShares!: number;

    /* Relationship */
    comments!: Comment[]
}