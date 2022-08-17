import { User } from "./User";

export abstract class Member extends User {
    dateOfMembership!:string;
    abstract sendMessage(): boolean;
    abstract createPost(): boolean;
    abstract sendConnectionInvitation(): boolean;
}