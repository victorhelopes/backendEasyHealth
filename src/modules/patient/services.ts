import { ObjectId } from 'mongodb';
import { IPatient } from '../../@types/patient';
import Patient from './dtos/patientModel'

export default {
    async getAll() {
        const users = await Patient.find();
        return users;
    },
    
    async createPatient({ ...props }: IPatient) {
        let responsibles: ObjectId[] = []

        if(props.responsible){
            await Promise.all(props.responsible.map(async (responsibleInfo)=>{
                const patientResponsible = await Patient.create({
                    ...responsibleInfo
                })
                responsibles.push(patientResponsible._id)
                return patientResponsible
            }))
        }

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
            responsible: responsibles,
            address: props.address
        });
        return result;
    },

    async updatePatient( { data, _id}: {data: IPatient, _id: string}) {
        const result = await Patient.updateOne({ _id: _id}, data)

        if(data.responsible){
            await Promise.all(data.responsible.map(async (responsibleInfo)=>{
                const patientResponsible = await Patient.updateOne({_id: responsibleInfo._id},{
                    ...responsibleInfo
                });
                return patientResponsible;
            }))
        }

        return result;
    }
}