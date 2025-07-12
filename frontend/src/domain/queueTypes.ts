export type OfflineAction = {
  id: string; 
  type: "SEND_MESSAGE" | "JOIN_GROUP" | "CREATE_GROUP" | "LOGIN"  
  payload: any; 
  createdAt: number; 
};


export type GroupMessages = {
  groupId: string; 
  userId: string;  
  messageId: string; 
  username: string;
  text: string; 
  createdAt: Date;
};
