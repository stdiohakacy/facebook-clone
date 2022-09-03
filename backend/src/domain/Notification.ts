import { Entity } from "./Entity";

export abstract class Notification extends Entity {
    content!: string;
}