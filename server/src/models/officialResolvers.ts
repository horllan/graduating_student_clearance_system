import { Arg, ID, Query } from "type-graphql";
import { getOfficial, getOfficials } from "../repositories/officialRepository.js";
import { OfficialType } from "./officialType.js";

export class OfficialResolver {
    @Query(returns => [OfficialType!])
    public async getOfficials(): Promise<OfficialType[]> {
        return await getOfficials();
    }

    @Query(returns => OfficialType, { nullable: true })
    public async getOfficial(@Arg("id", () => ID) id: string): Promise<OfficialType | null> {
        return await getOfficial(id);
    }

}