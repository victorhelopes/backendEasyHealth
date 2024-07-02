import { IGender } from "./gender";

export interface IProfessional extends IGender{
    name: string,
    lastName: string,
    email: string,
    password:string,
    telephone: string
    isActive: boolean,
}