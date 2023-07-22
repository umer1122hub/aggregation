const budget = require("../model/schema")
const budgetInfo = async (req,res)=>{
    // const info = await budget.aggregate([{$match: {wealth : {$gt : 0}}}, {$count : "total docs"}])
    // const info = await budget.aggregate([{$group: {_id:"$wealth", total:{$sum:1}, max:{$max: "$age"}}}])
    // const info = await budget.aggregate([{$group : {_id: null, total: {$sum: "$wealth"}}}])
    // const info = await budget.aggregate([{$group : {_id: null, total: {$min: "$wealth"}}}])
    // const info = await budget.aggregate([{'$sort': {'age': 1}}])
    // const info = await budget.aggregate([{$match: {age: {$gt : 0}} }, {$group : {_id: null, average: {$avg: "$wealth"}}}])
    console.log(info);
    res.status(200).json({
        information : info
    })
}
module.exports = {budgetInfo}