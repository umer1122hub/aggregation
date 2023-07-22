const mongoose = require("mongoose")
const express = require("express")
const app = express()
app.use(express.json())
const routeBudget = require("./route/routeEntry")
app.use("/", routeBudget)
const routeAggregate = require("./route/routeaggregate")
app.use("/", routeAggregate)

const url = "mongodb://0.0.0.0:27017/aggregation"
mongoose.connect(url).then(()=>{
    console.log("connected to db");
    app.listen(4000, ()=>{
        console.log("connected to postman");
    })
}
).catch(()=>{
    console.log("error");
})
