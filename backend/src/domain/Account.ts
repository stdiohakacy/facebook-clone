import { AccountStatus } from "../constants/enum/AccountStatus";
import { Entity } from "./Entity";
import { Person } from "./Person";

export class Account extends Entity {
    status!: AccountStatus;
    password!: string;
    /* Relationship */
    person?: Person;

    /* Handlers */

    // static validatePassword(password: string): void {
    //     const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()-_=+[{\]}\\|;:'",<.>/?]).{8,20}$/;
    //     if (!regExp.test(password)) {
    //       throw new LogicalError(MessageError.PARAM_LEN_AT_LEAST_AND_MAX_SPECIAL, { t: 'password' }, 6, 20);
    //     }
    // }
    
    // static hashPassword(password: string): string {
    //     return hashMD5(password, '$$');
    // }
}