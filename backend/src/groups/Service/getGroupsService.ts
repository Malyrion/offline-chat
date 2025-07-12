import { AppDataSource } from "../../utils/databaseConnector";
import { GroupEntitySchema } from "../Data";
import {  GetGroupsService, groupResponse } from "../Domain";


export const getGroupsService: GetGroupsService = async ():Promise<groupResponse[]> => {

    const GroupRepository = AppDataSource.getRepository(GroupEntitySchema)
    console.log("Get request recieved by service for Groups");

    const groups = await GroupRepository.find({ relations: ['members'] });
    return groups as groupResponse[];

}