const routeBudget = require("express").Router()
const controller = require("../controller/controllerEntry")
routeBudget.post("/budget", controller.budgetInfo)
module.exports = routeBudget