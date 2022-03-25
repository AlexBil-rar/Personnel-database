import mongoose from 'mongoose';
const StaffSchema = mongoose.Schema(
    {
    name: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true
    },
    isDirector: {
        type: Boolean,
        required: true,
        default: false
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    isBaker: {
        type: Boolean,
        required: true,
        default: false
    },
    isSeller: {
        type: Boolean,
        required: true,
        default: false
    },
    
}
)


const Staff = mongoose.model('staffs', StaffSchema)

export default Staff