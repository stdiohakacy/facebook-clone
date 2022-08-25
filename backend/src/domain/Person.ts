import { Account } from "./Account";
import { Entity } from "./Entity";

export abstract class Person extends Entity {
    name!: string;
    email!: string;
    phone!: string;

    /* Relationship */

    account!: Account;
}