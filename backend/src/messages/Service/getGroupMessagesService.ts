import { AppDataSource } from "../../utils/databaseConnector";
import { MessagesEntitySchema } from "../Data";
import {  getGroupMessagesRequest, GetGroupMessagesService, messageResponse } from "../Domain";


export const getGroupMessagesService: GetGroupMessagesService = async ({group_id}:getGroupMessagesRequest):Promise<messageResponse[]> => {

    const messagesRepository = AppDataSource.getRepository(MessagesEntitySchema)
    console.log("Get request recieved by service for Messages");
    
    const messages = await messagesRepository.find({
        where:{group_id:group_id},
        relations: ['user'],
        order: { message_time: "DESC" }
    });
    return messages as messageResponse[];

}