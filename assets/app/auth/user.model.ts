export class User {
    //By using ?, it denotes optional fields. Also, by using "public", it is the equivalent to the message.model.ts setup
    constructor(public email: string,
                public password; string,
                public firstName?: string,
                public lastName?: string) {}
}