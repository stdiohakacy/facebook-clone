import { DbEntity } from "./DbEntity";
import { User } from "../domain/User";
import { Column } from "typeorm";
import { AccountStatus } from "../types/AccountStatus";

export abstract class UserBaseDb<TEntity extends User> extends DbEntity<TEntity> {
    constructor(userType: { new (): TEntity } = User as any) {
        super(userType);
    }
    @Column('varchar', { name: "name" })
    name!: string;

    @Column('varchar', { name: "address" })
    address!: string;

    @Column('varchar', { name: "email" })
    email!: string;

    @Column('varchar', { name: "phone" })
    phone!: string;

    @Column('varchar', { name: "streetAddress" })
    streetAddress!: string;

    @Column('varchar', { name: "city" })
    city!: string;

    @Column('varchar', { name: "state" })
    state!: string;

    @Column('varchar', { name: "zipCode" })
    zipCode!: string;

    @Column('varchar', { name: "country" })
    country!: string;

    @Column('date', { name: "dateOfMembership", nullable: true })
    dateOfMembership?: string;

    @Column('enum', { name: "accountStatus", enum: AccountStatus })
    accountStatus!: AccountStatus;

    @Column('varchar', { name: "role" })
    role!: string;

    /* Handlers */

    override toEntity(): TEntity {
        const entity = super.toEntity();

        entity.name = this.name;
        entity.address = this.address;
        entity.email = this.email;
        entity.phone = this.phone;
        entity.streetAddress = this.streetAddress;
        entity.city = this.city;
        entity.state = this.state;
        entity.zipCode = this.zipCode;
        entity.country = this.country;
        entity.dateOfMembership = this.dateOfMembership;
        entity.accountStatus = this.accountStatus;
        entity.role = this.role;

        /* Relationship */

        return entity;
    }

    override fromEntity(entity: TEntity): void {
        super.fromEntity(entity);

        this.name = entity.name;
        this.address = entity.address;
        this.email = entity.email;
        this.phone = entity.phone;
        this.streetAddress = entity.streetAddress;
        this.city = entity.city;
        this.state = entity.state;
        this.zipCode = entity.zipCode;
        this.country = entity.country;
        this.dateOfMembership = entity.dateOfMembership;
        this.accountStatus = entity.accountStatus;
        this.role = entity.role;
    }
}