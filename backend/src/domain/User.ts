import { Address } from "../types/Address";
import { Account } from "./Account";
import { Entity } from "./Entity";
import { Member } from "./Member";
import { Profile } from "./Profile";

export class User extends Entity {
    name!: string;
    address!: Address;
    email!: string;
    phone!: string;
    role!: string;
    account!: Account;
    member?: Member;
    profile!: Profile;
}
