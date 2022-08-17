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

    @Column('varchar', { name: "password" })
    password!: string;

    @Column('varchar', { name: "profilePicture" })
    profilePicture!: string;

    @Column('varchar', { name: "coverPhoto" })
    coverPhoto!: string;

    @Column('varchar', { name: "gender" })
    gender!: string;

    @Column('varchar', { name: "role" })
    role!: string;

    /* Handlers */

    override toEntity(): TEntity {
        const entity = super.toEntity();

        entity.name = this.name;
        entity.email = this.email;
        entity.phone = this.phone;
        entity.address.streetAddress = this.streetAddress;
        entity.address.city = this.city;
        entity.address.state = this.state;
        entity.address.zipCode = this.zipCode;
        entity.address.country = this.country;
        entity.member!.dateOfMembership = this.dateOfMembership!;
        entity.account.accountStatus = this.accountStatus;
        entity.account.password = this.password;
        entity.profile.profilePicture = this.profilePicture;
        entity.profile.coverPhoto = this.coverPhoto;
        entity.profile.gender = this.gender;
        entity.role = this.role;

        /* Relationship */

        return entity;
    }

    override fromEntity(entity: TEntity): void {
        super.fromEntity(entity);

        this.name = entity.name;
        this.email = entity.email;
        this.phone = entity.phone;
        this.streetAddress = entity.address.streetAddress;
        this.city = entity.address.city;
        this.state = entity.address.state;
        this.zipCode = entity.address.zipCode;
        this.country = entity.address.country;
        this.dateOfMembership = entity?.member?.dateOfMembership;
        this.accountStatus = entity.account.accountStatus;
        this.password = entity.account.password;
        this.profilePicture = entity.profile.profilePicture;
        this.coverPhoto = entity.profile.coverPhoto;
        this.gender = entity.profile.gender;
        this.role = entity.role;
    }
}