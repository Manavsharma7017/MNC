const { Router } = require("express")
const route = Router()
const { user, userOTP } = require("../db/schema")
const { usertype, usersigin, emailzod } = require("../zod/typezod")
const jwt = require("jsonwebtoken")
const { userexist } = require("../middleware/usermiddleware")
const bcrypt = require('bcrypt');
const { generater } = require("../middleware/otpgenerater")
const { mail } = require("../middleware/otpmail")
route.post("/signup", async (req, res) => {
    try {
        const data = req.body
        const userdata = usertype.safeParse(data)
        if (!userdata.success) {
            return res.status(411).json({
                message: useremail.error.errors[0].message
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
                const usercreated = await user.updateOne({ username, }, {
                    firstname,
                    lastname,
                    password,
                    address
                })
                res.status(200).json({
                    message: ""
                })
                const userid = usercreated._id
                const token = jwt.sign({ userid }, process.env.jwt)

                res.status(200).json({
                    message: "User created successfully",
                    token,

                })
                return
            }
            else {
                res.status(411).json({
                    message: "user does not exist"
                })
                return
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
                message: useremail.error.errors[0].message
            })
        }
        else {
            const username = req.body.username
            const userexist = await user.findOne({
                username,
            })
            const ispasstrue = await bcrypt.compare(req.body.password, userexist.password)
            if (userexist && ispasstrue) {
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
                    message: "Incorrect email or passward"
                })
            }
        }
    } catch (e) {
        res.status(411).json({
            message: "Email is Incorrect"
        })
    }
})


route.post("/otp", async (req, res) => {
    try {
        const username = req.body.username
        const useremail = emailzod.safeParse(username)
        if (!useremail.success) {
            res.status(200).json({
                message: useremail.error.errors[0].message
            })
            return
        }
        else {
            const userexist = await user.findOne({
                username,
            })
            if (userexist) {
                res.status(200).json({
                    message: "Email already exist"
                })
                return
            }
            else {
                const OTP = generater();
                await user.create({
                    username,
                    OTP
                })
                mail({ otp: OTP, email: username })
                res.status(200).json({
                    message: "OTP has been send to your email successfully"
                })
            }
        }

    } catch (e) {
        res.status(200).json({
            message: "error in sendind OTP or use you have try create account one os click on resend otp "
        })
    }
})
route.post("/resendotp", async (req, res) => {
    try {
        const username = req.body.username
        const useremail = emailzod.safeParse(username)
        if (!useremail.success) {
            res.status(411).json({
                message: useremail.error.errors[0].message
            })
            return
        }
        else {
            const userexist = await user.findOne({
                username,
            })
            if (userexist) {
                const OTP = generater();
                await user.updateOne({
                    username
                }, {
                    OTP
                })
                mail({ otp: OTP, email: username })
                res.status(200).json({
                    message: "OTP has been send to your email successfully"
                })
            }
            else {
                res.status(411).json({
                    message: "Email doesnot exist"
                })
                return
            }
        }

    } catch (e) {
        res.status(411).json({
            message: "error in sendind OTP or use you have try create account one os click on resend otp "
        })
    }
})
module.exports = route;
