import { Component } from '@angular/core';
import { Message } from "./messages/message.model";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    messages: Message[] = [
        new Message('Some message', 'Tim'),
        new Message('Second message', 'Tim'),
        new Message('Something else', 'Tim')
    ];
}