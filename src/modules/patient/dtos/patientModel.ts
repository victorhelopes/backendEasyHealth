import mongoose, { Schema } from 'mongoose';

const type = mongoose.Schema.Types;

const patientSchema = new mongoose.Schema({
    cpf: { 
        type: type.String, 
        required: true, 
        unique: true },
    name: {
        type: type.String,
        required: true,
    },
    lastName: {
        type: type.String,
        required: true,        
    },
    telephone: {
        type: type.String,
        required: true
    },
    email: {
        type: type.String,
    },
    birthDate: {
        type: type.Date,
        required: true,
    },
    gender: {
        type: type.String,
        required: true,
    },
    maritalStatus: {
        type: type.String,
    },
    jobTitle: {
        type: type.String,
    },
    disorder: {
        type: type.String,
    },
    address: {
        type: {
            city: {
            type: type.String,
            required: true,
            },
            state: {
                type: type.String,
                required: true,
            },
            number: {
                type: type.String,
                required: true,
            },
            street: {
                type: type.String,
                required: true,
            },
            cep: {
                type: type.String,
                required: true,
            },
            complement: {
                type: type.String,
            },
        }
    },
    responsibles: [{
        type: Schema.Types.ObjectId, 
        ref: 'Patient',
    }]
},{
    timestamps: true 
})

export default mongoose.model('Patient', patientSchema);
