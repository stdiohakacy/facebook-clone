import { Entity } from "typeorm";
import { Admin } from "../domain/Admin";
import { PersonBaseDb } from "./PersonDb";

@Entity("admin")
export class AdminDb extends PersonBaseDb<Admin> {
    constructor() { super(Admin); }
}