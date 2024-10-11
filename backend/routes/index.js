const { Router } = require("express")
const route = Router()
const userroute = require("./user")
// const adminroute = require("./admin")
route.use("/user", userroute)
// route.use("/account", accountroute)

module.exports = route;