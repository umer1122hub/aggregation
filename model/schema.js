const mongoose = require("mongoose")
const budgetSchema = mongoose.Schema({
    name : {
        type: String,
        requird: true
    },
    wealth : {
        type: Number,
        required: true,
        validate: {
            validator: function(val){
                return val > 50000;
            },
            message: "Low wealth!"
        }
    },
    age:{
        type: Number,
        required: true,
        validate: {
            validator: function(val){
                return val > 18;
            },
            message: "Under age"
        }
    }
})

const budget = mongoose.model("budget", budgetSchema)
module.exports = budget