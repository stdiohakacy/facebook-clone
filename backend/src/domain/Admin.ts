import { User } from "./User";

export abstract class Admin extends User {
    abstract blockMember(): boolean;
    abstract unBlockMember(): boolean;
    abstract disablePage(): boolean;
    abstract enablePage(): boolean;
}