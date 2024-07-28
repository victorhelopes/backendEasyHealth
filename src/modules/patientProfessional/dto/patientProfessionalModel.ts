import mongoose from 'mongoose';

const type = mongoose.Schema.Types;

const patientProfessionalSchema = new mongoose.Schema({
    patient: {
        type: type.ObjectId, 
        ref: 'Patient',
    },
    professional: {
        type: type.ObjectId, 
        ref: 'Professional',
    },
    isActive: {
        type: type.Boolean,
        required: true
    }
},{
    timestamps: true 
})

export default mongoose.model('PatientProfessional', patientProfessionalSchema);
