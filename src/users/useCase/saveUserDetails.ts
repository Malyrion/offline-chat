import { SaveUserDetailsType } from "../Domain";

export const saveUserDetails = async({
    saveUserService,
    parameters,
    responseHandler
}: SaveUserDetailsType): Promise<void> => {
    console.log("New user save details request recieved")   
    try{
        const newUser = await saveUserService(parameters);
        return responseHandler({parsedResponse:{user: newUser}});
    }catch (error) {
        responseHandler({error: error as Error});
    }
}