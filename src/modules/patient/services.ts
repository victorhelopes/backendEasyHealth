import Patient from './dtos/patientModel'

interface IAddress {
    city: string,
    state: string,
    number: string,
    street: string,
    cep: string,
    complement: string,
}

interface IUser {
    name: string,
    lastName: string,
    telephone: string,
    email: string,
    bithDate: string,
    gender: string,
    maritalStatus: string,
    disorder: string,
    address: IAddress,
    jobTitle?: string,
    responsible?: IUser,
}

export default {
    async getAll() {
        const users = await Patient.find();
        return users;
    },
}