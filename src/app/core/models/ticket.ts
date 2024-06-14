import { TicketI } from "../interfaces/ticket-i";

export class Ticket implements TicketI{

    id!: number;
    title!: string;
    description!: string;

    constructor(obj?: Partial<Ticket>){
        if(obj){
            Object.assign(this, obj);
        }
    }

}
