// const mongoose = require('mongoose')

// const ContactSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     subject: { type: String, required: true },
//     mobile: { type: String },
//     message: { type: String, required: true },
//     response: { type: Boolean, default: false },
//     reply: {
//         message: { type: String },
//     },
// }, { timestamps: true })

// module.exports = mongoose.model("Contact", ContactSchema)
















const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema(
    {
        name: { type: String, required: [true, 'Name is required'], trim: true, },
        email: {
            type: String, required: [true, 'Email is required'], unique: true, lowercase: true, trim: true,
            match: [
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                'Please enter a valid email address',
            ],
        },
        subject: { type: String, required: [true, 'Subject is required'], trim: true, },
        mobile: {
            type: String, trim: true, match: [/^\d{10,15}$/, 'Enter a valid mobile number'], // optional validation
        },
        message: { type: String, required: [true, 'Message is required'], trim: true, },
        response: { type: Boolean, default: false, },
        reply: {
            message: { type: String, trim: true, default: '', },
            date: { type: Date, },
        },
    },
    { timestamps: true, }
)

module.exports = mongoose.model('Contact', ContactSchema)
