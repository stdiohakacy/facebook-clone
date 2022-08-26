import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { DbEntity } from "../infras/DbEntity";
import { Education } from "../domain/Education";
import { ProfileDb } from "./ProfileDb";

@Entity("educations")
export class EducationDb extends DbEntity<Education> {
    constructor() { super(Education); }

    @Column('varchar', { name: "school" })
    school!: string;

    @Column('varchar', { name: "degree" })
    degree!: string;

    @Column('varchar', { name: "fromYear" })
    fromYear!: string;

    @Column('varchar', { name: "toYear" })
    toYear!: string;

    @Column('varchar', { name: "description" })
    description!: string;

    /* Relationship */

    @ManyToOne(() => ProfileDb, (profile) => profile.educations)
    @JoinColumn({ name: "profileId" })
    profile?: ProfileDb

    override toEntity(): Education {
        const entity = super.toEntity();

        entity.school = this.school;
        entity.degree = this.degree;
        entity.fromYear = this.fromYear;
        entity.toYear = this.toYear;
        entity.description = this.description;
        
        /* Relationship */

        if (entity.profile) {
            entity.profile = this.profile;
        }

        return entity;
    }

    override fromEntity(entity: Education): void {
        super.fromEntity(entity);

        this.school = entity.school;
        this.degree = entity.degree;
        this.fromYear = entity.fromYear;
        this.toYear = entity.toYear;
        this.description = entity.description;
    }
}