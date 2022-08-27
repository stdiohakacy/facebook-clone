export abstract class Entity {
    id!: string;
    createdAt!: Date;
    createdBy!: string;
    updatedAt!: Date;
    updatedBy!: string;
    deletedAt?: Date;
    deletedBy!: string;
}