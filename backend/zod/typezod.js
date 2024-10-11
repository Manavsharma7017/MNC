const zod = require("zod")
const usersigin = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6)
})
const usertype = zod.object({
    username: zod.string().email(),
    firstname: zod.string(),
    lastname: zod.string(),
    password: zod.string().min(6),
    address: zod.string()
})
module.exports = {
    usertype,
    usersigin,
}