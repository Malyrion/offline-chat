import { AppDataSource } from "../../utils/databaseConnector";
import { GroupEntitySchema } from "../Data";
import { saveGroupRequest, SaveGroupService, groupResponse } from "../Domain";


export const saveGroupService: SaveGroupService = async ({  group_name,created_by }:Readonly<saveGroupRequest>):Promise<groupResponse> => {

    const GroupRepository = AppDataSource.getRepository(GroupEntitySchema)
    console.log("Save request recieved by service for Group with group name:", group_name);

    const newGroup = GroupRepository.create({ group_name, created_by });
    return await GroupRepository.save(newGroup);

}