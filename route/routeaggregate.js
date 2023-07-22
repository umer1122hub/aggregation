const routeAggregate = require("express").Router()
const controller = require("../controller/controllerAggregate")
routeAggregate.get("/aggregate",  controller.budgetInfo)
module.exports = routeAggregate