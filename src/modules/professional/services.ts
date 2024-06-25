import Professional from './dtos/professionalModel'

export default {
    async getAll() {
        const professionals = await Professional.find()
        return professionals;
    },
}