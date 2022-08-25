import { GenderType } from "../constants/enum/GenderType";
import { Entity } from "./Entity";
import { Member } from "./Member";

export class Profile extends Entity {
    profilePicture?: string;
    coverPhoto?: string;
    gender!: GenderType;
    member?: Member;
}