import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler( async (req,res) => {

    const { name,email,password } = req.body

    if([name,email,password].some((field) => field?.trim() === ""))
    {
        throw new ApiError(400,"All fields are required")
    }

    const existedUser = await User.findOne({email})

    if (existedUser) {
        throw new ApiError(409, "User already exists")
    }

    const user =  await User.create({
        name,
        email,
        password
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser) {
        throw new ApiError(500, "Failed to create user")
    }

    return res.status(201).json(
        new ApiResponse(200,createdUser,"User created successfully")
    )
})


export{
    registerUser
}