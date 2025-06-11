const router = require('express').Router()
const ContactController = require('../controller/contact.controller')


router
    .post('/create-contact', ContactController.createContact)
    .get('/get-contact', ContactController.GetContact)

module.exports = router