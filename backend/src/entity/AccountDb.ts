import { Column, Entity, OneToOne } from "typeorm";
import { DbEntity } from "../infras/DbEntity";
import { Account } from "../domain/Account";
import { PersonDb } from "./PersonDb";
import { AccountStatus } from "../constants/enum/AccountStatus";

@Entity("account")
export class AccountDb extends DbEntity<Account> {
    constructor() { super(Account); }

    @Column('enum', { name: "status", enum: AccountStatus, default: AccountStatus.Disabled })
    status!: AccountStatus;

    @Column('varchar', { name: "password" })
    password!: string;

    @OneToOne(() => PersonDb, (person) => person.account)
    person!: PersonDb

    override toEntity(): Account {
        const entity = super.toEntity();

        entity.status = this.status;
        entity.password = this.password;

        /* Relationship */

        if(this.person) {
            entity.person = this.person.toEntity();
        }

        return entity;
    }

    override fromEntity(entity: Account): void {
        super.fromEntity(entity);

        this.status = entity.status;
        this.password = entity.password;
    }
}