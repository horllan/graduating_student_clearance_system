import { ObjectType, Field, ID } from "type-graphql"
import shortid from "shortid";

@ObjectType()
export abstract class UserType {
    @Field(type => ID)
    id!: string;

    @Field()
    firstName!: string;

    @Field()
    lastName!: string;

    @Field()
    otherName?: string;

    @Field()
    email?: string;

    @Field()
    readonly role!: string;

    @Field()
    password?: string;

    @Field()
    readonly createdAt: Date;

    @Field()
    updatedAt: Date;

    constructor(init: Partial<UserType>) {
        Object.assign(this, init);
        this.id = shortid.generate();
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}
