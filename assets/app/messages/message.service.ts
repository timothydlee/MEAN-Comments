import { Http, Response, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Message } from "./message.model";
//In order to inject a service into a service, in this case Http, the class must have metadata which requires a decorator. Since we don't want to turn this Service into a component by using @Component, @Injectable is a decorator designed specifically to address the metadata requirement
@Injectable()

//Central messages array that I will use to store and manage all my messages in my front end
export class MessageService {
    private messages: Message[] = [];

    constructor(private http: Http) {}

    addMessage(message) {
        this.messages.push(message);
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        //This does not send a request - only sets up an observable
        //Don't subscribe here - only subscribe in the component that is trying to access the data
        return this.http.post('http://localhost:3000/message', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((err: Response) => Observable.throw(err.json()));
    }

    getMessages() {
        return this.http.get('http://localhost:3000/message')
            .map((response: Response) => {
                const messages = response.json().obj;
                let transformedMessages: Message[] = [];
                for (let message of messages) {
                    transformedMessages.push(new Message(message.content, message.id, 'Dummy', null))
                }
                this.messages = transformedMessages;
                return transformedMessages;
            })
            .catch((error: Response) =>  Observable.throw(error.json()));
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}