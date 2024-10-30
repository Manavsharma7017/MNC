
const mongoose = require("mongoose")
require("dotenv").config()

try {
    if (!process.env.URI) {
        console.error("Mongodburl is not defined in the environment variables.");
    } else {
        mongoose.connect(process.env.URI)
            .then(() => console.log("MongoDB connected"))
            .catch(err => console.error("MongoDB connection error:", err));
    }

} catch (err) {
    console.log(err)
}
try {
    const fooditeamschema = new mongoose.Schema({
        id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
            trim: true,
            maxLength: 30
        },
        price: {
            type: Number,
            required: true,
        },
        imageurl: {
            type: String,
            required: true,
        }

    })
    const fooditeam = mongoose.model("fooditeam", fooditeamschema)
    const restaurantschema = new mongoose.Schema({
        id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
            trim: true,
            maxLength: 100
        },
        location: {
            type: String,
            required: true,
            trim: true,
            minLength: 30
        },
        fooditeam: {
            type: mongoose.Schema.Types.ObjectId,
            ref: fooditeam,
            required: true
        },
        imageurl: {
            type: String,
            required: true,
        }
    })
    const restaurant = mongoose.model("restaurant", restaurantschema)
    const cartiteamschema = new mongoose.Schema({
        id: {
            type: String,
            required: true,
            trim: true,
            maxLength: 30
        },
        tittle: {
            type: String,
            required: true,
            trim: true,
            maxLength: 30
        },
        quantity: {
            type: Number,
            required: true,
        }
    })
    const cart = mongoose.model("cart", cartiteamschema)
    const userschema = new mongoose.Schema(
        {
            username: {
                type: String,
                required: true,
                unique: true,
                trim: true,
                lowercase: true,
                minLength: 3,
                maxLength: 30
            },
            firstname: {
                type: String,
                trim: true,
                maxLength: 30
            },
            lastname: {
                type: String,
                trim: true,
                maxLength: 30
            },
            password: {
                type: String,
                mimLength: 6
            },
            address: {
                type: String,
            },
            OTP: {
                type: Number,
                required: true,
                trim: true,
            },
            usercart: {
                type: mongoose.Schema.Types.ObjectId,
                ref: cart,
            }
        }, { timestamps: true }
    )
    const user = mongoose.model("user", userschema)

    module.exports = {
        user,
        cart,
        restaurant,
        fooditeam,

    }
} catch (err) {
    console.log("unable to make mongo schema")
}
