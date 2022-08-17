import { AccountStatus } from "./AccountStatus";

export interface IAccount {
    password: string;
    accountStatus: AccountStatus;
    resetPassword(): boolean;
}