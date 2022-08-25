import { Column, Entity, OneToOne } from "typeorm";
import { DbEntity } from "../infras/DbEntity";
import { Profile } from "../domain/Profile";
import { GenderType } from "../constants/enum/GenderType";
import { MemberDb } from "./MemberDb";

@Entity("profile")
export class ProfileDb extends DbEntity<Profile> {
    constructor() {
        super(Profile);
    }

    @Column('varchar', { name: "profilePicture", nullable: true})
    profilePicture?: string;

    @Column('varchar', { name: "coverPhoto", nullable: true})
    coverPhoto?: string;

    @Column('enum', { name: "gender", enum: GenderType })
    gender!: GenderType;

    /* Relationship */

    @OneToOne(() => MemberDb, (member) => member.profile)
    member!: MemberDb

    override toEntity(): Profile {
        const entity = super.toEntity();

        entity.profilePicture = this.profilePicture;
        entity.coverPhoto = this.coverPhoto;
        entity.gender = this.gender;
        if(this.member) {
            entity.member = this.member;
        }

        /* Relationship */

        return entity;
    }

    override fromEntity(entity: Profile): void {
        super.fromEntity(entity);

        this.profilePicture = entity.profilePicture;
        this.coverPhoto = entity.coverPhoto;
        this.gender = entity.gender;
    }
}