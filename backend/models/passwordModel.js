import mongoose from "mongoose";

const passwordSchema = mongoose.Schema(
    {
        website: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true
    }
);

export const Password = mongoose.model('Cat', passwordSchema);