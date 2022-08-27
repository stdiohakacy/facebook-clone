import { Person } from "./Person";
import { Profile } from "./Profile";

export class Member extends Person {
    dateOfMemberShip?: Date;

    /* Relationship */
    
    profile!: Profile
}