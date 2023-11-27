import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    name: {type: String},
    age: {type: Number}
})

export const User = mongoose.model("User", UserSchema);

