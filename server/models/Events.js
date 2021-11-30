const { Schema, model } = require("mongoose");

const eventSchema = new Schema(
    {
        title:{
            type:String,
            required: true,
            unique:false,
        },
        name: {
            type: String, 
            required: true
        },
        phoneNum: {
            type: String,
            required: true,
            match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
            trim: true
        },
        date: {
            type: Date,
            required: true,
        },
        from: {
           type:Schema.Types.ObjectId,
           ref:'User'
        }
    }
)

const eventSchema