import { AppDataSource } from "../../utils/databaseConnector";
import { GroupMembersEntitySchema } from "../Data";
import { saveGroupMemberRequest, SaveGroupMemberService, groupMembersResponse } from "../Domain";


export const saveGroupMemberService: SaveGroupMemberService = async ({ group_id,user_id,join_date }:Readonly<saveGroupMemberRequest>):Promise<groupMembersResponse> => {

    const GroupMemberRepository = AppDataSource.getRepository(GroupMembersEntitySchema)
    console.log(`Save request recieved by service for Group Member with userId ${user_id} and groupId ${group_id}`);

    const newGroupMember = GroupMemberRepository.create({ group_id,user_id,join_date });
    return await GroupMemberRepository.save(newGroupMember);

}