import { Entity } from "./Entity";
import { Profile } from "./Profile";

export class Work extends Entity {
    title!: string;
    company!: string;
    location!: string;
    fromDate!: Date;
    toDate!: Date;
    description!: string;

    /* Relationship */

    profile?: Profile
}