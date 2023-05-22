import { Task } from "../task.model";

export interface Event {
    id: string,
    name: string,
    description: string,
    date: string,
    street: string,
    city: string,
    state: string,
    zipcode: number,
    tasks: Task[]
}