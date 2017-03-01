import { Message } from "./message.model";

//Central messages array that I will use to store and manage all my messages in my front end
export class MessageService {
    private messages: Message[] = [];

    addMessage(message) {
        this.messages.push(message);
        console.log(this.messages);
    }

    getMessage() {
        return this.messages;
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}