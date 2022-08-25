import { Column, Entity, OneToOne } from "typeorm";
import { DbEntity } from "../infras/DbEntity";
import { Account } from "../domain/Account";
import { PersonDb } from "./PersonDb";

@Entity("account")
export class AccountDb extends DbEntity<Account> {
    @Column('varchar', { name: "status" })
    status!: string;

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