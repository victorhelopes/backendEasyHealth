import patientProfessionalModel from './dto/patientProfessionalModel';
import patientModel from '../patient/../patient/dtos/patientModel';
import { PatientProfessionalProps } from './controller';

export default {
    async getPatients(id: string) {
        const patients = await patientProfessionalModel.find({professional: id}).populate('patient')
        return patients;
    },

    async createPatientProfessional({ ...props }: PatientProfessionalProps){
        const patient = await patientModel.findOne().where({ cpf: props.patient })
        if (!patient) {
            throw new Error('Paciente não encontrado');
        }

        props.patient = patient.id

        const result = await patientProfessionalModel.create({
            ...props,
        });

        console.log(result)
        return result;
        
    },

    async desactiveRelation(_id: string){
        const result = await patientProfessionalModel.updateOne({_id}, {isActive: false})
        return result;
    },
    
    async activeRelation(_id: string){
        const result = await patientProfessionalModel.updateOne({_id}, {isActive: true})
        return result;
    }
}