import { Entity } from "./Entity";
import { Profile } from "./Profile";

export class Education extends Entity {
    school!: string;
    degree!: string;
    fromYear!: string;
    toYear!: string;
    description!: string;

    /* Relationship */

    profile?: Profile
}