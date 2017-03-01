import { Component, Input } from "@angular/core";
import { Message } from "./message.model";

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
}