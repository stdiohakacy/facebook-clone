import { Column, Entity, ManyToOne, OneToOne } from "typeorm";
import { DbEntity } from "../infras/DbEntity";
import { Work } from "../domain/Work";
import { ProfileDb } from "./ProfileDb";

@Entity("works")
export class WorkDb extends DbEntity<Work> {
    constructor() { super(Work); }

    @Column('varchar', { name: "title" })
    title!: string;

    @Column('varchar', { name: "company" })
    company!: string;

    @Column('varchar', { name: "location" })
    location!: string;

    @Column("timestamptz", { name: "fromDate" })
    fromDate!: Date;

    @Column('timestamptz', { name: "toDate" })
    toDate!: Date;

    @Column('varchar', { name: "description" })
    description!: string;

    /* Relationship */

    @ManyToOne(() => ProfileDb, (profile) => profile.works)
    profile!: ProfileDb

    override toEntity(): Work {
        const entity = super.toEntity();
        
        entity.title = this.title;
        entity.company = this.company;
        entity.location = this.location;
        entity.fromDate = this.fromDate;
        entity.toDate = this.toDate;
        entity.description = this.description;

        /* Relationship */

        if (entity.profile) {
            entity.profile = this.profile;
        }

        return entity;
    }

    override fromEntity(entity: Work): void {
        super.fromEntity(entity);

        this.title = entity.title;
        this.company = entity.company;
        this.location = entity.location;
        this.fromDate = entity.fromDate;
        this.toDate = entity.toDate;
        this.description = entity.description;
    }
}