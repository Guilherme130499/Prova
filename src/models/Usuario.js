const mongoose = require('mongoose')

const schema = new mongoose.schema(
    {
        nome:{
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        senha:{
            type: String,
            required: true
        }
    },
    { timestamps: true })

const Usuario = mongoose.model('usuario', schema)

module.exports = Usuario