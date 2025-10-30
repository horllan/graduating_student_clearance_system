import shortid from "shortid"
import { ObjectType, Field, ID } from "type-graphql"
import { StudentType } from "./studentType.js"
import { OfficialType } from "./officialType.js"


@ObjectType()
export class ClearanceType {

    @Field(type => ID)
    id: string

    @Field(type => String)
    student!: StudentType

    @Field()
    bursaryOfficial!: OfficialType

    @Field()
    examsRecords!: OfficialType

    @Field()
    studentAffiarsOfficial!: OfficialType

    @Field()
    alunmiOfficial!: OfficialType

    @Field()
    hod!: OfficialType

    @Field()
    sportOfficial!: OfficialType

    @Field()
    hostelOfficial!: OfficialType


    /**
     * Clearance Document with all fields
     */
    constructor(init: ClearanceType) {
        Object.assign(this, init)
        this.id = shortid();
    }

}