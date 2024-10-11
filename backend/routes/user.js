const { Router } = require("express")
const route = Router()
const { user } = require("../db/schema")
const { usertype, usersigin } = require("../zod/typezod")
const jwt = require("jsonwebtoken")
const { userexist } = require("../middleware/usermiddleware")
const bcrypt = require('bcrypt');
route.post("/signup", async (req, res) => {
    try {
        const data = req.body
        const userdata = usertype.safeParse(data)
        if (!userdata.success) {
            return res.status(411).json({
                message: "Incorrect inputs"
            })
        }

        else {
            const username = req.body.username
            const firstname = req.body.firstname
            const lastname = req.body.lastname
            const address = req.body.address
            const salt = await bcrypt.genSalt(10)
            const password = await bcrypt.hash(req.body.password, salt)


            const finduser = await user.findOne({ username })
            if (finduser) {
                res.status(200).json({
                    message: "user already exist"
                })
            }
            else {
                const usercreated = await user.create({
                    username,
                    firstname,
                    lastname,
                    password,
                    address
                })
                const userid = usercreated._id
                const token = jwt.sign({ userid }, process.env.jwt)

                res.status(200).json({
                    message: "User created successfully",
                    token,

                })
            }
        }
    } catch (e) {
        console.log(e)
        res.status(411).json({
            message: "error in creating user"
        })
    }

})
route.post("/signin", async (req, res) => {
    try {
        const userdata = usersigin.safeParse(req.body)
        if (!userdata.success) {
            res.status(411).json({
                message: "Incorrect inputs"
            })
        }
        else {
            const username = req.body.username
            const salt = await bcrypt.genSalt(10)
            const password = await bcrypt.hash(req.body.password, salt)
            console.log(password)
            const userexist = await user.findOne({
                username,
                password
            })
            if (userexist) {
                const userid = userexist._id
                const token = jwt.sign({ userid }, process.env.jwt)
                res.status(200).json({
                    message: "User created successfully",
                    token,
                })
                return;
            }
            else {
                res.status(411).json({
                    message: "Error while logging in"
                })
            }
        }
    } catch (e) {
        res.status(411).json({
            message: "error while login"
        })
    }
})




module.exports = route;
