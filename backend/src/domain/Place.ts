import { Entity } from "./Entity";
import { Profile } from "./Profile";

export class Place extends Entity {
    name!: string;

    /* Relationship */

    profile?: Profile
}