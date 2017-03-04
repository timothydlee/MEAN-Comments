import { Component, Input } from "@angular/core";
import { Message } from "./message.model";
import { MessageService } from "./message.service";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;;
            font-size: 12px;
            width: 80%;
        }
        
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;        
        }
    `]
})
export class MessageComponent {
    //Property binding - 'message' can be anything. "Message" is the front end model referenced up top (line 2)
    //@Input() is function of angular core which allows us to reference properties passed down to this component from the parent component (app.component.html)
    @Input() message: Message;

    //EventEmitter is a generics (a feature that allows you to create classes that can use multiple types
    //EventEmitter doesn't care which type it is. Taking @Output out because we want to actually save things into the database now
    // @Output() editClicked = new EventEmitter<string>();

    constructor(private messageService: MessageService) {}

    onEdit() {
        this.messageService.editMessage(this.message);
    }

    onDelete() {
        this.messageService.deleteMessage(this.message)
            .subscribe(
                result => console.log(result)
            );
    }

    belongsToUser() {
        return localStorage.getItem('userId') === this.message.userId;
    }
}