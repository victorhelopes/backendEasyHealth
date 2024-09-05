import { ObjectId } from 'mongodb';
import { IPatient } from '../../@types/patient';
import Patient from './dtos/patientModel'

export default {
    async getAll() {
        const users = await Patient.find()
        return users;
    },

    async getByCPF(cpf: string){
        const user = await Patient.findOne({ cpf: cpf}).populate('responsibles');
        return user;
    },
    
    async createPatient({ ...props }: IPatient) {
        let responsibles: ObjectId[] = []

        if(props.responsibles){
            await Promise.all(props.responsibles.map(async (responsibleInfo)=>{
                const user = await this.getByCPF(responsibleInfo.cpf)
                    if(user) responsibles.push(user._id)
                    else{
                        const patientResponsible = await Patient.create({
                        ...responsibleInfo
                    })
                        responsibles.push(patientResponsible._id)
                        return patientResponsible
                    }
            }))
        }

        const user = await this.getByCPF(props.cpf)

        if(user){
            return user;
        }

        const result = await Patient.create({
            ...props,
            responsibles: responsibles,
        });
        return result;
    },

    async updatePatient({ data, _id}: {data: IPatient, _id: string}) {
        const result = await Patient.updateOne({ _id: _id}, data)

        if(data.responsibles){
            await Promise.all(data.responsibles.map(async (responsibleInfo)=>{
                const patientResponsible = await Patient.updateOne({_id: responsibleInfo._id},{
                    ...responsibleInfo
                });
                return patientResponsible;
            }))
        }

        return result;
    },

    async deletePatient(_id: {_id: string}){
        await Patient.updateMany(
            { responsibles: _id },
            { $pullAll: {responsibles: [_id]}},
            {multi: true},
        );
        const result = await Patient.findByIdAndDelete(_id)
        return result;
    }
}