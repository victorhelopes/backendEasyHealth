import { IAddress } from "./address";

export interface IPatient {
    name: string,
    lastName: string,
    telephone: string,
    email: string,
    birthDate: string,
    gender: string,
    disorder: string,
    maritalStatus?: string,
    jobTitle?: string,
    address?: IAddress,
    responsible?: IPatient[],
}