const budget = require("../model/schema")
const entries = require("../seeder/enteries")
const budgetInfo = async (req,res)=>{
    await budget.insertMany(entries)
    .then(()=>{
        res.status(200).json({
            info: "received"
        })
    })
    .catch((err)=>{
        res.status(500).json({
            error: err
                })
    })
}
module.exports = {budgetInfo}