import bcrypt from 'bcryptjs'

import { IProfessional } from '../../@types/professional';
import Professional from './dtos/professionalModel'

export default {
    async getAll() {
        const professionals = await Professional.find()
        return professionals;
    },

    async createProfessional({ ...props }: IProfessional){
        const salt = await bcrypt.genSalt(10);        
        props.password = await bcrypt.hash(props.password, salt);
        props.isActive = true
        const result = await Professional.create({
            ...props,
        });
        return result;
    },

    async desactiveProfessional(_id: string){
        const result = await Professional.updateOne({_id}, {isActive: false})
        return result;
    }
}