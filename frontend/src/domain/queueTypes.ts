export type OfflineAction = {
  id: string; 
  type: "SEND_MESSAGE" | "JOIN_GROUP" | "CREATE_GROUP" | "LOGIN"  
  payload: any; 
  createdAt: number; 
};
