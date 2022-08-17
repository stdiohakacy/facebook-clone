import { User } from "../domain/User";
import { UserBaseDb } from "../infras/UserBaseDb";
import { Entity } from "typeorm";

@Entity("user")
export class UserDb extends UserBaseDb<User> {}
