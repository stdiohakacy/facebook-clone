import { AccountStatus } from "../types/AccountStatus";
import { Entity } from "./Entity";

export class User extends Entity {
    name!: string;
    address!: string;
    email!: string;
    phone!: string;
    streetAddress!: string;
    city!: string;
    state!: string;
    zipCode!: string;
    country!: string;
    dateOfMembership?: string;
    accountStatus!: AccountStatus;
    role!: string;
}