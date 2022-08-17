import { AccountStatus } from "../types/AccountStatus";


export abstract class Account {
    password!: string;
    accountStatus!: AccountStatus;
    abstract resetPassword(): boolean;
}