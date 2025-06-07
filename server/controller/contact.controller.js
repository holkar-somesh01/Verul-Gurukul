const expressAsyncHandler = require('express-async-handler')
const { CheckEmpty } = require('../utils/checkEmpty')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const Contact = require('../models/Contact')

exports.createContact = expressAsyncHandler(async (req, res) => {
    const { name, email, subject, mobile, password, message } = req.body
    const { isError, error } = CheckEmpty({ name, password, email, subject, mobile, message })
    if (isError) {
        return res.status.json({ message: "All Fields Required", error })
    }
    if (!validator.isEmail(email)) {
        return res.status(400).json({ message: "Enter a Valid Email" })
    }
    if (!validator.isStrongPassword(password)) {
        return res.status(400).json({ message: "Provide Strong Password" })
    }
    if (mobile && !validator.isMobilePhone(mobile, "en-IN")) {
        return res.status(400).json({ message: "Invalid Mobile Number" })
    }
    const isFound = await Contact.findOne({ email })
    if (isFound) {
        return res.status(400).json({ message: "Admin Already Registered." })
    }
    const hash = await bcrypt.hash(password, 10)
    const result = await Contact.create({ name, email, subject, mobile, password: hash, message })
    res.json({ message: "Contact Create Success", result })
})

exports.GetContact = expressAsyncHandler(async (req, res) => {
    const result = await Contact.find()
    res.json({ message: "Contacts Get Success", result })
})