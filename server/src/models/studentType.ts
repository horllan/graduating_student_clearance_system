import { ObjectType, Field, InputType, ID } from "type-graphql"
import { UserType } from "./userType.js";
import shortid from "shortid";

@ObjectType()
export class StudentType extends UserType {

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

    constructor(init: StudentType) {
        super(init);
        Object.assign(this, init);
    }
}

@InputType()
export class StudentInputType {

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
    readonly role: string = "STUDENT";

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