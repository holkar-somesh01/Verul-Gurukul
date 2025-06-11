const multer = require("multer")
const path = require("path")

const Storage = multer.diskStorage({
    filename: (req, file, cb) => {
        const fn = Date.now() + path.extname(file.originalname)
        cb(null, fn)
    }
})
const UploadSingle = multer({ storage: Storage }).single("hero")
module.exports = { UploadSingle }