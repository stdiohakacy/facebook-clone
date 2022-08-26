import { GenderType } from "../constants/enum/GenderType";
import { Education } from "./Education";
import { Entity } from "./Entity";
import { Member } from "./Member";
import { Work } from "./Work";

export class Profile extends Entity {
    profilePicture?: string;
    coverPhoto?: string;
    gender!: GenderType;

    /* Relationship */

    member?: Member;
    works!: Work[];
    educations!: Education[];
}