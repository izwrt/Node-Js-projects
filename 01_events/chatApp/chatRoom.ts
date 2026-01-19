import { EventEmitter } from "node:events";

class ChatRoom extends EventEmitter {
    users: Set<string>
    constructor() {
        super();
        this.users = new Set<string>();
    }

    join(user: string) {
        this.users.add(user);
        this.emit('join', user)
    }

    sendMessage(user:string, message:string){
        if(this.users.has(user)) {
            this.emit('message', user, message)
        }

        else{
            console.log(`${user} is not in chat`)
        }
    }

    leave(user: string){
        if(this.users.has(user)){
            this.users.delete(user);
            this.emit('leave', user);
        }

        else{
            console.log(`${user} is not available`);
        } 
    }
}

export default ChatRoom;

