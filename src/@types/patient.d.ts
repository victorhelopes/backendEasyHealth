import { IAddress } from "./address";

export interface IPatient {
    _id: string;
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
    responsibles?: IPatient[],
}