export type AuthenticationEnpoints = {
    loginUser: () => string;
}

const authenticationEndpoints: AuthenticationEnpoints = {
    //POST /users
    loginUser: (): string => "/users",
}

export default authenticationEndpoints;