import { AppDataSource } from "../../utils/databaseConnector";
import { UserEntitySchema } from "../Data";
import { saveUserRequest, SaveUserService, userResponse } from "../Domain";


export const saveUserService: SaveUserService = async ({ username }:Readonly<saveUserRequest>):Promise<userResponse> => {
    const userRepository = AppDataSource.getRepository(UserEntitySchema)
    console.log("Save request recieved by service for user with username:", username);

    const existingUser = await userRepository.findOne({ where: { username: username } });

    if (existingUser) {
        console.log("Found existing user with id", existingUser.id);
        return existingUser as userResponse;
    } else if(username !==undefined && username !== null && username !== "") {
            const user = userRepository.create({ username: username});
            console.log("New user created with id", user.id);
            return await userRepository.save(user);
        }else{
            return {} as userResponse; 
        }
}