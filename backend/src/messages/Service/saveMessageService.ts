import { AppDataSource } from "../../utils/databaseConnector";
import { MessagesEntitySchema } from "../Data";
import { saveMessageRequest, SaveMessageService, messageResponse } from "../Domain";


export const saveMessageService: SaveMessageService = async ({
    user_id,
    group_id,
    content,
    message_time}
:Readonly<saveMessageRequest>):Promise<messageResponse> => {

    const messageRepository = AppDataSource.getRepository(MessagesEntitySchema)
    console.log("Save request recieved by service for Message in group", group_id);

    const newMessage = messageRepository.create({ user_id,
    group_id,
    content,
    message_time });
    return await messageRepository.save(newMessage);

}