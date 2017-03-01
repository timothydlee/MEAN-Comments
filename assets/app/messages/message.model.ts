export class Message {
    content: string;
    username: string;
    messageId?: string;
    userId?: string;

    //TypeScript default constructor to initialize the fields.
    constructor(content: string, username: string, messageId?: string, userId?: string) {
        this.content = content;
        this.username = username;
        this.messageId = messageId;
        this.userId = userId;
    }
}