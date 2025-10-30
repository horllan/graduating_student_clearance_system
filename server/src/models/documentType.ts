import shortid from "shortid"
import { ObjectType, Field, ID } from "type-graphql"

@ObjectType()
export class DocumentType {


    @Field(type => ID)
    id: string

    @Field()
    alumniReceipt!: string

    @Field()
    gownReceipt!: string

    @Field()
    seetReceipt?: string

    @Field()
    certificateReceipt!: string

    @Field()
    proceedingsReceipt!: string


    /**
     * Document of payments
     */
    constructor(init: DocumentType) {
        Object.assign(this, init)
        this.id = shortid();
    }
}