import { Component } from "@angular/core";
import { MessageService } from "./message.service";
import { Message } from "./message.model";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})

export class MessageInputComponent {
    constructor(private messageService: MessageService){}

    onSubmit(form: NgForm) {
        const message = new Message(form.value.content, 'Tim');
        this.messageService.addMessage(message)
            .subscribe(
                //3 callback function arguments to correspond to cases
                //success case
                data => console.log(data),
                //error case
                error => console.error(error),
                //we won't use the third argument bc we know only 1 message is being posted

            );
        form.resetForm();
    }
}