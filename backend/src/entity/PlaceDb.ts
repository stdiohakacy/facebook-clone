import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { DbEntity } from "../infras/DbEntity";
import { Work } from "../domain/Work";
import { ProfileDb } from "./ProfileDb";
import { Place } from "../domain/Place";

@Entity("places")
export class PlaceDb extends DbEntity<Place> {
    constructor() { super(Place); }

    @Column('varchar', { name: "name" })
    name!: string;

    @Column('uuid', { name: "profileId" })
    profileId!: string;

    /* Relationship */

    @ManyToOne(() => ProfileDb, (profile) => profile.works)
    @JoinColumn({ name: "profileId" })
    profile!: ProfileDb

    override toEntity(): Place {
        const entity = super.toEntity();
        
        entity.name = this.name;

        /* Relationship */

        if (entity.profile) {
            entity.profile = this.profile;
        }

        return entity;
    }

    override fromEntity(entity: Place): void {
        super.fromEntity(entity);

        this.name = entity.name;
    }
}