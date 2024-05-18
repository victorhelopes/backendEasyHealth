import { IPatient } from '../../@types/patient';
import Patient from './dtos/patientModel'

export default {
    async getAll() {
        const users = await Patient.find();
        return users;
    },
    
    async createPatient({ ...props }: IPatient) {
        const result = await Patient.create({
            name: props.name,
            lastName: props.lastName,
            telephone: props.telephone,
            email: props.email,
            birthDate: props.birthDate,
            gender: props.gender,
            disorder: props.disorder,
            maritalStatus: props.maritalStatus || '',
            jobTitle: props.jobTitle || '',
            responsible: props.responsible || [],
            address: props.address || null,
        });
        return result;
    },
}