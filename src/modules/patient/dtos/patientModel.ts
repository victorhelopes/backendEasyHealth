import mongoose, { Schema } from 'mongoose';

const type = mongoose.Schema.Types;

const patientSchema = new mongoose.Schema({
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
        required: true,
    },
    bithDate: {
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
            required: true,
        },
    },
    responsible: [{
        type: Schema.Types.ObjectId, 
        ref: 'Patient', 
        required: true
    }]
})

export default mongoose.model('Patient', patientSchema);
