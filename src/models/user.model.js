import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            index: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        fullName: {
            type: String,
            required: true,
            trim: true
        },
        avatar: {
            type: String, // cloudinary
            required: true,
        },
        coverImage: {
            type: String, // cloudinary
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"

            }
        ],
        password: {
            tyep: String,
            required: [true, "password is required!"]
        },
        refreshToken: {
            tyep: String,
        }
    }, { timestamps: true }
)

// arrow function k pass this (current context) nhi hota isliye ye use kia

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next()
    this.password = bcrypt.hash(this.password, 10)
    return next()
})

// bcrypt encrypt or decrypt k sath enc. or non-enc data ko compare b kr skti hy (it return boolean result.)
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}
// ye kam kr k sedha jwt token k liye .env file my ja k expiry wgera likh do

// ab method bna dy token generate krny ka
userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )

}
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )

}

export const User = mongoose.model("User", userSchema)