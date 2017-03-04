import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Message } from "./message.model";
import { ErrorService } from "../errors/error.service";
//In order to inject a service into a service, in this case Http, the class must have metadata which requires a decorator. Since we don't want to turn this Service into a component by using @Component, @Injectable is a decorator designed specifically to address the metadata requirement
@Injectable()

//Central messages array that I will use to store and manage all my messages in my front end
export class MessageService {
    private messages: Message[] = [];
    messageIsEdit = new EventEmitter<Message>();

    constructor(private http: Http, private errorService: ErrorService) {}

    addMessage(message) {
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? `?token=${localStorage.getItem('token')}`
            : '';
        //This does not send a request - only sets up an observable
        //Don't subscribe here - only subscribe in the component that is trying to access the data
        return this.http.post(`http://localhost:3000/message${token}`, body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const message = new Message(
                    result.obj.content,
                    result.obj.user.firstName,
                    result.obj._id,
                    result.obj.user._id);
                this.messages.push(message);
                return message;
            })
            .catch((err: Response) => {
                this.errorService.handleError(err.json());
                return Observable.throw(err.json());
            });
    }

    getMessages() {
        return this.http.get('http://localhost:3000/message')
            .map((response: Response) => {
                const messages = response.json().obj;
                let transformedMessages: Message[] = [];
                for (let message of messages) {
                    transformedMessages.push(new Message(
                        message.content,
                        message.user.firstName,
                        message._id,
                        message.user._id)
                    );
                }
                this.messages = transformedMessages;
                return transformedMessages;
            })
            .catch((err: Response) => {
                this.errorService.handleError(err.json());
                return Observable.throw(err.json());
            });
    }

    editMessage(message: Message) {
        this.messageIsEdit.emit(message);
    }

    updateMessage(message: Message) {
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? `?token=${localStorage.getItem('token')}`
            : '';
        return this.http.patch(`http://localhost:3000/message/${message.messageId}${token}`, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((err: Response) => {
                this.errorService.handleError(err.json());
                return Observable.throw(err.json());
            });
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
        const token = localStorage.getItem('token')
            ? `?token=${localStorage.getItem('token')}`
            : '';
        return this.http.delete(`http://localhost:3000/message/${message.messageId}${token}`)
            .map((response: Response) => response.json())
            .catch((err: Response) => {
                this.errorService.handleError(err.json());
                return Observable.throw(err.json());
            });
    }
}