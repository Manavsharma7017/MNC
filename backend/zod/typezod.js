const zod = require("zod")
const usersigin = zod.object({
    username: zod.string().email({ message: "Email is incorrect" }),
    password: zod.string().min(6, { message: "password must be larger then 6 letter" })
})
const usertype = zod.object({
    username: zod.string().email({ message: "Email is incorrect" }),
    firstname: zod.string(),
    lastname: zod.string(),
    password: zod.string().min(6, { message: "password must be larger then 6 letter" }),
    address: zod.string()
})
const emailzod = zod.string().email({
    message: "Email is incorrect"
})
module.exports = {
    usertype,
    usersigin,
    emailzod
}