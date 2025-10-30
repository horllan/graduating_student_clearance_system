import { InputType, Field, ObjectType, ID } from "type-graphql"
import { UserType } from "./userType.js"
import shortid from "shortid";

@ObjectType()
export class OfficialType extends UserType {

    /**
     * Official that are responsible for clearing the students
     */
    @Field(type => String)
    staffId!: string;

    @Field(type => String)
    office!: string;

    @Field(type => [String!])
    clearedStudentsId!: string

    constructor(init: OfficialType) {
        super(init);
        Object.assign(this, init)
    }
}

@InputType()
export class OfficialInputType {

    @Field(type => String)
    facultyId!: string;

    @Field(type => String)
    departmentId!: string;

    @Field(type => Boolean)
    clearanceStatus!: boolean;

    @Field(type => String)
    matricNumber!: string;

    @Field(type => Boolean)
    eligibilityStatus!: boolean;

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
    readonly role: string = "OFFICIAL";

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